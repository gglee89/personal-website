import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Image } from 'react-bootstrap';
import moment from 'moment';

// ASSETS
import logo from '../assets/img/logo.webp';

// LAYOUT
import SectionLayout from '../layout/SectionLayout';

// ANIMATION CANVAS
import { setup, resize } from '../assets/js/canvas/swirl';

// ACTIONS
import { toggleModal } from '../actions/interfaceActions';

// UTILS
import { calculateTimeLeft } from '../utils/eventHandlers';

const Hero = () => {
  const [time, setTime] = useState(calculateTimeLeft());
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('load', setup);
    window.addEventListener('resize', resize);

    const intervalId = setInterval(() => {
      setTime(calculateTimeLeft);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <SectionLayout id="section0">
      <a className="brand-logo" href="/">
        <Image src={logo} fluid />
      </a>
      <Container className="section__wrapper" fluid>
        <div className="main-content hero align-center loaded">
          <h1 className="animate-element spirit-fade-in-elements">
            official launch in
            <br className="animate-element spirit-fade-in-elements" />
            <span
              id="getting-started"
              className="animate-element spirit-fade-in-elements"
            >
              {`${time.days} days ${time.hours}:${time.minutes}:${time.seconds}`}
            </span>
          </h1>
          <p className="on-home animate-element spirit-fade-in-elements">
            Shaping your creative project and bring it to the top in a minute
            <br className="animate-element spirit-fade-in-elements" /> Advanced
            design for modern and awesome people
          </p>
          <div className="command animate-element spirit-fade-in-elements">
            <Button
              className="btn btn--light btn--colored animate-element spirit-fade-in-elements"
              onClick={() => dispatch(toggleModal())}
            >
              <span id="first-text">Keep me updated!</span>
            </Button>
            {/* <Button className="btn btn--light animate-element spirit-fade-in-elements">
              Explore
              <span className="ask-to-scroll">
                <span className="arrow">
                  <span></span>
                  <span></span>
                </span>
                <span className="arrow">
                  <span></span>
                  <span></span>
                </span>
                <span className="arrow">
                  <span></span>
                  <span></span>
                </span>
              </span>
            </Button> */}
          </div>
        </div>
      </Container>
      <div className="content content--canvas"></div>
    </SectionLayout>
  );
};

export default Hero;
