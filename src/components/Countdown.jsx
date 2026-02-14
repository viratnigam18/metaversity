import { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = ({ targetDate, title, subtitle }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="countdown-container">
            <div className="countdown-header">
                <h2 className="countdown-title">{title}</h2>
                <p className="countdown-subtitle">{subtitle}</p>
            </div>

            <div className="countdown-timer">
                <div className="countdown-box">
                    <div className="countdown-value">{timeLeft.days}</div>
                    <div className="countdown-label">DAYS</div>
                </div>
                <div className="countdown-box">
                    <div className="countdown-value">{timeLeft.hours}</div>
                    <div className="countdown-label">HOURS</div>
                </div>
                <div className="countdown-box">
                    <div className="countdown-value">{timeLeft.minutes}</div>
                    <div className="countdown-label">MINUTES</div>
                </div>
                <div className="countdown-box">
                    <div className="countdown-value">{timeLeft.seconds}</div>
                    <div className="countdown-label">SECONDS</div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
