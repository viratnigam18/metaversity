import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const photos = [
        {
            src: '/gallery/photo1.jpg',
            title: 'Team Metaversity',
            category: 'Team'
        },
        {
            src: '/gallery/photo2.jpg',
            title: 'Event Moments',
            category: 'Event'
        }
    ];

    const openLightbox = (photo) => setSelectedImage(photo);
    const closeLightbox = () => setSelectedImage(null);

    return (
        <div className="page gallery-page">
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="page-title">Gallery</h1>
                    <p className="page-subtitle">Moments captured from our events and team</p>
                </motion.div>

                <div className="gallery-grid">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            onClick={() => openLightbox(photo)}
                        >
                            <div className="gallery-image-wrapper">
                                <img src={photo.src} alt={photo.title} className="gallery-image" />
                                <div className="gallery-overlay">
                                    <span className="gallery-category">{photo.category}</span>
                                    <h3 className="gallery-caption">{photo.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            className="lightbox"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeLightbox}
                        >
                            <motion.div
                                className="lightbox-content"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="lightbox-close" onClick={closeLightbox}>✕</button>
                                <img src={selectedImage.src} alt={selectedImage.title} className="lightbox-image" />
                                <div className="lightbox-info">
                                    <span className="lightbox-category">{selectedImage.category}</span>
                                    <h3>{selectedImage.title}</h3>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Gallery;
