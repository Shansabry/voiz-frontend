import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { CardList } from './components/CardList';
import { FilterSection } from './components/FilterSection';
import { Footer } from './components/Footer';
import Header from './components/Header';

function App() {
  const [userName, setUserName] = React.useState();
  return (
    <React.Fragment>
      <Header userName={userName} setUserName={setUserName} />
      <Container>
        <FilterSection />
      </Container>
      <CardList userName={userName} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
