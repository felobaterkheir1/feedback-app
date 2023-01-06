import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className='about'>
      <h1>Feedback Project</h1>
      <p>This project is to take feedback from a client about a service or a product and it is just educational and it will be modified in the future to fit in other projects. </p>
      <Link to="/">back to home</Link>
    </div>
  )
}

export default AboutPage
