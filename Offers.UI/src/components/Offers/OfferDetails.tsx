import Card from 'react-bootstrap/Card'

export const OfferDetails: React.FC = () => {
    return (
        <>
            <div className="offer-details-wrapper">
                <div className="offer-details-header">
                    <div className="offer-details-header-content">
                        <h1>Offer details</h1>
                    </div>
                </div>
                <div className="offer-details-form">
                    <Card>
                        <Card.Header>Hello</Card.Header>
                        <Card.Body>How are!</Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
};
