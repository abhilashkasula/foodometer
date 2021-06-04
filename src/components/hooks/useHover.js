import {useEffect, useRef, useState} from 'react';

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseHover = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseHover);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseHover);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  });

  return [ref, isHovered];
};

export default useHover;
