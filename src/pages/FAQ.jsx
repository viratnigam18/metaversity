import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'What is Metaversity?',
            answer: 'Metaversity is the Metaverse Club at VIT Bhopal, dedicated to exploring virtual reality, augmented reality, blockchain, and emerging technologies that shape the future of digital experiences.'
        },
        {
            question: 'Who can join Metaversity?',
            answer: 'Any student at VIT Bhopal with an interest in metaverse technologies, VR/AR, Web3, or blockchain is welcome to join. No prior experience is required!'
        },
        {
            question: 'What kind of events do you organize?',
            answer: 'We organize workshops, hackathons, tech talks, hands-on project sessions, and exciting celebrations. We also participate in college fests and organize competitions.'
        },
        {
            question: 'Do I need technical skills to join?',
            answer: 'Not at all! We welcome members from all backgrounds. Whether you\'re a developer, designer, content creator, or just curious about the metaverse, there\'s a place for you in our community.'
        },
        {
            question: 'How can I stay updated about events?',
            answer: 'Follow us on Instagram @metaverseclub_vitb and join our community channels. We regularly post updates about upcoming events, workshops, and opportunities.'
        },
        {
            question: 'Is there a membership fee?',
            answer: 'Most of our events and workshops are free for members. Some special events may have a nominal fee to cover costs, but we keep everything as accessible as possible.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="page faq-page">
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="page-title">FAQ</h1>
                    <p className="page-subtitle">Frequently Asked Questions</p>
                </motion.div>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="faq-item glass"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                                    ▼
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="faq-footer glass"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <h2 className="section-title">Still have questions?</h2>
                    <p className="section-text">
                        Feel free to reach out to us on Instagram or contact any of our team members!
                    </p>
                    <a
                        href="https://www.instagram.com/metaverseclub_vitb?igsh=c3AxcHJybmt5ams3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQ;
