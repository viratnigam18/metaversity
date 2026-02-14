import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FestPopup.css';

const FestPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Show popup after a short delay when page loads
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date('2026-02-21T00:00:00') - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="popup-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    />
                    <motion.div
                        className="popup-container-new"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        <button className="popup-close" onClick={handleClose} aria-label="Close popup">
                            ✕
                        </button>

                        <div className="popup-content-new">
                            <div className="popup-brand">
                                <span className="brand-text">Metaversity - </span>
                                <span className="brand-highlight">Metaverse Club</span>
                            </div>

                            <h1 className="popup-main-title">
                                Something<br />
                                Unreal<br />
                                Is Coming.
                            </h1>

                            <p className="popup-tagline">
                                One day. One stage. <span className="tagline-highlight">A celebration<br />you won't forget.</span>
                            </p>

                            <div className="popup-countdown">
                                <div className="countdown-item">
                                    <div className="countdown-number">{timeLeft.days}</div>
                                    <div className="countdown-text">DAYS</div>
                                </div>
                                <div className="countdown-item">
                                    <div className="countdown-number">{timeLeft.hours}</div>
                                    <div className="countdown-text">HOURS</div>
                                </div>
                                <div className="countdown-item">
                                    <div className="countdown-number">{timeLeft.minutes}</div>
                                    <div className="countdown-text">MINUTES</div>
                                </div>
                                <div className="countdown-item">
                                    <div className="countdown-number">{timeLeft.seconds}</div>
                                    <div className="countdown-text">SECONDS</div>
                                </div>
                            </div>

                            <button className="popup-btn-primary">
                                Be the First to Enter →
                            </button>

                            <button
                                className="popup-btn-secondary"
                                onClick={() => setShowDetails(!showDetails)}
                            >
                                Unlock the Experience ∨
                            </button>

                            {showDetails && (
                                <motion.div
                                    className="popup-extra-details"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <p>Date: 21 February 2026</p>
                                    <p>More details coming soon!</p>
                                </motion.div>
                            )}

                            <div className="popup-scroll-indicator">
                                ∨
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default FestPopup;
