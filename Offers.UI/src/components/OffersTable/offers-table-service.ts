import { Offer } from './offers-table-model';

import { OFFERS_API_BASE_URL } from './offers-table-constants';

export const getOffers = async () => {
    const response = await fetch(`${OFFERS_API_BASE_URL}/offers`);
    const data: Offer[] = await response.json();

    return data;
}