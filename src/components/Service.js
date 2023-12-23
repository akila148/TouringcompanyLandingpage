import React from 'react'

const Service = ({ title, icon, text }) => {
  return (
    <article class="service">
      <span class="service-icon">
        <i class={icon}></i>
      </span>
      <div class="service-info">
        <h4 class="service-title">{title}</h4>
        <p class="service-text">{text}</p>
      </div>
    </article>
  )
}

export default Service
