import React from 'react';
import '../styling/Events.css'; // Import the CSS file

const eventsData = [
  {
    title: "Trading Workshop",
    time: "10:00 AM - 12:00 PM",
    location: "Room F-103",
  },
  {
    title: "Financial Seminar",
    time: "01:00 PM - 03:00 PM",
    location: "Auditorium",
  },
  {
    title: "Market Analysis Talk",
    time: "03:30 PM - 05:00 PM",
    location: "Room F-202",
  },
  {
    title: "Investment Strategies Session",
    time: "06:00 PM - 07:30 PM",
    location: "Room G-101",
  }
];

const Events = () => {
  return (
    <section className="events-section" id="events">
      <h3 className="events-heading">Upcoming Events</h3>
      <div className="events-grid">
        {eventsData.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-card-header">
              <h3 className="event-card-title">{event.title}</h3>
              <div className="event-card-time">{event.time}</div>
            </div>
            <div className="event-card-location">{event.location}</div>
            <button className="event-card-enroll">Enroll</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
