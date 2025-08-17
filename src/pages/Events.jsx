import React from 'react';
import './Events.css'; // Assuming you have a CSS file for styling

const events = [
  { id: 1, title: 'Freshers Party', date: '2025-09-01', description: 'Welcome the new batch with fun, music, and dance. Join us for a night full of excitement!' },
  { id: 2, title: 'Tech Fest', date: '2025-10-15', description: 'Showcase your skills in coding, robotics, and tech quizzes. Prizes and certificates await!' },
  { id: 3, title: 'Alumni Meet', date: '2025-11-10', description: 'Reconnect with old friends and share your journey. Networking opportunities galore.' },
  { id: 4, title: 'Annual Sports Day', date: '2025-12-05', description: 'Compete in various sports and cheer for your teams. Let’s make it a day to remember!' },
];

const news = [
  { id: 1, headline: 'New Research Lab Inaugurated', date: '2025-08-20' },
  { id: 2, headline: 'College Ranked Top 10 in State', date: '2025-07-30' },
  { id: 3, headline: 'Scholarship Program Extended', date: '2025-06-25' },
];

export default function Events() {
  return (
    <div className="events-container">
      <h2 className="events-title">Events & News</h2>

      <section className="events-section">
        <h3>Upcoming Events</h3>
        <ul className="events-list">
          {events.map(e => (
            <li key={e.id} className="event-card">
              <div className="event-date">{new Date(e.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
              <div className="event-details">
                <strong className="event-title">{e.title}</strong>
                <p className="event-desc">{e.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="news-section">
        <h3>Latest News</h3>
        <ul className="news-list">
          {news.map(n => (
            <li key={n.id} className="news-item">
              <span className="news-headline">{n.headline}</span>
              <span className="news-date">{new Date(n.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
