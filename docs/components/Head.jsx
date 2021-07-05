import React from 'react'
import '../styles.css'

export default ({ title, description, author, location }) => {
  const dotdots = location.replace(/^.*colorable\//, "").replace(/[^\/]+/g, "..")
  return <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={dotdots + 'docs.css'} />
        <script src={dotdots + 'bundle.js'} />
      </head>
}
