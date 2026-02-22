import { motion, useInView } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import './Team.css';

/* ── Photo imports ── */
import presidentImg from '../assets/team/president.jpeg';
import opsManagerImg from '../assets/team/operations-manager.jpeg';
import panel1Img from '../assets/team/panel-1.jpg';
import panel2Img from '../assets/team/panel-2.jpeg';
import panel3Img from '../assets/team/panel-3.jpeg';
import panel4Img from '../assets/team/panel-4.jpg';
import panel5Img from '../assets/team/panel-5.jpg';
import eventLeadImg from '../assets/team/event-lead.jpg';
import eventCoLead1Img from '../assets/team/event-co-lead-1.jpeg';
import eventCoLead2Img from '../assets/team/event-co-lead-2.jpeg';
import techCoLeadImg from '../assets/team/tech-co-lead.png';
import mediaLead1Img from '../assets/team/media-lead.jpg';
import mediaLead2Img from '../assets/team/media-lead-2.jpg';
import mediaCoLead1Img from '../assets/team/media-co-lead.jpg';
import mediaCoLead2Img from '../assets/team/media-co-lead-2.jpg';
import prLeadImg from '../assets/team/pr-lead.png';
import prCoLeadImg from '../assets/team/pr-co-lead.jpg';
import designCoLeadImg from '../assets/team/design-co-lead.jpg';
import contentLeadImg from '../assets/team/content-lead.jpg';
import contentCoLeadImg from '../assets/team/content-co-lead.jpeg';
import designLeadImg from '../assets/team/design-lead.jpeg';
import techCoLead2Img from '../assets/team/tech-co-lead-2.jpeg';

