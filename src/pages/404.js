import React from 'react'

import BaseLayout from '../components/base-layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <BaseLayout>
    <SEO title='404: Not found' />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </BaseLayout>
)

export default NotFoundPage
