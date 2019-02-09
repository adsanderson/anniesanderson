import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />

          <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Merriweather:300,700,700italic,300italic|Open+Sans:700,400|Poiret+One" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" />

	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <div>{children}</div>
      </div>
    )}
  />
)

export default TemplateWrapper
