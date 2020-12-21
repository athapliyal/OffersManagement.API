import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { NewOffer } from './NewOffer'; 
import { GenericModal } from "../GenericModal";

export const OfferTableHeader: React.FC = () => {
const [showModal, setShowModal] = useState<boolean>(false);

const cancelNewOfferForm = () => setShowModal(false);

const submitNewOfferForm = () => {
    alert('submitted');
}

const modalProps = {
    title: "Add new offer",
    ModalBody: NewOffer,
    cancelText: "Cancel",
    submitText: "Upload offer",
    closeCallback: cancelNewOfferForm,
    submitCallback: submitNewOfferForm
}

  return (
    <>
      {showModal && <GenericModal {...modalProps} />}

      <div className="offer-table-header">
        <div className="offer-table-header-content">
          <h1>All Offers</h1>
          <Button className="create-offer" variant="primary" onClick={() => setShowModal(true)}>
            New offer
          </Button>
          <Link to="/bulk-import">
            <Button className="import-offer" variant="outline-primary">
              Import offers
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
