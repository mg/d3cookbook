import React from 'react'
import { Link } from 'react-router'

const locales= [
    <option value='is' key='is'>Icelandic</option>,
    <option value='en' key='en'>English</option>,
    <option value='pl' key='pl'>Polish</option>,
]

const links= [
  { to: '/ch3', label: 'Ch3' },
  { to: '/ch4', label: 'Ch4' },
]

const Menu= ({locale, setLocale}) =>
  <ul style={styles.ul}>
    {links.map((link, idx) =>
      <li style={styles.li} key={idx}>
        <Link style={styles.link} activeStyle={styles.activeLink} {...link}>{link.label}</Link>
      </li>
    )}
  </ul>

const Main= ({locale, setLocale, children}) =>
  <div>
    <Menu locale={locale} setLocale={setLocale}/>
    {children}
  </div>

export default Main

import VendorPrefix from 'react-vendor-prefixes'
let styles = VendorPrefix.prefix({
  ul: {
    display: 'flex',
    margin: 0,
    padding: 0,
  },

  li: {
    listStyleType: 'none',
    padding: 2,
    marginRight: 5,
  },

  liLocale: {
    marginTop: 2,
  },

  link: {
    color: 'black',
    textDecoration: 'none',
    display: 'block',
    padding: '4px 8px',
  },

  activeLink: {
    color: 'white',
    backgroundColor: 'black',
  },
})
