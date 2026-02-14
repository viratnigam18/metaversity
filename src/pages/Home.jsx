import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/logo.png';

const Home = () => {
    return (
        <div className="page home-page">
            <div className="home-background"></div>

            <div className="container home-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.img
                        src={logo}
                        alt="Metaversity Logo"
                        className="hero-logo"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        METAVERSITY
                    </motion.h1>

                    <motion.div
                        className="hero-taglines"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <p className="tagline-main">Where Reality Meets the Next Dimension</p>
                        <p className="tagline-sub">If You're Comfortable in Reality, This Isn't for You</p>
                    </motion.div>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Welcome to the Metaverse Club at VIT Bhopal. We explore the intersection of virtual reality,
                        augmented reality, blockchain, and emerging technologies that are shaping the future of digital experiences.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <Link to="/join-us" className="btn btn-primary">Join Our Community</Link>
                        <Link to="/event" className="btn btn-outline">Explore Events</Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="features-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <div className="feature-card glass">
                        <div className="feature-icon">🌐</div>
                        <h3>Virtual Worlds</h3>
                        <p>Explore immersive virtual environments and metaverse platforms</p>
                    </div>

                    <div className="feature-card glass">
                        <div className="feature-icon">🎮</div>
                        <h3>Web3 Gaming</h3>
                        <p>Dive into blockchain-based gaming and NFT ecosystems</p>
                    </div>

                    <div className="feature-card glass">
                        <div className="feature-icon">🚀</div>
                        <h3>Innovation</h3>
                        <p>Build cutting-edge projects with AR/VR and emerging tech</p>
                    </div>

                    <div className="feature-card glass">
                        <div className="feature-icon">🤝</div>
                        <h3>Community</h3>
                        <p>Connect with like-minded enthusiasts and industry experts</p>
                    </div>
                </motion.div>

                <motion.div
                    className="sponsors-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <h2 className="sponsors-title">Our Sponsors</h2>
                    <div className="sponsors-grid">
                        <div className="sponsor-card glass">
                            <img
                                className="sponsor-logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/8/85/Microsoft.png"
                                alt="Microsoft"
                            />
                            <span className="sponsor-name">Microsoft</span>
                        </div>
                        <div className="sponsor-card glass">
                            <img
                                className="sponsor-logo nescafe-logo"
                                src="https://logos-world.net/wp-content/uploads/2020/09/Nescafe-Logo.png"
                                alt="Nescafé"
                            />
                            <span className="sponsor-name">Nescafé</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
