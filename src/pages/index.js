import React from 'react'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    {/* <section className="hero is-large is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Vertically Centered Text anywhere</h1>
          <h2 className="subtitle">Subtitle</h2>
        </div>
      </div>
    </section> */}
    <section className="hero is-fullheight is-default is-bold">
      {/* <Navbar /> */}
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-5 is-offset-1 landing-caption">
              <h1 className="title is-1 is-bold is-spaced">Manage, Deploy.</h1>
              <h2 className="subtitle is-5 is-muted">
                Lorem ipsum sit dolor amet is a dummy text used by typography
                industry{' '}
              </h2>
              <p>
                <a className="button cta rounded primary-btn raised">
                  Get Started
                </a>
              </p>
            </div>
            <div className="column is-5 is-offset-1">
              <figure className="image is-4by3">
                <img
                  src="assets/images/illustrations/worker.svg"
                  alt="Description"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot mb-20">
        <div className="container">
          <div className="tabs is-centered">
            <ul>
              <li>
                <a>
                  <img
                    className="partner-logo"
                    src="assets/images/logos/clients/systek.svg"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    className="partner-logo"
                    src="assets/images/logos/clients/tribe.svg"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    className="partner-logo"
                    src="assets/images/logos/clients/kromo.svg"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    className="partner-logo"
                    src="assets/images/logos/clients/infinite.svg"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    className="partner-logo"
                    src="assets/images/logos/clients/gutwork.svg"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-feature-grey is-medium">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">Great Power Comes </h2>
          <h3 className="subtitle is-5 is-muted">With great Responsability</h3>
          <div className="divider is-centered" />
        </div>

        <div className="content-wrapper">
          <div className="columns">
            <div className="column is-one-third">
              <div
                className="feature-card is-bordered has-text-centered revealOnScroll delay-1"
                data-animation="fadeInLeft"
              >
                <div className="card-title">
                  <h4>App builder</h4>
                </div>
                <div className="card-icon">
                  <img src="assets/images/illustrations/icons/mouse-globe.svg" />
                </div>
                <div className="card-text">
                  <p>This is some explanatory text that is on two rows</p>
                </div>
                <div className="card-action">
                  <a href="#" className="button btn-align-md accent-btn raised">
                    Free Trial
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <div
                className="feature-card is-bordered has-text-centered revealOnScroll delay-2"
                data-animation="fadeInLeft"
              >
                <div className="card-title">
                  <h4>Cloud integration</h4>
                </div>
                <div className="card-icon">
                  <img src="assets/images/illustrations/icons/laptop-cloud.svg" />
                </div>
                <div className="card-text">
                  <p>This is some explanatory text that is on two rows</p>
                </div>
                <div className="card-action">
                  <a
                    href="#"
                    className="button btn-align-md secondary-btn raised"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <div
                className="feature-card is-bordered has-text-centered revealOnScroll delay-3"
                data-animation="fadeInLeft"
              >
                <div className="card-title">
                  <h4>Addons & Plugins</h4>
                </div>
                <div className="card-icon">
                  <img src="assets/images/illustrations/icons/plug-cloud.svg" />
                </div>
                <div className="card-text">
                  <p>This is some explanatory text that is on two rows</p>
                </div>
                <div className="card-action">
                  <a
                    href="#"
                    className="button btn-align-md primary-btn raised"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-feature-grey is-medium">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="has-text-centered">
              <img
                className="pushed-image"
                src="assets/images/illustrations/mockups/app-mockup.png"
              />
            </div>
          </div>
        </div>

        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">One Platform</h2>
          <h3 className="subtitle is-5 is-muted">To rule them All</h3>
        </div>

        <p className="has-text-centered mt-20">
          <a className="button cta is-large rounded secondary-btn raised">
            Get Started
          </a>
        </p>
      </div>
    </section>

    <section className="section is-medium section-secondary">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2 light-text is-spaced">
            Our Clients love us !
          </h2>
          <h3 className="subtitle is-5 light-text">
            Lorem ipsum sit dolor amet is a dummy text used by typography
            industry{' '}
          </h3>
        </div>

        <div className="content-wrapper">
          <div className="columns is-vcentered">
            <div className="column is-4">
              <figure className="testimonial">
                <blockquote>
                  Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu,
                  hinc minim appetere te usu, ea case duis scribentur has. Duo
                  te consequat elaboraret, has quando suavitate at.
                </blockquote>
                <div className="author">
                  <img src="assets/images/illustrations/faces/1.png" alt="" />
                  <h5>Irma Walters</h5>
                  <span>Accountant</span>
                </div>
              </figure>
            </div>
            <div className="column is-4">
              <figure className="testimonial">
                <blockquote>
                  Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu,
                  hinc minim appetere te usu, ea case duis scribentur has. Duo
                  te consequat elaboraret, has quando suavitate at.
                </blockquote>
                <div className="author">
                  <img src="assets/images/illustrations/faces/2.png" alt="" />
                  <h5>John Bradley</h5>
                  <span>Financial Analyst</span>
                </div>
              </figure>
            </div>
            <div className="column is-4">
              <figure className="testimonial">
                <blockquote>
                  Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu,
                  hinc minim appetere te usu, ea case duis scribentur has. Duo
                  te consequat elaboraret, has quando suavitate at.
                </blockquote>
                <div className="author">
                  <img src="assets/images/illustrations/faces/3.png" alt="" />
                  <h5>Gary Blackman</h5>
                  <span>HR Manager</span>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-light-grey is-medium">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2 is-spaced">Drop us a line or two </h2>
          <h3 className="subtitle is-5 is-muted">We'd love to hear from You</h3>
          <div className="divider is-centered" />
        </div>

        <div className="content-wrapper">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <form>
                <div className="columns is-multiline">
                  <div className="column is-6">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className="column is-6">
                    <input
                      className="input is-medium"
                      type="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div className="column is-12">
                    <textarea
                      className="textarea"
                      rows="10"
                      placeholder="Write someting ..."
                    />
                  </div>
                  <div className="form-footer has-text-centered mt-10">
                    <button className="button cta is-large primary-btn raised is-clear">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
