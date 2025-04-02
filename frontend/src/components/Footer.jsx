import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-600' >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eius fugiat aperiam vero debitis modi repellendus consectetur, minima in, commodi veritatis nulla tenetur repudiandae atque quibusdam expedita aliquam beatae totam.</p>
      </div>
      <div>
        <p className="mt-9 text-xl font-medium mb-5">Company</p>
        <ul className=" flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About</li>
          <li>Delivery</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div>
        <p className='mt-9 text-xl font-medium mb-5'>Get in touch</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+1-848-888-1688</li>
          <li>contactme@youcnatry</li>
        </ul>
      </div>
    </div>
    <div>
      <hr />
      <p className='py-5 text-sm text-center' >Copyright 2024@ Carrot.com Some right reserved.</p>
    </div>
    </div>
  )
}

export default Footer