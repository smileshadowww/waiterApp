import styles from './TableDetails.module.scss';
import { Button, Spinner, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useState } from 'react';
import { getThatTable, putTables } from '../../../redux/tablesRedux';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import shortid from 'shortid';
import TextInput from '../../common/TextInput/TextInput';
import BillInput from '../../common/BillInput/BillInput';


const TableDetails = () => {
  const [thatTable, setThatTable] = useState('');
  const dispatch = useDispatch();
  const statuses = [
    'Cleaning',
    'Free',
    'Reserved',
    'Busy',
  ];

  const tables = useSelector(state => state.tables);
  const { id } = useParams();
  useEffect(() => {
    if(tables.filter(table => table.id === id).length >0){
      setThatTable(tables.filter(table => table.id === id)[0]);
      // console.log(tables.filter(table => table.id === id)[0]);
      setStatus((tables.filter(table => table.id === id)[0]).status);
      setBill((tables.filter(table => table.id === id)[0]).bill);
      setClients((tables.filter(table => table.id === id)[0]).peopleAmount);
      setMaxClients((tables.filter(table => table.id === id)[0]).maxPeopleAmount);
    } else {
      setThatTable(tables.filter(table => table.id === id));
      // console.log(thatTable);

    }
  }, [tables]);

  const [status, setStatus] = useState(thatTable.status);
  const [bill, setBill] = useState(thatTable.bill);
  const [clients, setClients] = useState(thatTable.peopleAmount);
  const [maxClients, setMaxClients] = useState(thatTable.maxPeopleAmount);

  const handleSubmit = (table) => {
        const tableUpdated = {
          id,
          status: status,
          peopleAmount: clients,
          maxPeopleAmount: maxClients,
          bill: bill
        }
        console.log(tableUpdated);
        dispatch(putTables(tableUpdated))
  };
  const checkStatus = () => {
    if(status === 'Free' || status === 'Cleaning'){
      setClients('0')
    }
  }
  // console.log(id);
  // console.log(tables);
  console.log(thatTable);

  return (
    <>{tables.length > 0 &&
      <Row>
        <div className={styles.title}>Table {id}</div>
        <div>Status:
        <select className="form-select" value={status} onChange={e => setStatus(e.target.value) && checkStatus()} aria-label="Default select example">
          {statuses.map(filtr => <option onChange={e => setStatus(e.target.value)} key={shortid()}value={filtr}>{filtr}</option>)}
        </select></div>
        <div>People: <TextInput value={clients} onChange={e => setClients(e.target.value)} />/<TextInput value={maxClients} onChange={e => setMaxClients(e.target.value)} min="0" max="10" /></div>
        <div>Bill: $ <BillInput value={bill} onChange={e => setBill(e.target.value)} /></div>
        <Button onClick={() => handleSubmit()}>Update</Button>
      </Row >
    }
      {tables.length === 0 &&
        <>
          <Spinner animation="border" role="status">
          </Spinner>
          <span>Loading...</span>
        </>
      }
    </>
  )
}

export default TableDetails
