import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTextHover, setIsTextHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for touch device
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // Check for reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isImage = target.closest('img, [data-cursor="viewfinder"]');
      const isText = target.closest('p, h1, h2, h3, h4, h5, h6, span, a:not([class*="bg-"])');

      setIsHovering(!!isImage);
      setIsTextHover(!!isText && !isImage);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Don't render on touch devices or with reduced motion
  if (isTouch || prefersReducedMotion) return null;

  return (
    <div
      className={`custom-cursor ${isHovering ? 'custom-cursor--viewfinder' : ''} ${isTextHover ? 'custom-cursor--ibeam' : ''}`}
      style={{
        left: position.x - 12,
        top: position.y - 12,
        opacity: isVisible ? 1 : 0,
        cursor: isTextHover ? 'text' : 'none',
      }}
    >
      <div className="custom-cursor__crosshair" />
      <div className="custom-cursor__dot" />
    </div>
  );
}
