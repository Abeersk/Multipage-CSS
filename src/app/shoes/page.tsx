import Image from 'next/image'
import React from 'react'

const page = () => {

const ShoesData =[

    {id :1,name:'Casual Shoes',price:7000,description:'PVC Comfort Foam White Casual Shoes For Men Sneakers',image:'/shoes-1.webp'},
    {id :2,name:'Mens Casual Shoes',price:5000,description:' It has 1 pair of Casual Shoes Material: Outer Layer: Synthetic, Sole: Airmix Fastening:',image:'/shoes-2.webp'},
    {id :3,name:'Nike Jordan',price:6000,description:'Nike Dunk High Retro',image:'/jordan.jpeg'},
    {id :4,name:'Sport Shoes',price:7000,description:'Sport Shoes for Men and boys Name: Sport Shoes for Men and boys',image:'/Shoes-4.jpg'},
    {id :5,name:' Tennis Shoes',price:7000,description:'IELGY Men Shoes Sneakers Breathable mesh mens running sneakers',image:'/shoes-5.webp'},
    {id :6,name:' Black Synthetic ',price:7000,description:' This product is made from synthetic on the inside and cotton on outside and is finished in an attractive colors.',image:'/shoes-6.webp'}

] 

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', padding: '40px', margin: '40px 0' }}>
        {ShoesData.map(shoes =>(
          <div key={shoes.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
           <Image src={shoes.image} alt='' width={1000} height={1000} style={{ width: '100%', borderRadius: '8px', transition: 'transform 0.3s' }}/>
          <h3 style={{ marginTop: '16px', fontSize: '1.5rem', fontWeight: 'bold' }}>{shoes.name}</h3>
      <p style={{ color: 'gray' }}>{shoes.description}</p>
   <div>{shoes.price}</div>      
<button>Add to Cart</button>
          </div>
        ))}
    </div>
  )
}

export default page