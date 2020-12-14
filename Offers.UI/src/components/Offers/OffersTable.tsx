import React, {useEffect, useState, useMemo, useCallback} from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

import { Offer } from './offers.model';
import {getOffers} from './offers.service';

const OffersTable: React.FC = () => {

    const [offersList, setOffersList] = useState<Offer[]>([]);

    useEffect(() => {
        getOffers().then(offers => {
            setOffersList(offers);
        });
    }, [])

    const headers = useMemo(
        () => [
            'ID', 
            'TITLE', 
            'CATEGORY', 
            'DESCRIPTION', 
            'REMAINING CODES', 
            'START DATE AND TIME', 
            'END DATE AND TIME', 
            'WHEN LAST UPDATED', 
            'BASE WEIGHT', 
            'STATUS', 
            ''],[]);
    
    const onCopy = useCallback((props) => {
        props.preventDefault();
        console.log(`Copying ${props.target.value}`);
    }, [])

    const onDelete = useCallback((props) => {
        props.preventDefault();
        console.log(`Deleting ${props.target.value}`);
    }, [])

    if(offersList && offersList.length !== 0) {
        return(
            <Table responsive>
            <thead>
                <tr>
                    {headers.map((header, index) => {
                        return <th key={index}>{header}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {offersList.map((offer, index) => {
                    return (
                        <tr key={index}>
                            <td>{offer.id}</td>
                            <td>{offer.title}</td>
                            <td>{offer.category}</td>
                            <td>{offer.description}</td>
                            <td>{offer.remainingCodes}</td>
                            <td>{offer.startDate}</td>
                            <td>{offer.endDate}</td>
                            <td>{offer.lastUpdated}</td>
                            <td>{offer.baseWeight}</td>
                            <td>{offer.status}</td>
                            <td>
                                <Button variant='outline-primary' value={offer.id} onClick={onCopy}>Copy</Button>
                                <Button variant='outline-danger' value={offer.id} onClick={onDelete}>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            </Table>
            )
    }

    return (
        <Spinner animation="border" role="status"></Spinner>
    )
}

export default OffersTable;