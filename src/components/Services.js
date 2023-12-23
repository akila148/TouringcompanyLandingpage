import React from 'react'
import Title from './Title'
import { services } from '../data'
import Service from './Service'
const Services = () => {
  return (
    <>
      <section class="section services" id="services">
        <Title title="Our" subTitle="Services" />
        <div class="section-center services-center">
          {services.map((service) => {
            return <Service {...service} />
          })}
        </div>
      </section>
    </>
  )
}

export default Services
