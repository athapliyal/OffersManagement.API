import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { BulkImportOffer } from '../BulkImportOffer';
import { LoginScreen } from '../LoginScreen';

import { Header } from '../Header';
import OffersTable from '../OffersTable';

import './App.scss';

function App() {

  return (
    <>
      <LoginScreen />      
    </>
    
    // <Header />
    // <OffersTable />
    // <BulkImportOffer />
  );
}

export default App;
