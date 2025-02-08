'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: "url(/hero.jpg)" }}>
      <div style={{ paddingLeft: '0', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Welcome To My_Shoes</h1>
        <p style={{ fontSize: '1.5rem', marginTop: '16px' }}>Your One-Stop Shop For The Shoes</p>
        <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: 'blue', borderRadius: '8px', fontWeight: 'bold' }}>Shop Now</button>
      </div>
    </div>
  )
}

export default Content