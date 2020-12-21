import React, { useEffect, useState, useRef, useCallback } from "react";

import { ToastContainer } from 'react-toastify';

import { Preloader } from "../Preloader";
import { Pagination } from "../Pagination";
import { IGenericModalProps, GenericModal } from '../GenericModal';

import { Offer } from "../../models/OfferModel";
import { OffersTableBody, OnCopyModalBody, OnDeleteModalBody } from './OffersTableBody';

import { getOffers, deleteOffer } from "../../services/offers-service";
import { onDeleteToastSuccess, onDeleteToastFailure } from '../../notifications/toast-config';

import "./offers-table.scss";

const OffersTable: React.FC = () => {
  const [offersList, setOffersList] = useState<Offer[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState<IGenericModalProps>({} as IGenericModalProps);
  const mountedRef = useRef(true);

  const retrieveOffers = useCallback(() => {
    getOffers().then((offers) => {
      // if component is not mounted, cancel
      if (!mountedRef.current) return null;
      setOffersList(offers);
    });
  }, []);

  useEffect(() => {
    retrieveOffers();

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
    const res = deleteOffer(offerId);
    setShowModal(false);

    res.then(() => {
      retrieveOffers();
      onDeleteToastSuccess();
    })
      .catch(err => {
        onDeleteToastFailure();
      });
  }

  if (offersList?.length !== 0) {
    return (
      <>
        <ToastContainer />
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
