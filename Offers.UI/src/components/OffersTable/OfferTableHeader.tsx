import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const OfferTableHeader: React.FC = () => {
    return (
        <div className="offer-table-header">
            <div className="offer-table-header-content">
                <h1>All Offers</h1>
                <Button className="create-offer" variant="primary">New offer</Button>
                <Link to="/bulk-import">
                    <Button className="import-offer" variant="outline-primary">Import offers</Button>
                </Link>
            </div>
        </div>
    )
}