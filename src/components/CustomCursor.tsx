import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-transform duration-100 ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      >
        <div className="w-5 h-5 border-2 border-primary rounded-full bg-primary/20 backdrop-blur-sm" />
      </div>

      {/* Trailing dots */}
      <div
        className="fixed pointer-events-none z-40 transition-all duration-300 ease-out opacity-60"
        style={{
          left: position.x - 2,
          top: position.y - 2,
        }}
      >
        <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
      </div>

      <div
        className="fixed pointer-events-none z-30 transition-all duration-500 ease-out opacity-40"
        style={{
          left: position.x - 1.5,
          top: position.y - 1.5,
        }}
      >
        <div className="w-0.5 h-0.5 bg-primary rounded-full" />
      </div>
    </>
  );
};

export default CustomCursor;