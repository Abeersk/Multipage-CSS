'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'blue',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: '10',
      }}
    >
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My_Shoe's</h1>

      {!isMobile && (
        <nav style={{ display: 'flex', gap: '40px', fontWeight: 'bold' }}>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/shoes'>Shoes</Link>
          <Link href='/contact'>Contact</Link>
          <FaShoppingCart size={20} />
        </nav>
      )}

      {isMobile && (
        <div>
          <div onClick={() => setIsMenuOpen(true)} style={{ cursor: 'pointer' }}>
            <HiMenuAlt3 size={24} />
          </div>

          {isMenuOpen && (
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100vh',
                backgroundColor: 'blue',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '20',
              }}
            >
              <div
                onClick={() => setIsMenuOpen(false)}
                style={{ cursor: 'pointer', position: 'absolute', top: '20px', right: '20px' }}
              >
                <HiX size={20} />
              </div>

              <nav
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                }}
              >
                <Link href='/' onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link href='/about' onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <Link href='/shoes' onClick={() => setIsMenuOpen(false)}>
                  Shoes
                </Link>
                <Link href='/contact' onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <FaShoppingCart size={32} />
              </nav>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
