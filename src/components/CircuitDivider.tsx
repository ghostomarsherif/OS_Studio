import { useEffect, useRef, useState } from 'react';

interface CircuitDividerProps {
  variant?: 'simple' | 'complex';
}

export default function CircuitDivider({ variant = 'simple' }: CircuitDividerProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  if (variant === 'complex') {
    return (
      <div className="circuit-divider my-8">
        <svg ref={ref} viewBox="0 0 1200 40" fill="none" preserveAspectRatio="none">
          <path
            d="M 0 20 L 100 20 L 120 10 L 300 10 L 320 20 L 500 20 L 520 30 L 700 30 L 720 20 L 900 20 L 920 10 L 1100 10 L 1120 20 L 1200 20"
            className={`circuit-line ${animate ? 'animate' : ''}`}
          />
          <circle cx="120" cy="10" r="5" className={`circuit-node ${animate ? 'animate' : ''}`} />
          <circle cx="320" cy="20" r="5" className={`circuit-node ${animate ? 'animate' : ''}`} />
          <circle cx="520" cy="30" r="5" className={`circuit-node ${animate ? 'animate' : ''}`} />
          <circle cx="720" cy="20" r="5" className={`circuit-node ${animate ? 'animate' : ''}`} />
          <circle cx="920" cy="10" r="5" className={`circuit-node ${animate ? 'animate' : ''}`} />
          <circle cx="1120" cy="20" r="5" className={`circuit-node ${animate ? 'animate' : ''}`} />
        </svg>
      </div>
    );
  }

  return (
    <div className="circuit-divider my-8">
      <svg ref={ref} viewBox="0 0 1200 40" fill="none" preserveAspectRatio="none">
        <path
          d="M 0 20 L 200 20 L 220 10 L 580 10 L 600 20 L 980 20 L 1000 30 L 1200 30"
          className={`circuit-line ${animate ? 'animate' : ''}`}
        />
        <circle cx="220" cy="10" r="5" className={`circuit-node ${animate ? 'animate' : ''}`} />
        <circle cx="600" cy="20" r="5" className={`circuit-node ${animate ? 'animate' : ''}`} />
        <circle cx="1000" cy="30" r="5" className={`circuit-node ${animate ? 'animate' : ''}`} />
      </svg>
    </div>
  );
}
