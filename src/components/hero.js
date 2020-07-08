import React, { useEffect } from 'react'
import ScrollMagic from "scrollmagic"
import { TweenMax } from "gsap"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"

const TextBlock = ({ title, bgimg }) => {

  useEffect(() => {

    const slideInMask = () => {
      const heroImage = document.querySelector('.hero__left');
      setTimeout(() => {
        heroImage.classList.add('is-active');
      }, 500);
    }

    const slideTitle = () => {
      ScrollMagicPluginGsap(ScrollMagic, TweenMax);
      const controller = new ScrollMagic.Controller();
      // eslint-disable-next-line
      const scene = new ScrollMagic.Scene({
        triggerElement: '.hero__container',
        duration: '300%',
        triggerHook: 0,
      })
      .setTween(".hero__title--fill", {left: "150%"})
      .addTo(controller);
    }

    slideInMask();
    slideTitle();
  }, [])
  
  
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__title--fill">{title}</div>
        <div className="hero__title--stroke">{title}</div>
        <div className="hero__bgimg">
          <img src={bgimg} alt="background" className="bgimg" />
        </div>
        <div className="hero__wrapper inner-wrap">
          <div className="hero__left"></div>
          <div className="hero__right"></div>
        </div>
      </div>
    </div>
  )
}

export default TextBlock