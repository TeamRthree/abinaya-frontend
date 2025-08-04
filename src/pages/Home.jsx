import React from 'react'
import HeroSection from '../components/HeroSection'
import PartnersSection from '../components/PartnersSection'
import AboutSection from '../components/AboutSection'
import Specialities from '../components/Specialities'
import Testimonials from '../components/Testimonials'
import FaqSection from '../components/FaqSection'
import BookAppointmentForm from '../components/BookAppointmentForm'
import RecentBlogs from '../components/RecentBlogsSection'
import InstagramFeed from '../components/InstagramFeed'

const Home = () => {
  return (
    <div className='w-full'>
        <HeroSection/>
        <PartnersSection/>
        <AboutSection/>
        <Specialities/>
        <Testimonials/>
        <InstagramFeed/>
        <RecentBlogs/>
        <FaqSection/>

<div className='flex items-center flex-col pb-16'>
  <h2 className="text-2xl md:text-[36px] font-semibold text-[#ff4fa0] pb-16">
        Contact Us
      </h2>
<BookAppointmentForm/>
</div>
        

    </div>
  )
}

export default Home