import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import TableDetails from './components/pages/TableDetails/TableDetails';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesRedux';



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<TableDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App;
