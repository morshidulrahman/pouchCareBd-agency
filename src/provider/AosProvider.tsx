'use client'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AosProviderProps {
  children: React.ReactNode;
}

const AosProvider = ({ children }: AosProviderProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 50,
     
    });

    // Refresh AOS on route change
    AOS.refresh();
  }, []);

  return children;
};

export default AosProvider;