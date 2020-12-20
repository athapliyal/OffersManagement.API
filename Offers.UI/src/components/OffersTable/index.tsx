import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import Table from "react-bootstrap/Table";

import { Preloader } from "../Preloader";
import { Pagination } from "../Pagination";
import { OfferTableHeader } from './OfferTableHeader';
import { OfferTableRow } from "./OfferTableRow";

import { Offer } from "../../models/OfferModel";
import { OFFER_TABLE_HEADERS } from "./offers-table-constants";

import { getOffers } from "../../services/offers-service";

import "./offers-table.scss";

const OffersTable: React.FC = () => {
  const [offersList, setOffersList] = useState<Offer[]>([]);
  const mountedRef = useRef(true);

  useEffect(() => {
    getOffers().then((offers) => {
      // if component is not mounted, cancel
      if (!mountedRef.current) return null;
      setOffersList(offers);
    });

    //component unmount
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const headers = useMemo(() => OFFER_TABLE_HEADERS, []);

  const onCopy = useCallback(event => {
    console.log(event);
  }, []);

  const onDelete = useCallback(event => {
    console.log(event);
  }, []);

  if (offersList?.length !== 0) {
    return (
      <>
        <div className="offers-table-wrapper">
          <OfferTableHeader />
          <Table responsive hover bordered>
            <thead>
              <tr>
                {headers.map((header, index) => {
                  return <th key={index}>{header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {offersList.map((offer) => {
                return <OfferTableRow offer={offer} onCopy={onCopy} onDelete={onDelete} />;
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
