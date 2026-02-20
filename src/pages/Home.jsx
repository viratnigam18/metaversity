import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState, useCallback } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import './Home.css';
import logo from '../assets/logo.png';
import nescafeLogo from '../assets/nescafe-logo.png';
import oscodeLogo from '../assets/oscode-logo.png';

/* ── Magnetic button with gradient shine ── */
const MagneticButton = ({ children, className = '', to }) => {
    const ref = useRef(null);

    const handleMouseMove = useCallback((e) => {
        const btn = ref.current;
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px) scale(1.03)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (ref.current) {
            ref.current.style.transform = 'translate(0, 0) scale(1)';
        }
    }, []);

    return (
        <Link
            to={to}
            ref={ref}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)', willChange: 'transform' }}
        >
            {children}
            <div className="ft-btn-shine" />
        </Link>
    );
};

/* ── Animated counter hook ── */
const useCounter = (end, duration = 2200, inView = false) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [end, duration, inView]);
    return count;
};

/* ── Tilt card component ── */
const TiltCard = ({ children, className = '' }) => {
    const ref = useRef(null);

    const handleMouseMove = useCallback((e) => {
        const card = ref.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (ref.current) {
            ref.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.15s ease-out', willChange: 'transform' }}
        >
            {children}
        </div>
    );
};

/* ── Fade section wrapper ── */
const FadeSection = ({ children, className = '', delay = 0 }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
        {children}
    </motion.div>
);

/* ── Stat Card ── */
const StatCard = ({ value, suffix = '', label, inView }) => {
    const count = useCounter(value, 2200, inView);
    return (
        <div className="ft-stat-card">
            <span className="ft-stat-number">{count}{suffix}</span>
            <span className="ft-stat-label">{label}</span>
        </div>
    );
};

/* ── Data ── */
const features = [
    { icon: '🌐', title: 'Virtual Worlds', desc: 'Explore immersive virtual environments and cutting-edge metaverse platforms built for the future.', accent: 'purple' },
    { icon: '⛓️', title: 'Blockchain & Web3', desc: 'Dive into decentralized ecosystems, smart contracts, and the infrastructure powering tomorrow.', accent: 'blue' },
    { icon: '🚀', title: 'Innovation Lab', desc: 'Build real-world projects with AR/VR, AI, and emerging tech alongside industry mentors.', accent: 'gold' },
    { icon: '🤝', title: 'Elite Network', desc: 'Connect with top builders, founders, and visionaries shaping the digital frontier.', accent: 'indigo' },
];

const steps = [
    { num: '01', title: 'Explore', desc: 'Discover our events, workshops, and hackathons. Find what excites you in the metaverse ecosystem.' },
    { num: '02', title: 'Build', desc: 'Join project teams, attend bootcamps, and start creating with cutting-edge technologies alongside peers.' },
    { num: '03', title: 'Launch', desc: 'Showcase your work, win competitions, connect with industry and launch your ideas into the real world.' },
];

/* ── Dashboard data ── */
const dashboardData = [
    { label: 'Members', value: '70', change: 'Active', up: true },
    { label: 'Codeverse Teams', value: '183', change: 'Registered', up: true },
    { label: 'Events Hosted', value: '2', change: 'Growing', up: true },
    { label: 'Internship Prize', value: '25K', change: 'OSCode', up: true },
];
const activityFeed = [
    { time: 'Codeverse', text: '183 teams registered for Codeverse hackathon', dot: 'purple' },
    { time: 'Round 2', text: '100 teams qualified to the second round', dot: 'blue' },
    { time: 'Round 3', text: '50 teams competed in the final round', dot: 'gold' },
    { time: 'Winner', text: 'Winner awarded ₹25K internship at OSCode', dot: 'indigo' },
];

const Home = () => {
    const heroRef = useRef(null);
    const [statsInView, setStatsInView] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Track mouse for sphere + card parallax
    useEffect(() => {
        const handleMouse = (e) => {
            const cx = (e.clientX / window.innerWidth - 0.5) * 2;  // -1 to 1
            const cy = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePos({ x: cx, y: cy });
        };
        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, []);

    const sphereX = mousePos.x * 20;
    const sphereY = mousePos.y * 15;

    const float1X = mousePos.x * -12;
    const float1Y = mousePos.y * -10;
    const float2X = mousePos.x * 15;
    const float2Y = mousePos.y * 12;
    const float3X = mousePos.x * -10;
    const float3Y = mousePos.y * 14;

    return (
        <div className="ft-page">
            <ParticleBackground />
            {/* Noise / grain overlay */}
            <div className="ft-noise-overlay" />

            {/* ═══ HERO ═══ */}
            <section className="ft-hero" ref={heroRef}>
                {/* Layered depth lighting */}
                <div className="ft-hero-depth-layer" />

                {/* Large 3D glowing sphere — follows mouse */}
                <motion.div
                    className="ft-hero-sphere"
                    animate={{
                        x: sphereX,
                        y: sphereY,
                        scale: [1, 1.03, 1],
                    }}
                    transition={{
                        x: { type: 'spring', stiffness: 40, damping: 30 },
                        y: { type: 'spring', stiffness: 40, damping: 30 },
                        scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                    }}
                />

                {/* Floating glass UI cards — parallax react to mouse */}
                <motion.div
                    className="ft-float-card ft-float-1"
                    animate={{ x: float1X, y: float1Y, rotate: [0, 1, 0] }}
                    transition={{
                        x: { type: 'spring', stiffness: 60, damping: 25 },
                        y: { type: 'spring', stiffness: 60, damping: 25 },
                        rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                    }}
                >
                    <span className="ft-float-icon">🔗</span>
                    <span className="ft-float-label">Web3 Ready</span>
                </motion.div>

                <motion.div
                    className="ft-float-card ft-float-2"
                    animate={{ x: float2X, y: float2Y, rotate: [0, -1.2, 0] }}
                    transition={{
                        x: { type: 'spring', stiffness: 50, damping: 25 },
                        y: { type: 'spring', stiffness: 50, damping: 25 },
                        rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
                    }}
                >
                    <span className="ft-float-icon">🎶</span>
                    <span className="ft-float-label">Jashn-e-Sangeet</span>
                </motion.div>

                <motion.div
                    className="ft-float-card ft-float-3"
                    animate={{ x: float3X, y: float3Y, rotate: [0, 0.8, 0] }}
                    transition={{
                        x: { type: 'spring', stiffness: 55, damping: 25 },
                        y: { type: 'spring', stiffness: 55, damping: 25 },
                        rotate: { duration: 7.5, repeat: Infinity, ease: 'easeInOut' },
                    }}
                >
                    <span className="ft-float-icon">🌌</span>
                    <span className="ft-float-label">70+ Members</span>
                </motion.div>

                <motion.div
                    className="ft-hero-inner"
                    style={{ y: heroY, opacity: heroOpacity }}
                    animate={{ x: mousePos.x * -4, y: mousePos.y * -3 }}
                    transition={{ x: { type: 'spring', stiffness: 80, damping: 35 }, y: { type: 'spring', stiffness: 80, damping: 35 } }}
                >
                    <motion.div
                        className="ft-hero-logo-wrap"
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] }}
                    >
                        <div className="ft-hero-logo-ring" />
                        <div className="ft-hero-logo-ring ft-ring-2" />
                        <div className="ft-hero-logo-ring ft-ring-3" />
                        <div className="ft-hero-logo-glow" />
                        <img src={logo} alt="Metaversity" className="ft-hero-logo" />
                    </motion.div>

                    <motion.div
                        className="ft-hero-text"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                    >
                        <h1 className="ft-hero-title">
                            <span className="ft-gradient-text">META</span>
                            <span className="ft-gradient-text-alt">VERSITY</span>
                        </h1>
                        <p className="ft-hero-tagline">Where Reality Meets the Next Dimension</p>
                        <p className="ft-hero-sub">
                            The Metaverse Club at VIT Bhopal — exploring virtual reality, blockchain, and the technologies shaping tomorrow's digital experiences.
                        </p>
                    </motion.div>

                    <motion.div
                        className="ft-hero-cta"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {/* Cinematic bottom radial light */}
                        <div className="ft-cta-radial-light" />
                        <MagneticButton to="/join-us" className="ft-btn-primary">
                            <span>Join the Community</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </MagneticButton>
                        <Link to="/event" className="ft-btn-ghost">Explore Events</Link>
                    </motion.div>
                </motion.div>

                <div className="ft-hero-gradient-orb ft-orb-1" />
                <div className="ft-hero-gradient-orb ft-orb-2" />
                <div className="ft-hero-gradient-orb ft-orb-3" />
            </section>

            {/* ═══ STATS ═══ */}
            <motion.section
                className="ft-stats"
                onViewportEnter={() => setStatsInView(true)}
                viewport={{ once: true }}
            >
                <div className="ft-stats-inner">
                    <StatCard value={70} suffix="+" label="Active Members" inView={statsInView} />
                    <div className="ft-stats-divider" />
                    <StatCard value={2} suffix="" label="Events Hosted" inView={statsInView} />
                    <div className="ft-stats-divider" />
                    <StatCard value={183} suffix="" label="Teams Registered" inView={statsInView} />
                    <div className="ft-stats-divider" />
                    <StatCard value={25} suffix="K" label="Internship Prize" inView={statsInView} />
                </div>
            </motion.section>

            {/* ═══ FEATURES ═══ */}
            <section className="ft-features">
                <FadeSection className="ft-section-header">
                    <span className="ft-section-badge">What We Do</span>
                    <h2 className="ft-section-title">Built for the <span className="ft-gradient-text">Builders</span></h2>
                    <p className="ft-section-desc">From virtual worlds to decentralized ecosystems — we cover the full spectrum of emerging tech.</p>
                </FadeSection>

                <div className="ft-features-grid">
                    {features.map((f, i) => (
                        <FadeSection key={i} delay={i * 0.1}>
                            <TiltCard className={`ft-feature-card ft-feature-${f.accent}`}>
                                <div className="ft-feature-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                                <div className="ft-feature-shine" />
                            </TiltCard>
                        </FadeSection>
                    ))}
                </div>
            </section>

            {/* ═══ HOW IT WORKS ═══ */}
            <section className="ft-how">
                <FadeSection className="ft-section-header">
                    <span className="ft-section-badge">How It Works</span>
                    <h2 className="ft-section-title">Your Path to the <span className="ft-gradient-text-alt">Metaverse</span></h2>
                </FadeSection>

                <div className="ft-timeline">
                    <div className="ft-timeline-line" />
                    {steps.map((s, i) => (
                        <FadeSection key={i} className="ft-timeline-item" delay={i * 0.15}>
                            <div className="ft-timeline-dot"><span>{s.num}</span></div>
                            <div className="ft-timeline-content">
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        </FadeSection>
                    ))}
                </div>
            </section>

            {/* ═══ DASHBOARD PREVIEW ═══ */}
            <section className="ft-dashboard">
                <FadeSection className="ft-section-header">
                    <span className="ft-section-badge">Live Pulse</span>
                    <h2 className="ft-section-title">Club <span className="ft-gradient-text">Dashboard</span></h2>
                    <p className="ft-section-desc">A glimpse into the heartbeat of our community — real-time metrics and activity.</p>
                </FadeSection>

                <FadeSection delay={0.15}>
                    <TiltCard className="ft-dash-container">
                        {/* Top bar */}
                        <div className="ft-dash-topbar">
                            <div className="ft-dash-dots">
                                <span className="ft-dot ft-dot-red" />
                                <span className="ft-dot ft-dot-yellow" />
                                <span className="ft-dot ft-dot-green" />
                            </div>
                            <span className="ft-dash-url">metaversity.dashboard</span>
                            <div style={{ width: 48 }} />
                        </div>

                        {/* Metric tiles */}
                        <div className="ft-dash-metrics">
                            {dashboardData.map((d, i) => (
                                <div key={i} className="ft-dash-metric">
                                    <span className="ft-dash-metric-label">{d.label}</span>
                                    <span className="ft-dash-metric-value">{d.value}</span>
                                    <span className={`ft-dash-metric-change ${d.up ? 'up' : 'down'}`}>{d.change}</span>
                                </div>
                            ))}
                        </div>

                        {/* Activity feed + chart placeholder */}
                        <div className="ft-dash-body">
                            <div className="ft-dash-chart">
                                <span className="ft-dash-chart-label">Member Growth</span>
                                <div className="ft-dash-bars">
                                    {[35, 45, 38, 55, 48, 62, 58, 72, 68, 80, 75, 90].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="ft-dash-bar"
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
                                        />
                                    ))}
                                </div>
                                <div className="ft-dash-bar-labels">
                                    {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((m, i) => (
                                        <span key={i}>{m}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="ft-dash-feed">
                                <span className="ft-dash-feed-title">Recent Activity</span>
                                {activityFeed.map((a, i) => (
                                    <div key={i} className="ft-dash-feed-item">
                                        <span className={`ft-dash-feed-dot ft-dot-${a.dot}`} />
                                        <div>
                                            <p className="ft-dash-feed-text">{a.text}</p>
                                            <span className="ft-dash-feed-time">{a.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TiltCard>
                </FadeSection>
            </section>

            {/* ═══ PAST COLLABORATORS ═══ */}
            <section className="ft-sponsors">
                <FadeSection className="ft-section-header">
                    <span className="ft-section-badge">Collaborations</span>
                    <h2 className="ft-section-title">Past <span className="ft-gradient-text">Partners</span></h2>
                </FadeSection>

                <div className="ft-sponsors-grid">
                    <FadeSection delay={0.1}>
                        <motion.div className="ft-sponsor-card" whileHover={{ y: -6, scale: 1.03 }}>
                            <img src={nescafeLogo} alt="Nescafé" className="ft-sponsor-logo ft-nescafe" />
                            <span className="ft-sponsor-name">Nescafé</span>
                            <span className="ft-sponsor-event">AR Chase Sponsor</span>
                        </motion.div>
                    </FadeSection>
                    <FadeSection delay={0.2}>
                        <motion.div className="ft-sponsor-card" whileHover={{ y: -6, scale: 1.03 }}>
                            <img src={oscodeLogo} alt="OSCode" className="ft-sponsor-logo" />
                            <span className="ft-sponsor-name">OSCode</span>
                            <span className="ft-sponsor-event">Codeverse Partner</span>
                        </motion.div>
                    </FadeSection>
                </div>
            </section>

            {/* ═══ CTA BANNER ═══ */}
            <FadeSection>
                <section className="ft-cta-banner">
                    <div className="ft-cta-glow" />
                    <h2>Ready to Enter the <span className="ft-gradient-text">Metaverse</span>?</h2>
                    <p>Join 70+ students exploring the frontier of virtual reality, blockchain, and emerging technologies.</p>
                    <Link to="/join-us" className="ft-btn-primary ft-btn-lg ft-magnetic">
                        <span>Get Started Now</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </Link>
                </section>
            </FadeSection>
        </div>
    );
};

export default Home;
