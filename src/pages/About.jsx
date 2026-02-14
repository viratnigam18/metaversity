import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <div className="page about-page">
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="page-title">About Metaversity</h1>
                    <p className="page-subtitle">Pioneering the future of digital experiences</p>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="about-section glass">
                        <h2 className="section-title">Our Mission</h2>
                        <p className="section-text">
                            Metaversity is dedicated to exploring and building the future of immersive digital experiences.
                            We bring together students passionate about virtual reality, augmented reality, blockchain technology,
                            and the metaverse to learn, create, and innovate together.
                        </p>
                    </div>

                    <div className="about-section glass">
                        <h2 className="section-title">What We Do</h2>
                        <div className="activities-grid">
                            <div className="activity-item">
                                <div className="activity-icon">🎓</div>
                                <h3>Workshops & Learning</h3>
                                <p>Regular sessions on VR/AR development, Web3, and emerging technologies</p>
                            </div>
                            <div className="activity-item">
                                <div className="activity-icon">🛠️</div>
                                <h3>Project Building</h3>
                                <p>Hands-on experience creating metaverse applications and blockchain projects</p>
                            </div>
                            <div className="activity-item">
                                <div className="activity-icon">🎪</div>
                                <h3>Events & Competitions</h3>
                                <p>Hackathons, tech fests, and collaborative challenges</p>
                            </div>
                            <div className="activity-item">
                                <div className="activity-icon">🌟</div>
                                <h3>Community Growth</h3>
                                <p>Building a network of innovators and tech enthusiasts</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-section glass">
                        <h2 className="section-title">Our Vision</h2>
                        <p className="section-text">
                            To be the leading student community at VIT Bhopal for metaverse and Web3 innovation,
                            empowering students to shape the future of digital interaction and create groundbreaking
                            experiences that blur the lines between physical and virtual realities.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
