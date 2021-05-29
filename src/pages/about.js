import React from 'react'

import BaseLayout from '../components/base-layout'
import SEO from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => (
  <BaseLayout>
    <SEO title='About' />
    <div className='md:my-4'>
      <div className='flex justify-center md:block mx-auto md:mx-0'>
        <StaticImage
          src='../images/me.jpg'
          quality='100'
          placeholder='blurred'
          alt='Photo of Charles Vandevoorde'
          className='my-4 md:mx-4 md:float-right'
          style={{ borderRadius: '50%', maxWidth: '15rem' }}
          imgStyle={{ borderRadius: '50%' }}
        />
      </div>
      <div className='prose max-w-none'>
        <p>
          <span className='text-lg font-semibold mr-2'>Hey!</span> I am Charles
          Vandevoorde, a software engineer from Belgium. In 2018, I graduated
          from a master in industrial engineering with a specialization in
          information technology at the{' '}
          <a href='https://www.ecam.be/'>ECAM Brussels</a>. Even since, I work
          as a backend software engineer in different industries (financial,
          travel, ...).
        </p>

        <p>
          Software engineering is also a passion for me. I love to learn new
          computer science concepts or niche programming languages. I am
          generally eager to learn how things works under the hood. When I have
          some time, I also develop some side-projects:
        </p>

        <ul>
          <li>
            this website built in react <i>(gatsby)</i> with the{' '}
            <a href='https://jamstack.org/'>Jamstack</a> architecture
          </li>
          <li>
            the full automation of the installation and setup of my laptop on
            archlinux with Ansible (
            <a href='https://github.com/charlesvdv/archsetup'>source</a>)
          </li>
          <li>
            random libraries published on my{' '}
            <a href='https://github.com/charlesvdv'>github</a>
          </li>
          <li>...</li>
        </ul>

        <p>
          In addition to my side-projects, I also run and bike quite a lot in
          the Belgium countryside. I am also a big gourmet and never say no to
          nice fresh beer.
        </p>

        <h3>This website</h3>

        <p>
          Writing is a great excercise to solidify understanding of complex
          topics. I often find complex to share my ideas in a clear and simple
          manner. I see this blog as a mean of exploring and improving myself in
          thinking and explaining concepts a clear manner.
        </p>

        <p>
          This site will also allow me to share about concepts or side-projects
          I care about. This website is 100% open-source and can be found on my{' '}
          <a href='https://github.com/charlesvdv/blog'>Github</a>.
        </p>

        <h3>Contact</h3>
        <p>
          You can contact me via email at <i>charles@&lt;my domain name&gt;</i>{' '}
          or you can find me on various social platforms such as{' '}
          <a href='https://www.linkedin.com/in/charlesvdv/'>LinkedIn</a> or{' '}
          <a href='https://github.com/charlesvdv'>Github</a>.
        </p>
      </div>
    </div>
  </BaseLayout>
)

export default AboutPage
