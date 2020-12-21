import axios from 'axios';
import { Offer } from '../models/OfferModel';

import { OFFERS_API_BASE_URL } from './service-constants';

export const getOffers = async () => {
    const response = await fetch(`${OFFERS_API_BASE_URL}/offers`);
    const data: Offer[] = await response.json();

    return data;
}

export const deleteOffer = async (id: string) => {
    const res = await axios.delete(`${OFFERS_API_BASE_URL}/offers?id=${id}`);
    return res;
}