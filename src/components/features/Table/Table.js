import styles from './Table.module.scss';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Table = ({id, status}) => {
  return (
    <div className={clsx(styles.card, "d-flex bd-highlight mb-3 align-content-center")}>
      <div className={clsx(styles.tableId, "p-2 bd-highlight")}><p >Table {id}</p>
      </div>
      <div className={clsx(styles.status, "p-2 bd-highlight")}><p ><span>Status:</span>{status}</p>
      </div>
      <div className={clsx("ms-auto p-2 bd-highlight")}><Button className={styles.button} href={"/table/"+id}>See More</Button>
      </div>
    </div >
  )
}

export default Table
