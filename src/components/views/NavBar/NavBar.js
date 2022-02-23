import styles from './NavBar.module.scss';
import { Nav, Navbar, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const NavBar = () => {
  return (
    <>
      <Navbar className={styles.navbar} expand='xl' bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className={clsx(styles.text, styles.title)}>Waiter.app</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" className={styles.text}>Home</Nav.Link>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default NavBar
