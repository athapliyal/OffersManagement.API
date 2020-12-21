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

export enum OfferCategory { Clothing = 0, Food = 1, Sports = 2 };
export enum OfferStatus { Published = 0, Draft = 1, Pending = 2 };