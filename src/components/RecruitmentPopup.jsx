import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './RecruitmentPopup.css';

const RecruitmentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup immediately
        setIsVisible(true);
    }, []);

    const handleClose = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="recruit-popup-overlay">
                    <motion.div
                        className="recruit-popup"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        {/* Decorative background elements to blend with Metaversity theme */}
                        <div className="recruit-popup-glow"></div>
                        <div className="recruit-popup-orb orb-1"></div>
                        <div className="recruit-popup-orb orb-2"></div>
                        
                        <button className="recruit-popup-close" onClick={handleClose} aria-label="Close">
                            ✕
                        </button>

                        <div className="recruit-popup-content">
                            <motion.div 
                                className="recruit-popup-badge"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="badge-sparkle">🚀</span> JOIN METAVERSITY
                            </motion.div>

                            <h2 className="recruit-popup-title">
                                We Are <span className="text-gradient">Recruiting!</span>
                            </h2>
                            
                            <p className="recruit-popup-desc">
                                Ready to build the future of Web3, AR/VR, and immersive tech? Step into the next dimension and become a part of the Metaversity core team.
                            </p>

                            <a 
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfkiBOv_pFtbjvF2Krr3fYOhWIUTe47P3XcuETiDAzVE9I_pg/viewform?usp=sharing&ouid=102259409612260197255" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="recruit-popup-btn"
                                onClick={() => setIsVisible(false)}
                            >
                                <span>Apply Now</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                <div className="btn-shine"></div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RecruitmentPopup;
