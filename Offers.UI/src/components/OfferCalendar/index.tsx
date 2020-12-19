import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import { useEffect, useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { Preloader } from '../Preloader';

import { CalendarOffer } from "../../models/CalendarOfferModel";
import { MapOffersToModel } from "./event-utils";
import { getOffers } from "../../services/offers-service";

import "./calendar.scss";

const OfferCalendar: React.FC = () => {
  const [offers, setOffers] = useState<CalendarOffer[]>([]);
  const [loadingOffers, setLoadingOffers] = useState<boolean>(true);

  useEffect(() => {
    getOffers().then((offers) => {
      setOffers(MapOffersToModel(offers));
      setLoadingOffers(false);
    })
    .catch((err) => {
      throw new Error(err);
    })
  }, []);

  return loadingOffers ? <Preloader /> : (
    <div className="offer-calendar__wrapper">
      <div className="offer-calendar__body">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          initialEvents={offers}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};

const handleEventClick = (clickInfo: EventClickArg) => {
  alert(clickInfo.event);
};

export default OfferCalendar;