import { motion } from 'framer-motion';
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

                {/* Jashn-e-Sangeet Featured Event */}
                <motion.div
                    className="sangeet-featured-card glass"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="sangeet-card-shimmer"></div>

                    <div className="sangeet-badge-row">
                        <div className="event-status-badge" data-status="upcoming">
                            🔥 Upcoming
                        </div>
                        <div className="sangeet-presents">
                            ✨ METAVERSE CLUB PRESENTS ✨
                        </div>
                    </div>

                    <h2 className="sangeet-title">Jashn-e-Sangeet</h2>

                    <p className="sangeet-tagline">
                        Pehenne ko sundar kapde hai… par jaane ko event nahi?<br />
                        <strong>NO worries, we got you covered!</strong>
                    </p>

                    <div className="sangeet-info-grid">
                        <div className="sangeet-info-item">
                            <span className="info-icon">📅</span>
                            <div>
                                <div className="info-label">Date</div>
                                <div className="info-value">28 February 2026</div>
                            </div>
                        </div>
                        <div className="sangeet-info-item">
                            <span className="info-icon">⏰</span>
                            <div>
                                <div className="info-label">Time</div>
                                <div className="info-value">10:00 AM Onwards</div>
                            </div>
                        </div>
                        <div className="sangeet-info-item">
                            <span className="info-icon">📍</span>
                            <div>
                                <div className="info-label">Venue</div>
                                <div className="info-value">MPH</div>
                            </div>
                        </div>
                        <div className="sangeet-info-item">
                            <span className="info-icon">💰</span>
                            <div>
                                <div className="info-label">Entry Fee</div>
                                <div className="info-value">₹200 (Single) | ₹350 (Duo)</div>
                            </div>
                        </div>
                    </div>

                    <div className="sangeet-highlights-section">
                        <h3 className="highlights-title">🌟 What's Waiting For You?</h3>
                        <div className="sangeet-highlights-grid">
                            {sangeetHighlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="highlight-chip"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                                >
                                    <span className="chip-emoji">{item.emoji}</span>
                                    <span className="chip-text">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="sangeet-vibe-section">
                        <p className="vibe-text">
                            ✨ <em>Shaadi wali vibe… bina kisi judgement ke!</em> ✨<br />
                            Just music, dance, glam & unforgettable memories!
                        </p>
                    </div>

                    <div className="sangeet-contact">
                        <h4>📞 For Queries / Registration:</h4>
                        <div className="contact-row">
                            <span>Samiul – 75238 01979</span>
                            <span>Trisha – 70113 49889</span>
                        </div>
                    </div>

                    <div className="sangeet-cta-section">
                        <a
                            href="https://forms.gle/CFE7t7nC3EmezMv98"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary sangeet-register-btn"
                        >
                            🔥 Register Now — Limited Slots!
                        </a>
                        <p className="sangeet-footer-joke">
                            (Nahi to phuphaji naraaz ho jaaenge 😞)
                        </p>
                    </div>

                    <div className="free-mehendi-banner">
                        <span>🎨</span> Free Mehendi Corner Available!
                    </div>
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
