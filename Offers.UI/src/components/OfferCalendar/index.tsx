import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// TODO: These events are offers that will eventually come as global state because the same offer information is used in different components
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