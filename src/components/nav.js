import React, { useEffect } from 'react'
import { Link } from 'gatsby'

const Nav = () => {

  useEffect(() => {
    const showSideImg = () => {
      const dataNames = [...document.querySelectorAll('[data-name]')];
      const dataImgs = [...document.querySelectorAll('[data-img]')];

      dataNames.forEach((dataName) => {
        dataName.addEventListener('mouseover', e => {
          const selectedName = dataName.dataset.name;
          dataImgs.forEach((dataImg) => {
            const selectedImgName = dataImg.dataset.img;
            if (selectedName === selectedImgName) {
              dataImg.style.visibility = 'visible';
              dataImg.classList.add('is-active');
            } else {
              dataImg.classList.remove('is-active');
              dataImg.style.visibility = 'hidden';
            }
          });
        });
      });
    }
    showSideImg()
  })

  return (
    <div className="global-nav">
    <div className="global-nav__container">
      <div className="global-nav__wrapper inner-wrap">
        <div className="global-nav__left">
          <nav className="global-nav__main">
            <div className="global-nav__item" data-name="home">
              <Link to="/">Home</Link>
            </div>
            <div className="global-nav__item" data-name="about">
              <Link to="/about">About Me</Link>
            </div>
            <div className="global-nav__item accordion">
              <div className="accordion__title"><span>Works</span></div>
              <div className="accordion__content">
                <ul>
                  <li data-name="budgeticket"><Link to="/works/budgeticket">BudgeTicket</Link></li>
                  <li data-name="flightboard"><Link to="/works/flightboard">Flight Board</Link></li>
                  <li data-name="kumonos"><Link to="/works/kumonos">KUMONOS</Link></li>
                  <li data-name="portfolio"><Link to="/works/portfolio">Portfolio</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="global-nav__right"></div>
      </div>
      <aside className="sideimg">
        <div className="sideimg__container">
          <div className="sideimg__overlay"></div>
          <div className="sideimg__item is-active" data-img="home">
            <img src="/images/hero/home.jpg" alt="" />
          </div>
          <div className="sideimg__item" data-img="about">
            <img src="/images/hero/about.jpg" alt="" />
          </div>
          <div className="sideimg__item" data-img="kumonos">
            <img src="/images/hero/kumonos.jpg" alt="" />
          </div>
          <div className="sideimg__item" data-img="flightboard">
            <img src="/images/hero/flightboard.jpg" alt="" />
          </div>
          <div className="sideimg__item" data-img="budgeticket">
            <img src="/images/hero/budgeticket.jpg" alt="" />
          </div>
          <div className="sideimg__item" data-img="portfolio">
            <img src="/images/hero/portfolio.jpg" alt="" />
          </div>
          <div className="sideimg__item" data-img="contact">
            <img src="/images/hero/contact.jpg" alt="" />
          </div>
        </div>
      </aside>
    </div>
  </div>
  )
}

export default Nav