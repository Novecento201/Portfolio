import { useState } from 'react';
import './letter.css';

const Letter = ({ letter }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setTimeout(() => setHovered(false), 1000);
  };

  return (
    <span
      className={`${hovered ? 'animate__animated  animate__rubberBand' : ''}`}
      onMouseEnter={handleMouseEnter}
    >
      {letter}
    </span>
  );
};

export default Letter;
