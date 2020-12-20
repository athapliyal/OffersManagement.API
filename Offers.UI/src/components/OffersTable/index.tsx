import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import { Preloader } from "../Preloader";
import { Pagination } from "../Pagination";

import { Offer, OfferCategory, OfferStatus } from "../../models/OfferModel";
import { OFFER_TABLE_HEADERS } from "./offers-table-constants";

import { getOffers } from "../../services/offers-service";

import "./offers-table.scss";

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
      <>
        <div className="offers-table-wrapper">
          <Table responsive hover bordered>
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
                    <td>{offer.title}</td>
                    <td>{OfferCategory[offer.category]}</td>
                    <td>{offer.description}</td>
                    <td>{offer.startDate}</td>
                    <td>{offer.endDate}</td>
                    <td>{OfferStatus[offer.status]}</td>
                    <td>
                      <Button variant="primary" value={offer.id} onClick={onCopy}>
                        Copy
                      </Button>
                      <Button variant="danger" value={offer.id} onClick={onDelete}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="pagination-wrapper">
          <Pagination />
        </div>
      </>
    );
  }

  return <Preloader />;
};

export default OffersTable;
