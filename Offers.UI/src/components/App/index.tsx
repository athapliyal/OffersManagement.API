import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { BulkImportOffer } from '../BulkImportOffer';
import { Header } from '../Header';
import OffersTable from '../OffersTable';

import './App.scss';

function App() {

  return (
    <>
      <Header />
      <OffersTable />
    </>
    
    // <BulkImportOffer />
  );
}

export default App;
