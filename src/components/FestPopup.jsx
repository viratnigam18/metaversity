import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './FestPopup.css';

const FestPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        setIsVisible(false);
        navigate('/event');
    };

    const handleClose = (e) => {
        e.stopPropagation();
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="sangeet-popup"
                    initial={{ x: 100, opacity: 0, scale: 0.8 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: 100, opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 250 }}
                    onClick={handleClick}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <button className="sangeet-popup-close" onClick={handleClose} aria-label="Close">
                        ✕
                    </button>

                    <div className="sangeet-popup-shimmer"></div>

                    <div className="sangeet-popup-content">
                        <div className="sangeet-popup-badge">
                            <span className="badge-sparkle">✨</span> METAVERSE CLUB PRESENTS
                        </div>

                        <h3 className="sangeet-popup-title">
                            Jashn-e-Sangeet
                        </h3>

                        <div className="sangeet-popup-details">
                            <div className="sangeet-popup-detail">
                                <span>📅</span> 28 Feb 2026
                            </div>
                            <div className="sangeet-popup-detail">
                                <span>📍</span> MPH, 10 AM
                            </div>
                        </div>

                        <div className="sangeet-popup-cta">
                            <span className="cta-text">View Details →</span>
                            <div className="cta-pulse"></div>
                        </div>
                    </div>

                    <div className="sangeet-popup-emojis">
                        <span className="floating-emoji emoji-1">💃</span>
                        <span className="floating-emoji emoji-2">🎶</span>
                        <span className="floating-emoji emoji-3">🥁</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FestPopup;