/* ═══════ 3D TILT CARD ═══════ */
const TiltCard = ({ children, className = '', intensity = 8 }) => {
    const ref = useRef(null);
    const handleMouseMove = useCallback((e) => {
        const card = ref.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) scale3d(1.03, 1.03, 1.03)`;
    }, [intensity]);
    const handleMouseLeave = useCallback(() => {
        if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    }, []);
    return (
        <div ref={ref} className={className} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.25s ease-out', willChange: 'transform' }}>
            {children}
        </div>
    );
};

/* ═══════ SOCIAL ICONS ═══════ */
const SocialIcons = ({ linkedin, github, instagram }) => (
    <div className="ld-socials">
        {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="ld-social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
        )}
        {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="ld-social-link" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            </a>
        )}
        {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="ld-social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
        )}
    </div>
);

/* ═══════ SCROLL REVEAL WRAPPER ═══════ */
const RevealSection = ({ children, className = '', delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: 'easeOut' }}>
            {children}
        </motion.div>
    );
};

/* ═══════════════════════════════════════════════
   TEAM DATA — Update names / social links here
   ═══════════════════════════════════════════════ */

const president = {
    name: 'President',
    role: 'President',
    tagline: 'Leading the vision of Metaversity into the future of Web3 and immersive tech.',
    image: presidentImg,
    linkedin: '#', github: '#', instagram: '#',
};

const vicePresident = {
    name: 'Vice President',
    role: 'Vice President',
    tagline: 'Driving strategic direction and organizational excellence.',
    image: panel4Img,
    linkedin: '#', github: '#', instagram: '#',
};

const panelMembers = [
    { name: '24 Batch Coordinator', role: '24 Batch Coordinator', tagline: 'Guiding club strategy and decisions.', image: panel1Img, linkedin: '#', instagram: '#' },
    { name: 'General Secretary', role: 'General Secretary', tagline: 'Driving community engagement and growth.', image: panel2Img, linkedin: '#', instagram: '#' },
    { name: '24 Batch Co-Coordinator', role: '24 Batch Co-Coordinator', tagline: 'Bridging technology and creativity.', image: panel3Img, linkedin: '#', instagram: '#' },
    { name: 'Operations Manager', role: 'Operations Manager', tagline: 'Ensuring seamless execution of every initiative and event.', image: opsManagerImg, linkedin: '#', instagram: '#' },
    { name: '24 Batch Co-Coordinator', role: '24 Batch Co-Coordinator', tagline: 'Architecting events and experiences.', image: panel5Img, linkedin: '#', instagram: '#' },
];

const teams = [
    {
        title: 'Event Team', icon: '🎪', accent: 'gold',
        members: [
            { name: 'Event Lead', role: 'Lead', tagline: 'Orchestrating flagship events and hackathons.', image: eventLeadImg, isLead: true, linkedin: '#', instagram: '#' },
            { name: 'Event Co-Lead', role: 'Co-Lead', tagline: 'Coordinating logistics and operations.', image: eventCoLead1Img, linkedin: '#', instagram: '#' },
            { name: 'Event Co-Lead', role: 'Co-Lead', tagline: 'Managing event outreach and branding.', image: eventCoLead2Img, linkedin: '#', instagram: '#' },
        ],
    },
    {
        title: 'Technical Team', icon: '⚡', accent: 'red',
        members: [
            { name: 'Technical Lead', role: 'Lead', tagline: 'Building the tech backbone of Metaversity.', image: null, isLead: true, linkedin: '#', github: '#' },
            { name: 'Tech Co-Lead', role: 'Co-Lead', tagline: 'Developing platforms and digital solutions.', image: techCoLeadImg, linkedin: '#', github: '#' },
            { name: 'Tech Co-Lead', role: 'Co-Lead', tagline: 'Engineering robust technical workflows.', image: techCoLead2Img, linkedin: '#', github: '#' },
        ],
    },
    {
        title: 'Media Team', icon: '📸', accent: 'pink',
        members: [
            { name: 'Media Lead', role: 'Lead', tagline: 'Crafting the visual identity of the club.', image: mediaLead1Img, isLead: true, linkedin: '#', instagram: '#' },
            { name: 'Media Lead', role: 'Lead', tagline: 'Capturing moments and telling our story.', image: mediaLead2Img, isLead: true, linkedin: '#', instagram: '#' },
            { name: 'Media Co-Lead', role: 'Co-Lead', tagline: 'Creating engaging visual content.', image: mediaCoLead1Img, linkedin: '#', instagram: '#' },
            { name: 'Media Co-Lead', role: 'Co-Lead', tagline: 'Editing and producing media assets.', image: mediaCoLead2Img, linkedin: '#', instagram: '#' },
        ],
    },
    {
        title: 'PR Team', icon: '📢', accent: 'emerald',
        members: [
            { name: 'PR Lead', role: 'Lead', tagline: 'Amplifying our reach and public presence.', image: prLeadImg, isLead: true, linkedin: '#', instagram: '#' },
            { name: 'PR Co-Lead', role: 'Co-Lead', tagline: 'Building partnerships and collaborations.', image: prCoLeadImg, linkedin: '#', instagram: '#' },
        ],
    },
    {
        title: 'Design Team', icon: '🎨', accent: 'rainbow',
        members: [
            { name: 'Design Lead', role: 'Lead', tagline: 'Shaping the aesthetics of every deliverable.', image: designLeadImg, isLead: true, linkedin: '#', instagram: '#' },
            { name: 'Design Co-Lead', role: 'Co-Lead', tagline: 'Creating stunning graphics and UI designs.', image: designCoLeadImg, linkedin: '#', instagram: '#' },
        ],
    },
    {
        title: 'Content Team', icon: '✍️', accent: 'cyan',
        members: [
            { name: 'Content Lead', role: 'Lead', tagline: 'Telling the Metaversity story through words.', image: contentLeadImg, isLead: true, linkedin: '#', instagram: '#' },
            { name: 'Content Co-Lead', role: 'Co-Lead', tagline: 'Crafting copy and managing social posts.', image: contentCoLeadImg, linkedin: '#', instagram: '#' },
        ],
    },
];

/* ═══════ MEMBER CARD ═══════ */
const MemberCard = ({ member, accent = 'purple', index = 0, isLead = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-30px' });
    return (
        <motion.div ref={ref}
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.55, delay: index * 0.12, type: 'spring', stiffness: 90, damping: 16 }}>
            <TiltCard className={`ld-card ${isLead ? 'ld-card-lead' : ''} ld-accent-${accent}`} intensity={isLead ? 10 : 7}>
                <div className={`ld-photo-wrap ${isLead ? 'ld-photo-lead' : ''}`}>
                    <div className="ld-photo-ring" />
                    <div className="ld-photo-ring ld-photo-ring-2" />
                    <div className="ld-photo-glow" />
                    {member.image ? (
                        <img src={member.image} alt={member.name} className="ld-photo" loading="lazy" />
                    ) : (
                        <div className="ld-photo-placeholder">
                            <span>{member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                        </div>
                    )}
                </div>
                <h3 className="ld-name">{member.name}</h3>
                <span className="ld-role">{member.role}</span>
                <p className="ld-tagline">{member.tagline}</p>
                <SocialIcons linkedin={member.linkedin} github={member.github} instagram={member.instagram} />
                <div className="ld-card-shine" />
                <div className="ld-card-glow-border" />
            </TiltCard>
        </motion.div>
    );
};

/* ═══════ FEATURED CARD ═══════ */
const FeaturedCard = ({ member, size = 'large', index = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-30px' });
    return (
        <motion.div ref={ref} className={`ld-featured-wrap`}
            initial={{ opacity: 0, y: 60, scale: 0.85 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15, type: 'spring', stiffness: 70, damping: 18 }}>
            <TiltCard className={`ld-featured-card ld-featured-${size}`} intensity={6}>
                <div className={`ld-feat-photo-wrap ld-feat-${size}`}>
                    <div className="ld-feat-ring" />
                    <div className="ld-feat-ring ld-feat-ring-2" />
                    <div className="ld-feat-ring ld-feat-ring-3" />
                    <div className="ld-feat-glow" />
                    <img src={member.image} alt={member.name} className="ld-feat-photo" loading="lazy" />
                </div>
                <div className="ld-feat-info">
                    <h2 className="ld-feat-name">{member.name}</h2>
                    <span className="ld-feat-role">{member.role}</span>
                    <p className="ld-feat-tagline">{member.tagline}</p>
                    <SocialIcons linkedin={member.linkedin} github={member.github} instagram={member.instagram} />
                </div>
                <div className="ld-card-shine" />
                <div className="ld-card-glow-border" />
            </TiltCard>
        </motion.div>
    );
};

/* ═══════ TEAM SECTION ═══════ */
const TeamGroup = ({ title, icon, accent, members }) => (
    <RevealSection className="ld-team-group">
        <div className="ld-group-header">
            <div className={`ld-group-line ld-line-${accent}`} />
            <div className="ld-group-badge">
                <span className="ld-group-icon">{icon}</span>
                <h3 className="ld-group-title">{title}</h3>
            </div>
            <div className={`ld-group-line ld-line-${accent}`} />
        </div>
        <div className="ld-group-cards">
            {members.map((m, i) => (
                <MemberCard key={i} member={m} accent={accent} index={i} isLead={m.isLead} />
            ))}
        </div>
    </RevealSection>
);

/* ═══════ PAGE ═══════ */
const Team = () => (
    <div className="ld-page">
        <ParticleBackground />
        <div className="ld-noise" />

        {/* Floating ambient orbs */}
        <div className="ld-orb ld-orb-1" />
        <div className="ld-orb ld-orb-2" />
        <div className="ld-orb ld-orb-3" />

        {/* ═══ HEADER ═══ */}
        <section className="ld-hero">
            {/* Planet sphere — matches Home page */}
            <div className="ld-planet" />

            <motion.div className="ld-hero-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: 'easeOut' }}>
                <span className="ld-badge">Leadership</span>
                <h1 className="ld-title">
                    Meet the <span className="ld-grad-text">Metaversity Leadership</span>
                </h1>
                <p className="ld-subtitle">
                    The visionaries and builders steering Metaversity into the next dimension of technology
                </p>
            </motion.div>
        </section>

        {/* ═══ PRESIDENT ═══ */}
        <section className="ld-leadership-row">
            <FeaturedCard member={president} size="large" index={0} />
        </section>

        {/* ═══ VICE PRESIDENT ═══ */}
        <section className="ld-leadership-row">
            <FeaturedCard member={vicePresident} size="medium" index={1} />
        </section>

        {/* ═══ PANEL ═══ */}
        <RevealSection className="ld-panel-section">
            <div className="ld-group-header">
                <div className="ld-group-line ld-line-indigo" />
                <div className="ld-group-badge">
                    <span className="ld-group-icon">🎯</span>
                    <h3 className="ld-group-title">Panel Members</h3>
                </div>
                <div className="ld-group-line ld-line-indigo" />
            </div>
            <div className="ld-group-cards">
                {panelMembers.map((m, i) => (
                    <MemberCard key={i} member={m} accent="indigo" index={i} />
                ))}
            </div>
        </RevealSection>

        {/* ═══ DEPARTMENTS ═══ */}
        {teams.map((team, i) => (
            <TeamGroup key={i} {...team} />
        ))}

        {/* ═══ JOIN CTA ═══ */}
        <RevealSection>
            <section className="ld-cta">
                <div className="ld-cta-glow" />
                <h2>Ready to Join the <span className="ld-grad-text">Team</span>?</h2>
                <p>We're always looking for passionate builders to drive the future of Metaversity.</p>
                <Link to="/join-us" className="ld-cta-btn">
                    <span>Join Metaversity</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
            </section>
        </RevealSection>
    </div>
);

export default Team;
