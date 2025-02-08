import React from 'react'

const page = () => {
    return (
        <div style={{ border: '1px solid', maxWidth: '600px', margin: '80px auto', padding: '32px', backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }} data-aos='fade-up' >Contact Us</h2>
            <form >
                <input type="text" placeholder='Full Name' style={{ width: '100%', marginBottom: '16px', padding: '8px', border: '1px solid blue', borderRadius: '8px' }} required />
                <input type="email" placeholder='Email Address' style={{ width: '100%', marginBottom: '16px', padding: '8px', border: '1px solid blue', borderRadius: '8px' }} required />
                <input type="text" placeholder='Phone Number' style={{ width: '100%', marginBottom: '16px', padding: '8px', border: '1px solid blue', borderRadius: '8px' }} />
                <textarea placeholder='Your Message' style={{ width: '100%', marginBottom: '16px', padding: '8px', border: '1px solid blue', borderRadius: '8px' }} rows={5} required></textarea>
                <button style={{ width: '100%', backgroundColor: 'blue', color: 'white', padding: '8px', borderRadius: '8px' }}>
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default page