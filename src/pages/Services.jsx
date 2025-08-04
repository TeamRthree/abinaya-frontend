import React from 'react'
import ServiceHero from '../components/ServiceHero'
import CareSpecialities from '../components/CareSpecialities'
import BookAppointmentForm from '../components/BookAppointmentForm'

const Services = () => {
  return (
    <div className='pb-16'>
      
<ServiceHero/>
<CareSpecialities/>
<div className='py-8'>
<BookAppointmentForm/>
</div>

    </div>
  )
}

export default Services