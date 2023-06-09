import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4">
      <p className="text-xs">&copy; {currentYear} BeautyBook</p>
    </footer>
  );
};

export default Footer;
