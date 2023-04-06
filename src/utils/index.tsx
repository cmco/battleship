import { useState, useEffect } from 'react';

export const IsMobile = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 1280);

  const handleWindowSizeChange = () => {
    setMobile(window.innerWidth <= 1280);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return mobile;
};
