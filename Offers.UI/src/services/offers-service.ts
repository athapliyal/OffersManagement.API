import { Offer } from '../models/OfferModel';

import { OFFERS_API_BASE_URL } from './service-constants';

export const getOffers = async () => {
    const response = await fetch(`${OFFERS_API_BASE_URL}/offers`);
    const data: Offer[] = await response.json();

    return data;
}