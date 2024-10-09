import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>

<div className='nav-container flex items-center justify-between'>

<div><h1 className='text-4xl name slide-right'>Blogging App</h1></div>

<div>

<ul className='list-none flex justify-center gap-20 text-4xl nav-list slide-left'>
    <li><Link href={'/'}>Home</Link></li>
    <li><Link href={'/about'}>About</Link></li>
    <li><Link href={'/contact'}>Contact</Link></li>


</ul>

</div>



</div>


    </div>
  )
}

export default Navbar