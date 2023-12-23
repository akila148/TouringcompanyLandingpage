import React from 'react'
import Title from './Title'
import Tour from './Tour'
import { tours } from '../data'
const Tours = () => {
  return (
    <>
      <section class="section" id="tours">
        <Title title="Featured" subTitle="Tours" />

        <div class="section-center featured-center">
          {tours.map((tour) => {
            return <Tour {...tour} key={tour.id} />
          })}
        </div>
      </section>
    </>
  )
}

export default Tours
