const {useState, useEffect} = require('react');

const useMobileView = () => {
  const [isMobileView, setMobileView] = useState(window.innerWidth <= 768);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize(() => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }));
    setMobileView(() => window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [isMobileView, windowSize];
};

export default useMobileView;
