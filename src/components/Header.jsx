import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="header">
        <section className="menu">
          <h1 className="title">GreenTree Education</h1>
        </section>
        <section>
          <nav className="menu">
            <Link className="menu-link" to="/">
              <p className="menu-item">Home</p>
            </Link>
            <Link className="menu-link" to="/add">
              <p className="menu-item">Add</p>
            </Link>
          </nav>
        </section>
      </header>
    </div>
  )
}

export default Header
