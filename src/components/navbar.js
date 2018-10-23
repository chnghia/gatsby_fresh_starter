import React from 'react'

const Navbar = () => (
  <nav
    className="navbar is-fixed-top is-fresh is-transparent no-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://cssninja.io">
          <img
            src="assets/images/logos/fresh-alt.svg"
            alt=""
            width="112"
            height="28"
          />
        </a>

        <a className="navbar-item is-hidden-desktop is-hidden-tablet">
          <div
            id="menu-icon-wrapper"
            className="menu-icon-wrapper"
            style={{ visibility: 'visible' }}
          >
            <svg width="1000px" height="1000px">
              <path
                className="path1"
                d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
              />
              <path className="path2" d="M 300 500 L 700 500" />
              <path
                className="path3"
                d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
              />
            </svg>
            <button id="menu-icon-trigger" className="menu-icon-trigger" />
          </div>
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navMenu" className="navbar-menu is-static">
        <div className="navbar-start">
          <a className="navbar-item is-hidden-mobile">
            <div
              id="menu-icon-wrapper"
              className="menu-icon-wrapper"
              style={{ visibility: 'visible' }}
            >
              <svg width="1000px" height="1000px">
                <path
                  className="path1"
                  d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
                />
                <path className="path2" d="M 300 500 L 700 500" />
                <path
                  className="path3"
                  d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
                />
              </svg>
              <button id="menu-icon-trigger" className="menu-icon-trigger" />
            </div>
          </a>
        </div>

        <div className="navbar-end">
          <a href="#" className="navbar-item is-secondary">
            Features
          </a>
          <a href="#" className="navbar-item is-secondary">
            Pricing
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Dropdown</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Dropdown item</a>
              <a className="navbar-item">Dropdown item</a>
              <a className="navbar-item">Dropdown item</a>
            </div>
          </div>
          <a href="#" className="navbar-item is-secondary">
            Log in
          </a>
          <a className="navbar-item">
            <span className="button signup-button rounded secondary-btn raised">
              Sign up
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
