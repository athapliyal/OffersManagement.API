export interface Offer {
    id: string,
    title: string,
    category: OfferCategory,
    description: string,
    remainingCodes: number[],
    startDate: Date,
    endDate: Date,
    lastUpdated: Date,
    baseWeight: number,
    status: OfferStatus
}

export enum OfferCategory { Clothing = 1, Food = 2, Sport = 3 };
export enum OfferStatus { Published = 1, Draft = 2, Pending = 3 };