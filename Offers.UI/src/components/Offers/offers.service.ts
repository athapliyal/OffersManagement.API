
import { Offer } from './offers.model';

export const getOffers = async () => {
    const response = await fetch('http://localhost:5000/api/offers');
    const data: Offer[] = await response.json();
    return data;
}