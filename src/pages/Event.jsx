import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';
import './Event.css';

const Event = () => {
    const pastEvents = [
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
                    <p className="page-subtitle">Join us for exciting events and workshops</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ marginBottom: '3rem' }}
                >
                    <Countdown
                        targetDate="2026-02-21T00:00:00"
                        title="Something Unreal Is Coming."
                        subtitle="One day. One stage. A celebration you won't forget."
                    />
                </motion.div>

                <motion.div
                    className="past-events-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
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
                            transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
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
