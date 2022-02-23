import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Table from '../../features/Table/Table'
import { Offcanvas, Navbar, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';



const Home = () => {

const tables = useSelector(state => getAllTables(state));
console.log(tables);
  return (
    <>
      <h1>Welcome to main page</h1>
      <ul>
        {tables.map(table => (
          <Table key={table.id} status={table.status} id={table.id}>
          </Table>
        ))}
      </ul>

    </>
  )
}

export default Home
