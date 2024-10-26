// Fade.js
import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/fadeAnimation.css';

const FadeAnimation = ({ direction = 'up', duration = '1s', children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const fadeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // Stop observing after triggering animation
                    }
                });
            },
            {
                threshold: 0.1, // Start the animation when 10% of the element is visible
            }
        );

        if (fadeRef.current) {
            observer.observe(fadeRef.current);
        }

        return () => {
            if (fadeRef.current) {
                observer.unobserve(fadeRef.current);
            }
        };
    }, []);

    // Apply the fade class only when the element is in view
    const fadeClass = isVisible ? `fade-in-${direction}` : '';

    // Inline style to control the animation duration
    const style = {
        animationDuration: duration,
    };

    return (
        <div ref={fadeRef} className={fadeClass} style={style}>
            {children}
        </div>
    );
};

export default FadeAnimation;
