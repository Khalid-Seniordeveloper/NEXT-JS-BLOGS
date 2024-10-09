import React from 'react'
import tshirt from './assets/tshirt.jpeg'
import Image from 'next/image'
const page = () => {
  return (
    <div>

<div className='nested-container flex-wrap flex justify-center gap-10 items-center mt-36'>

<div className='product-container'>

<Image src={tshirt} alt ='no image' className='nested-image'/>

</div>

<div className='detail-container '>

<h1 className='title'>T Shirt</h1> <br />

<h3 className='description-nest' >Experience the perfect blend of comfort and style with this trendy t-shirt. Showcase your individuality and celebrate every moment!</h3>
<br />

<h3 className='description-nest'>Only 2 Left In Stocks !</h3>
<br /><br />
<h3 className='description-nest'>PKR : 300 ONLY</h3><br /><br />
<button className='shop'>Shop Now</button>
</div>

</div>

    </div>
  )
}

export default page