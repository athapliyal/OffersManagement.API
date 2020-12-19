import { EventInput } from '@fullcalendar/react'
import { Offer } from '../../models/OfferModel'

export const MapOffersToModel: EventInput[] = (offers: Offer[]) => {
  return offers.map(offer => ({
    id:offer.id,
    title: offer.title,
    start: offer.startDate
  }))
} 