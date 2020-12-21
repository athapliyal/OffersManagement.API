import React, { useEffect, useState, useRef } from "react";

import { Preloader } from "../Preloader";
import { Pagination } from "../Pagination";
import { IGenericModalProps, GenericModal } from '../GenericModal';

import { Offer } from "../../models/OfferModel";
import { OffersTableBody, OnCopyModalBody, OnDeleteModalBody } from './OffersTableBody';

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

  const onCopy = (offerId: string) => {
    setShowModal(true);

    setModalProps({
      title: "Copy offer",
      ModalBody: OnCopyModalBody,
      cancelText: "Cancel",
      submitText: "Copy offer",
      closeCallback: () => setShowModal(false),
      submitCallback: () => onCopySelected(offerId)
    })
  }

  const onDelete = (offerId: string) => {
    setShowModal(true);

    setModalProps({
      title: "Delete offer",
      ModalBody: OnDeleteModalBody,
      cancelText: "Cancel",
      submitText: "Delete offer",
      closeCallback: () => setShowModal(false),
      submitCallback: () => onDeleteSelected(offerId)
    })
  };

  const onCopySelected = (offerId: string) => {
    setShowModal(false);
    alert(`${offerId} copied`);
  }

  const onDeleteSelected = (offerId: string) => {
    setShowModal(false);
    alert(`${offerId} delete`);
  }

  if (offersList?.length !== 0) {
    return (
      <>
        { showModal && <GenericModal {...modalProps} />}
        <div className="offers-table-wrapper">
          <OffersTableBody offersList={offersList} onCopy={onCopy} onDelete={onDelete} />
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
