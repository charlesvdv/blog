import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql, Link } from 'gatsby'

const BaseLayout = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      className='grid grid-cols-3 gap-4 mx-2 my-8 md:mx-8 md:my-12'
      style={{ gridTemplateColumns: '1fr minmax(min-content, 60rem) 1fr' }}
    >
      <Helmet bodyAttributes={{class: 'bg-green-50 bg-opacity-30'}} />
      <div className='relative col-start-2 2xl:col-start-1 2xl:row-start-1 2xl:col-span-1 2xl:h-32'>
        <Link
          to='/'
          className='2xl:absolute 2xl:bottom-1/3 2xl:right-0 text-3xl 2xl:text-4xl font-semibold'
        >
          {data.site.siteMetadata.title}
        </Link>
      </div>

      <div className='relative col-start-2 2xl:col-start-2 2xl:row-start-1 2xl:col-span-1 2xl:h-32'>
        <div className='2xl:absolute 2xl:bottom-1/3 space-x-6 text-xl font-mono'>
          <Link to='/about' className=''>
            about/
          </Link>
          <Link to='/blog' className=''>
            blog/
          </Link>
        </div>
      </div>

      <main
        className={`col-start-2 2xl:col-start-2 2xl:row-start-2 2xl:col-span-1 ${className}`}
      >
        {children}
      </main>
    </div>
  )
}

export default BaseLayout
