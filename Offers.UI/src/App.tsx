import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import OffersTable from './components/OffersTable/OffersTable';

function App() {

  return (
    <Container fluid>
      <Row>
        #Header
      </Row>
      <Row>
        <OffersTable />
      </Row>
      <Row>
        #Footer
      </Row>
    </Container>
  );
}

export default App;
