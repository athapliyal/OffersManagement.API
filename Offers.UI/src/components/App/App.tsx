import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { BulkImportOffer } from '../BulkImportOffer/BulkImportOffer';

import OffersTable from '../OffersTable/OffersTable';

import './App.scss';

function App() {

  return (
    <BulkImportOffer />
    // <Container fluid>
    //   <Row>
    //     #Header
    //   </Row>
    //   <Row>
    //     <OffersTable />
    //   </Row>
    //   <Row>
    //     #Footer
    //   </Row>
    // </Container>
  );
}

export default App;
