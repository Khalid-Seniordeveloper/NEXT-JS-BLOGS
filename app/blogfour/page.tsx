import React from 'react'
import watch from './assets/watch.jpeg'
import Image from 'next/image'
const page = () => {
  return (
    <div>

<div className='nested-container flex-wrap flex justify-center gap-10 items-center mt-36'>

<div className='product-container'>

<Image src={watch} alt ='no image' className='nested-image'/>

</div>

<div className='detail-container'>

<h1 className='title'>Watch</h1> <br />

<h3 className='description-nest' >This watch combines elegance and functionality—wear it and make every moment count!</h3>
<br />

<h3 className='description-nest'>Only 7 Left In Stocks !</h3>
<br /><br />
<h3 className='description-nest'>PKR : 1000 ONLY</h3><br /><br />
<button className='shop'>Shop Now</button>
</div>

</div>

    </div>
  )
}

export default page