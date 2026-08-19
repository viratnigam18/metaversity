import { motion } from 'framer-motion';
import './Event.css';

const Event = () => {
    const pastEvents = [
        {
            title: 'Jashn-e-Sangeet',
            date: '28 February 2026',
            time: '10:00 AM Onwards',
            venue: 'MPH',
            description: 'A vibrant event full of music, dance, and unforgettable memories! Featuring a DJ, Mr. & Miss Best Dressed, Dhol Nagada, and much more.',
            status: 'Completed'
        },
        {
            title: 'Codeverse',
            date: '31 May 2025',
            time: 'Full Day Event',
            venue: 'VIT Bhopal',
            description: 'A coding and tech event bringing together developers, designers, and tech enthusiasts for an immersive experience.',
            status: 'Completed'
        },
        {
            title: 'AR Chase',
            date: 'February 2025',
            time: 'Full Day Event',
            venue: 'VIT Bhopal',
            description: 'AR Chase is an immersive, campus-wide Augmented Reality treasure hunt conducted by the Metaversity Club. Participants journey through five uniquely themed levels, scanning QR codes to unlock interactive AR environments filled with puzzles, hidden artifacts, and mind-bending challenges.',
            status: 'Completed'
        }
    ];

    const sangeetHighlights = [
        { emoji: '🎶', text: 'Electrifying DJ' },
        { emoji: '👑', text: 'Mr. & Miss Best Dressed' },
        { emoji: '🥁', text: 'Dhol Nagada' },
        { emoji: '💃', text: 'Dance Floor Madness' },
        { emoji: '🍹', text: 'Mocktails & Food Stalls' },
        { emoji: '📸', text: 'Photobooth' },
        { emoji: '🎵', text: 'Jugalbandi' },
        { emoji: '💪🏻', text: 'Plank & Push-ups' },
        { emoji: '🍋', text: 'Lemon Spoon Race' },
        { emoji: '👠', text: 'Juta Churai' },
    ];

    return (
        <div className="page event-page">
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="page-title">Events</h1>
                    <p className="page-subtitle">Join us for exciting events and experiences</p>
                </motion.div>

                {/* Upcoming Event Coming Soon */}
                <motion.div
                    className="sangeet-featured-card glass"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="sangeet-card-shimmer"></div>

                    <div className="sangeet-badge-row">
                        <div className="event-status-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ccc' }}>
                            ⏳ Loading...
                        </div>
                        <div className="sangeet-presents">
                            ✨ METAVERSE CLUB PRESENTS ✨
                        </div>
                    </div>

                    <h2 className="sangeet-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1rem', padding: '2rem 0' }}>New Event Coming Soon</h2>

                    <p className="sangeet-tagline" style={{ color: 'rgba(255, 255, 255, 0.7)', fontStyle: 'italic', marginBottom: '2rem' }}>
                        Our team is brewing something spectacular.<br />
                        <strong>Stay tuned for the big reveal!</strong>
                    </p>
                </motion.div>

                {/* Past Events */}
                <motion.div
                    className="past-events-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h2 className="section-heading">Past Events</h2>
                </motion.div>

                <div className="events-grid">
                    {pastEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            className="event-card glass past-event-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                        >
                            <div className="event-status-badge" data-status="completed">
                                {event.status}
                            </div>

                            <h2 className="event-title">{event.title}</h2>
                            <p className="event-description">{event.description}</p>

                            <div className="event-details">
                                <div className="event-detail">
                                    <span className="detail-icon">📅</span>
                                    <span>{event.date}</span>
                                </div>
                                <div className="event-detail">
                                    <span className="detail-icon">⏰</span>
                                    <span>{event.time}</span>
                                </div>
                                <div className="event-detail">
                                    <span className="detail-icon">📍</span>
                                    <span>{event.venue}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Event;
