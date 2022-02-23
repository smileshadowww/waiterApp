import styles from './TableDetails.module.scss';
import { Button, Container, Row, Col, Dropdown, Nav, Tab, } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useState } from 'react';
import { getThatTable } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import shortid from 'shortid';
import TextInput from '../../common/TextInput/TextInput';


const TableDetails = () => {
  const [thatTable, setThatTable] = useState('');

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
      // thatTable = tables.filter(table => table.id === id)[0];
      setThatTable(tables.filter(table => table.id === id)[0]);
      console.log(thatTable);
    } else {
      // thatTable = tables.filter(table => table.id === id);
      setThatTable(tables.filter(table => table.id === id));
      console.log(thatTable);

    }
  }, [{id}]);

  // const thatTable = tables.filter(table => table.id === id)[0];

  const [status, setStatus] = useState(thatTable.status);
  const [bill, setBill] = useState(thatTable.bill);
  const [clients, setClients] = useState(thatTable.peopleAmount);
  const [maxClients, setMaxClients] = useState(thatTable.maxPeopleAmount);

  console.log(id);
  console.log(tables);
  console.log(thatTable);

  return (
    <Row>
      <div>Table {id}</div>
      <div>Status:
      <select className="form-select" defaultValue={thatTable.status} aria-label="Default select example">
        {statuses.map(filtr => <option onChange={e => setStatus(e.target.value)} key={shortid()}value={filtr}>{filtr}</option>)}
      </select></div>
      <div>People: <TextInput value={thatTable.peopleAmount} onChange={e => setClients(e.target.value)} />/<TextInput value={thatTable.maxPeopleAmount} onChange={e => setMaxClients(e.target.value)} /></div>
      <div>Bill: $ <TextInput value={thatTable.bill} onChange={e => setBill(e.target.value)} /></div>
    </Row >
  )
}

export default TableDetails
