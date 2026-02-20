import { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];

        // Mouse tracking
        const mouse = { x: -1000, y: -1000 };
        const MOUSE_RADIUS = 120;

        const colors = [
            'rgba(168, 85, 247, 0.6)',
            'rgba(59, 130, 246, 0.5)',
            'rgba(245, 158, 11, 0.35)',
            'rgba(139, 92, 246, 0.5)',
            'rgba(99, 102, 241, 0.4)',
        ];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.baseX = this.x;
                this.baseY = this.y;
                this.size = Math.random() * 2.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.22;
                this.speedY = (Math.random() - 0.5) * 0.22;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.opacity = Math.random() * 0.5 + 0.2;
                this.pulse = Math.random() * Math.PI * 2;
                this.pulseSpeed = Math.random() * 0.015 + 0.004;
                this.density = Math.random() * 30 + 10;
            }

            update() {
                // Mouse interaction — push particles away
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < MOUSE_RADIUS) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * this.density * 0.08;
                    this.y -= Math.sin(angle) * force * this.density * 0.08;
                } else {
                    // Drift back toward natural movement
                    this.x += this.speedX;
                    this.y += this.speedY;
                }

                this.pulse += this.pulseSpeed;

                // Wrap edges
                if (this.x > canvas.width + 10) this.x = -10;
                if (this.x < -10) this.x = canvas.width + 10;
                if (this.y > canvas.height + 10) this.y = -10;
                if (this.y < -10) this.y = canvas.height + 10;
            }

            draw() {
                const currentOpacity = this.opacity + Math.sin(this.pulse) * 0.15;

                // Outer glow — brighter near mouse
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const proximityBoost = dist < MOUSE_RADIUS * 2 ? (1 - dist / (MOUSE_RADIUS * 2)) * 0.3 : 0;

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * (4 + proximityBoost * 6), 0, Math.PI * 2);
                ctx.fillStyle = this.color.replace(/[\d.]+\)$/, `${(currentOpacity * 0.1 + proximityBoost * 0.15)})`);
                ctx.fill();

                // Core dot
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * (1 + proximityBoost), 0, Math.PI * 2);
                ctx.fillStyle = this.color.replace(/[\d.]+\)$/, `${currentOpacity + proximityBoost})`);
                ctx.fill();
            }
        }

        const initParticles = () => {
            const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 180);
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        resize();
        initParticles();
        animate();

        const handleResize = () => {
            resize();
            initParticles();
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default ParticleBackground;
