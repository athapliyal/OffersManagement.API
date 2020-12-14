export interface Offer {
    id: number,
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
enum OfferCategory {Clothing = 1, Food = 2, Sport = 3};
enum OfferStatus {Published = 1, Draft = 2, Peding = 3};