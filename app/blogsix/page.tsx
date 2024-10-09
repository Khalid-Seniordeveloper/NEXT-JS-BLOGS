import React from 'react'
import lap from './assets/lap.jpeg'
import Image from 'next/image'
const page = () => {
  return (
    <div>

<div className='nested-container flex-wrap flex justify-center gap-10 items-center mt-36'>

<div className='product-container'>

<Image src={lap} alt ='no image' className='nested-image'/>

</div>

<div className='detail-container'>

<h1 className='title'>Gaming Laptop</h1> <br />

<h3 className='description-nest' >
Unleash your gaming potential with our high-performance laptop, featuring cutting-edge graphics and lightning-fast processing for an unbeatable gaming experience!</h3>
<br />

<h3 className='description-nest'>Only 2 Left In Stocks !</h3>
<br /><br />
<h3 className='description-nest'>PKR : 100000 ONLY</h3><br /><br />
<button className='shop'>Shop Now</button>
</div>

</div>

    </div>
  )
}

export default page