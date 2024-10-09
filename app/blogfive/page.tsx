import React from 'react'
import hat from './assets/hat.jpeg'
import Image from 'next/image'
const page = () => {
  return (
    <div>

<div className='nested-container flex-wrap flex justify-center gap-10 items-center mt-36'>

<div className='product-container'>

<Image src={hat} alt ='no image' className='nested-image'/>

</div>

<div className='detail-container'>

<h1 className='title'>Hat</h1> <br />

<h3 className='description-nest' >This hat will add a fresh touch to your style—grab yours now and stand out!</h3>
<br />

<h3 className='description-nest'>Only 5 Left In Stocks !</h3>
<br /><br />
<h3 className='description-nest'>PKR : 200 ONLY</h3><br /><br />
<button className='shop'>Shop Now</button>
</div>

</div>

    </div>
  )
}

export default page