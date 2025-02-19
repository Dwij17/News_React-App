import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark stroke">
          <img
                src="/icon-news.svg"
                alt="Your logo"
                title="Your logo"
                style={{height:'60px',marginRight: '30px'}}/>
            <h1>
              <Link className="navbar-brand" to="">
                News-Hub
              </Link>
            </h1>

           
            <button
              className="navbar-toggler  collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto mr-5">
                <li className="nav-item active">
                  <Link className="nav-link" to="">
                    News <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item @@about__active">
                  <Link className="nav-link" to="/about">
                    catagory
                  </Link>
                </li>
                <li className="nav-item @@services__active">
                  <Link className="nav-link" to="/services">
                    Artical
                  </Link>
                </li>
                <li className="nav-item @@contact__active">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <nav className="ml-lg-3">
                  <div className="search-bar">
                    <form action="#" method="GET" className="search">
                      <input
                        type="search"
                        className="search__input"
                        name="search"
                        placeholder="Search here.."
                        onload="equalWidth()"
                        required
                      />
                      <span className="fa fa-search search__icon"></span>
                    </form>
                  </div>
                </nav>
              </ul>
            </div>

            <div className="mobile-position">
              <nav className="navigation">
                
              </nav>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}
