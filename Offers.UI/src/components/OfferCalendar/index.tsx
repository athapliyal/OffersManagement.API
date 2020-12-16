import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { INITIAL_EVENTS } from "./event-utils";

import "./calendar.scss";

const OfferCalendar: React.FC = () => {
  return (
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
          initialEvents={INITIAL_EVENTS}
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