import { motion } from 'framer-motion';
import './Team.css';

const Team = () => {
    const teamMembers = [
        {
            name: 'Team Member 1',
            role: 'President',
            image: '👤'
        },
        {
            name: 'Team Member 2',
            role: 'Vice President',
            image: '👤'
        },
        {
            name: 'Team Member 3',
            role: 'Technical Lead',
            image: '👤'
        },
        {
            name: 'Team Member 4',
            role: 'Event Coordinator',
            image: '👤'
        },
        {
            name: 'Team Member 5',
            role: 'Design Lead',
            image: '👤'
        },
        {
            name: 'Team Member 6',
            role: 'Marketing Head',
            image: '👤'
        }
    ];

    return (
        <div className="page team-page">
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="page-title">Our Team</h1>
                    <p className="page-subtitle">Meet the minds behind Metaversity</p>
                </motion.div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-card glass"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="member-avatar">{member.image}</div>
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="join-team-section glass"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <h2 className="section-title">Want to Join Our Team?</h2>
                    <p className="section-text">
                        We're always looking for passionate individuals to join our core team.
                        If you're interested in leading initiatives and shaping the future of Metaversity, reach out to us!
                    </p>
                    <button className="btn btn-primary">Contact Us</button>
                </motion.div>
            </div>
        </div>
    );
};

export default Team;
