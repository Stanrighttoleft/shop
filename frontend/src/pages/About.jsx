import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
  <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img src={assets.about_image} alt="" className="w-full md:max-w-[450px]" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eum minima, atque laudantium itaque unde culpa eveniet explicabo? Impedit iusto accusantium rerum quam fugit nesciunt id, praesentium optio rem explicabo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, reprehenderit fugit saepe quis quod sapiente, similique cumque ad, aspernatur accusantium totam quibusdam iste ea vitae? Delectus aut pariatur quisquam odit.</p>
      <b className='text-gray-800' >Our Mission</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore neque, aliquid nulla tempore vero repudiandae saepe repellendus quaerat provident excepturi unde molestiae perspiciatis voluptatibus non rerum eaque velit animi.</p>
      </div>

    </div>
    <div className="text-xl py-4">
      <Title text1={'WHY '} text2={'CHOOSE US'}/>
    </div>
    <div className="flex flex-col md:flex-row text-sm mb-20 space-x-1">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b className='text-gray-600' >Quality Assurnace:</b>
        <p>We meticulously select and vet each product to ensure it meet our stringent quality standard</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience:</b>
        <p className='text-gray-600' >With our user-friendly interface and hassle free order process, shopping has never been easier</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600' >Our team of dedicated professionals is here to assist you the way, ensure your satification is our top priority</p>
      </div>
    </div>
    <NewsletterBox/> 
  </div>
  )
}

export default About