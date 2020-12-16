import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";

import { Offer, OfferCategory, OfferStatus } from "./offers-table-model";
import { OFFER_TABLE_HEADERS } from "./offers-table-constants";

import { getOffers } from "./offers-table-service";

const OffersTable: React.FC = () => {
  const [offersList, setOffersList] = useState<Offer[]>([]);
  const mountedRef = useRef(true);

  const getOfferList = useCallback(() => {
    return getOffers().then((offers) => {
      // if component is not mounted, cancel
      if (!mountedRef.current) return null;
      setOffersList(offers);
    });
  }, []);

  useEffect(() => {
    getOfferList();

    //component unmount
    return () => {
      mountedRef.current = false;
    };
  }, [getOfferList]);

  const headers = useMemo(() => OFFER_TABLE_HEADERS, []);

  const onCopy = useCallback((props) => {
    props.preventDefault();
    console.log(`Copying ${props.target.value}`);
  }, []);

  const onDelete = useCallback((props) => {
    props.preventDefault();
    console.log(`Deleting ${props.target.value}`);
  }, []);

  if (offersList?.length !== 0) {
    return (
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            {headers.map((header, index) => {
              return <th key={index}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {offersList.map((offer, index) => {
            return (
              <tr key={index}>
                <td>{offer.id}</td>
                <td>{offer.title}</td>
                <td>{OfferCategory[offer.category]}</td>
                <td>{offer.description}</td>
                <td>{offer.startDate}</td>
                <td>{offer.endDate}</td>
                <td>{OfferStatus[offer.status]}</td>
                <td>
                  <Button variant="outline-primary" value={offer.id} onClick={onCopy}>
                    Copy
                  </Button>
                  <Button variant="outline-danger" value={offer.id} onClick={onDelete}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

  return <Spinner animation="border" role="status"></Spinner>;
};

export default OffersTable;
