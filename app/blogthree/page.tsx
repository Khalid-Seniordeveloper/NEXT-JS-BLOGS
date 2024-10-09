import React from 'react'
import sho from './assets/sho.jpeg'
import Image from 'next/image'
const page = () => {
  return (
    <div>

<div className='nested-container flex-wrap flex justify-center gap-10 items-center mt-36'>

<div className='product-container'>

<Image src={sho} alt ='no image' className='nested-image'/>

</div>

<div className='detail-container'>

<h1 className='title'>Shoes</h1> <br />

<h3 className='description-nest' >Elevate your style with our trendy shoes! Comfort and quality await—step into your new favorite pair today!</h3>
<br />

<h3 className='description-nest'>Only 8 Left In Stocks !</h3>
<br /><br />
<h3 className='description-nest'>PKR : 2000 ONLY</h3><br /><br />
<button className='shop'>Shop Now</button>
</div>

</div>

    </div>
  )
}

export default page