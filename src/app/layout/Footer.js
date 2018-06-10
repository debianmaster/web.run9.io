import React from 'react'

const Footer = () => (
<footer class="footer footer-dark">
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="footer-logo">
          <img src="img/logos/fresh-white.svg"/>
        </div>
      </div>
      <div class="column">
        <div class="footer-column">
          <div class="footer-header">
            <h3>Product</h3>
          </div>
          <ul class="link-list"><li>
              <a href="#">
                Discover features
              </a>
            </li><li>
              <a href="#">
                Why choose our Product?
              </a>
            </li><li>
              <a href="#">
                Compare features
              </a>
            </li><li>
              <a href="#">
                Our Roadmap
              </a>
            </li><li>
              <a href="#">
                Request features
              </a>
            </li></ul>
        </div>
      </div>
      <div class="column">
        <div class="footer-column">
          <div class="footer-header">
            <h3>Docs</h3>
          </div>
          <ul class="link-list"><li>
              <a href="#">
                Get Started
              </a>
            </li><li>
              <a href="#">
                User guides
              </a>
            </li><li>
              <a href="#">
                Admin guide
              </a>
            </li><li>
              <a href="#">
                Developers
              </a>
            </li></ul>
        </div>
      </div>
      <div class="column">
        <div class="footer-column">
          <div class="footer-header">
            <h3>Blogroll</h3>
          </div>
          <ul class="link-list"><li>
              <a href="#">
                Latest News
              </a>
            </li><li>
              <a href="#">
                Tech articles
              </a>
            </li><li>
              <a href="#">
                Video Blog
              </a>
            </li></ul>
        </div>
      </div>

      <div class="column">
        <div class="footer-column">
          <div class="footer-header">
            <h3>Follow Us</h3>
            <nav class="level is-mobile">
              <div class="level-left"><a class="level-item" href="https://github.com/run9io">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                </a><a class="level-item" href="https://facebook.com/run9io">
                  <span class="icon">
                    <i class="fa fa-facebook"></i>
                  </span>
                </a><a class="level-item" href="https://twitter.com/run9io">
                  <span class="icon">
                    <i class="fa fa-twitter"></i>
                  </span>
                </a></div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
)

export default Footer