import { motion } from 'framer-motion';
import './JoinUs.css';

const JoinUs = () => {
    return (
        <div className="page joinus-page">
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="page-title">Join Metaversity</h1>
                    <p className="page-subtitle">Become part of the future</p>
                </motion.div>

                <motion.div
                    className="joinus-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="joinus-hero glass">
                        <h2 className="section-title">Why Join Us?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">🚀</div>
                                <h3>Learn & Grow</h3>
                                <p>Access workshops, tutorials, and hands-on projects in cutting-edge technologies</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🤝</div>
                                <h3>Network</h3>
                                <p>Connect with industry professionals, alumni, and fellow tech enthusiasts</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">💡</div>
                                <h3>Build Projects</h3>
                                <p>Work on real-world metaverse and Web3 projects for your portfolio</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🎯</div>
                                <h3>Lead Initiatives</h3>
                                <p>Take ownership of events, workshops, and club activities</p>
                            </div>
                        </div>
                    </div>

                    <div className="joinus-cta glass">
                        <h2 className="section-title">Ready to Join?</h2>
                        <p className="section-text">
                            Follow us on Instagram and stay tuned for membership drives and recruitment announcements.
                            We welcome students from all years and all branches!
                        </p>

                        <div className="cta-buttons">
                            <a
                                href="https://www.instagram.com/metaverseclub_vitb?igsh=c3AxcHJybmt5ams3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Follow Us on Instagram
                            </a>
                        </div>

                        <div className="contact-info">
                            <p className="contact-text">
                                For immediate queries, reach out to us on Instagram DM or contact any of our team members.
                            </p>
                        </div>
                    </div>

                    <div className="expectations glass">
                        <h2 className="section-title">What We Look For</h2>
                        <ul className="expectations-list">
                            <li>
                                <span className="list-icon">✨</span>
                                <span>Passion for technology and innovation</span>
                            </li>
                            <li>
                                <span className="list-icon">🎨</span>
                                <span>Creativity and willingness to experiment</span>
                            </li>
                            <li>
                                <span className="list-icon">🤲</span>
                                <span>Collaborative mindset and team spirit</span>
                            </li>
                            <li>
                                <span className="list-icon">📚</span>
                                <span>Eagerness to learn and share knowledge</span>
                            </li>
                            <li>
                                <span className="list-icon">⚡</span>
                                <span>Active participation in club activities</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default JoinUs;
