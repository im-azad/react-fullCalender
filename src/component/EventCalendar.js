import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
const events = [
  {
    id: 1,
    title: 'event 1',
    start: '2022-12-14T10:00:00',
    end: '2022-12-14T12:00:00',
  },
  {
    id: 2,
    title: 'event 2',
    start: '2022-11-14T10:00:00',
    end: '2022-11-14T12:00:30',
  },
  { 
    id: 3, 
    title: 'event 3', 
    start: '2022-11-28', 
    end: '2022-11-30' },
];
function EventCalendar() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: 'prev,next',
          center: 'title',   
          end: 'timeGridDay,timeGridWeek,dayGridMonth new',
        }}
        customButtons={{
          new: {
            text: 'new',
            click: () => console.log('new event'),
          },
        }}
        events={events}
        eventColor="green"
        nowIndicator
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event.id)}
      />
  </div>
  )
}

export default EventCalendar