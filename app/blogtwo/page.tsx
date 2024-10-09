import React from 'react'
import jeans from './assets/jeans.webp'
import Image from 'next/image'
const page = () => {
  return (
    <div>

<div className='nested-container flex-wrap flex justify-center gap-10 items-center mt-36'>

<div className='product-container'>

<Image src={jeans} alt ='no image' className='nested-image'/>

</div>

<div className='detail-container'>

<h1 className='title'>Mens Jeans</h1> <br />

<h3 className='description-nest' >Upgrade your wardrobe with our stylish jeans! Perfect fit and unmatched comfort—find your ideal pair now!</h3>
<br />
<h3 className='description-nest'>Only 10 Left In Stocks !</h3>
<br /><br />
<h3 className='description-nest'>PKR : 500 ONLY</h3><br /><br />
<button className='shop'>Shop Now</button>
</div>

</div>

    </div>
  )
}

export default page