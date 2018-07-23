import React from 'react'
import Link from 'gatsby-link'

const MENU = [
  { title: 'Home', url: '/' },
  { title: 'about', url: '/about' },
  { title: 'Blog', url: '/blog' },
  { title: 'Solutions', url: '/solutions' },
  { title: 'Contato', url: '/contact' },
]

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#e91e63',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <ul style={{
        display: 'flex',
        justifyContent: 'space-between',
        listStyle: 'none',
        margin: '10px 0 0 0',
        width: '60%',
      }}>
        {
          MENU.map(item => (
            <li key={item.url}>
              <Link
                to={item.url}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  </div>
)

export default Header
