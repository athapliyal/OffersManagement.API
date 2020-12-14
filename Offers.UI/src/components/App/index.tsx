import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { BulkImportOffer } from '../BulkImportOffer';
import OffersTable from '../OffersTable';

import './App.scss';

function App() {

  return (
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
    <BulkImportOffer />
  );
}

export default App;
