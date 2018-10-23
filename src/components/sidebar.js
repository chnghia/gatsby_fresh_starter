import React from 'react'
import * as Icon from 'react-feather'

const Sidebar = () => (
  <div id="sidebar" className="sidebar">
    <div className="sidebar-header">
      <img src="assets/images/logos/fresh-square.svg" />
      <a
        id="sidebar-close"
        className="sidebar-close"
        href="javascript:void(0);"
      >
        <Icon.X />
      </a>
    </div>
    <div className="inner">
      <ul className="sidebar-menu">
        <li>
          <span className="nav-section-title" />
        </li>
        <li className="have-children">
          <a href="#">
            <span className="fa fa-user" />
            User
          </a>
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </li>
        <li className="have-children">
          <a href="#">
            <span className="fa fa-envelope" />
            Messages
          </a>
          <ul>
            <li>
              <a href="#">Inbox</a>
            </li>
            <li>
              <a href="#">Compose</a>
            </li>
          </ul>
        </li>
        <li className="have-children">
          <a href="#">
            <span className="fa fa-image" />
            Images
          </a>
          <ul>
            <li>
              <a href="#">Library</a>
            </li>
            <li>
              <a href="#">Upload</a>
            </li>
          </ul>
        </li>
        <li className="have-children">
          <a href="#">
            <span className="fa fa-cog" />
            Settings
          </a>
          <ul>
            <li>
              <a href="#">User settings</a>
            </li>
            <li>
              <a href="#">App settings</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
)

export default Sidebar
