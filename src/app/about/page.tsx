import React from 'react';

function Page() {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'start', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '18px', backgroundImage: "url('/hero.jpg')" }}>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '8px', borderRadius: '8px', maxWidth: '600px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '16px' }}>About Us</h2>
        <p>
          Welcome to <span style={{ fontWeight: '600' }}>My_Shoe&apos;s</span>, your one-stop destination for premium footwear. 
          We bring you the latest trends, top brands, and unbeatable comfort—all in one place. 
          Whether you&apos;re looking for casual sneakers, formal shoes, or sportswear, we have something for everyone.
        </p>
      </div>
    </div>
  );
}

export default Page;