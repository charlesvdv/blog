import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => (
  <div className='h-screen'>
    <SEO title='Charles Vandevoorde' />

    <StaticImage
      src='../images/ozark-drones-jeV-LUEyJoE-unsplash.jpg'
      quality='75'
      placeholder='blurred'
      className='h-screen'
      imgClassName='h-screen'
      objectFit='cover'
    />

    <div className='absolute inset-y-2/5 mx-20 lg:mx-52 text-gray-200'>
      <h1 className='text-4xl md:text-6xl font-semibold'>
        Charles Vandevoorde
      </h1>
      <p className='text-2xl md:text-3xl font-light'>
        software engineer from belgium
      </p>
      <nav className='my-4 text-l md:text-2xl space-x-4 font-mono'>
        <Link to='/about'>about/</Link>
        <Link to='/blog'>blog/</Link>
      </nav>
    </div>
  </div>
)

export default IndexPage
