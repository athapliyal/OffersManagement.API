import React, { useEffect, useState, useMemo, useRef } from "react";
import Table from "react-bootstrap/Table";

import { Preloader } from "../Preloader";
import { Pagination } from "../Pagination";
import { OfferTableHeader } from './OfferTableHeader';
import { OfferTableRow } from "./OfferTableRow";
import { IGenericModalProps, GenericModal } from '../GenericModal';

import { Offer } from "../../models/OfferModel";
import { OFFER_TABLE_HEADERS } from "./offers-table-constants";
import { OnCopyModalBody, OnDeleteModalBody } from './offers-table-config';

import { getOffers } from "../../services/offers-service";

import "./offers-table.scss";

const OffersTable: React.FC = () => {
  const [offersList, setOffersList] = useState<Offer[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState<IGenericModalProps>({} as IGenericModalProps);
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

  const onCopy = () => {
    setShowModal(true);

    setModalProps({
      title: "Copy offer",
      ModalBody: OnCopyModalBody,
      cancelText: "Cancel",
      submitText: "Copy offer",
      closeCallback: () => setShowModal(false),
      submitCallback: onCopySelected
    })
  }

  const onDelete = (setModalProps: any) => {
    setShowModal(true);

    setModalProps({
      title: "Delete offer",
      ModalBody: OnDeleteModalBody,
      cancelText: "Cancel",
      submitText: "Delete offer",
      closeCallback: () => setShowModal(false),
      submitCallback: onDeleteSelected
    })
  };

  const onCopySelected = () => alert('copied');
  const onDeleteSelected = () => alert('delete');

  const headers = useMemo(() => OFFER_TABLE_HEADERS, []);

  if (offersList?.length !== 0) {
    return (
      <>
        { showModal && <GenericModal {...modalProps} />}
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
                return <OfferTableRow
                  key={offer.id}
                  offer={offer}
                  onCopy={() => onCopy()}
                  onDelete={() => onDelete(setModalProps)}
                />;
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
