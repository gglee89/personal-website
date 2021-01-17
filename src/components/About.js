import React from 'react';
import { Container } from 'react-bootstrap';

// LAYOUT
import SectionLayout from '../layout/SectionLayout';

const About = () => {
  return (
    <SectionLayout id="section1">
      <Container className="section__wrapper">
        <div className="main-content align-center loaded">
          <span className="section-name animate-element spirit-fade-in-elements">
            About Us
          </span>
          <h2 className="animate-element spirit-fade-in-elements">
            Saving lives through technology
          </h2>
          <span className="separator animate-element spirit-fade-in-elements"></span>
          <div className="row animate-element spirit-fade-in-elements">
            <div className="col-12 col-lg-6 animate-element spirit-fade-in-elements">
              <p className="animate-element spirit-fade-in-elements">
                Lorem ipsum eu esse aliqua voluptate consectetur duis quis
                voluptate proident qui sit reprehenderit quis esse in elit
                excepteur laboris sed occaecat minim ex cupidatat commodo
                exercitation ex dolor qui ex dolore amet duis ut anim cupidatat
              </p>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1 animate-element spirit-fade-in-elements">
              <p className="animate-element spirit-fade-in-elements">
                Lorem ipsum eu esse aliqua voluptate consectetur duis quis
                voluptate proident qui sit reprehenderit.
              </p>
              <ul className="about-list animate-element spirit-fade-in-elements">
                <li className="animate-element spirit-fade-in-elements">
                  UI Designer / FR01
                </li>
                <li className="animate-element spirit-fade-in-elements">
                  Product Developer / FR056
                </li>
                <li className="animate-element spirit-fade-in-elements">
                  Copywriter / ENG05
                </li>
                <li className="animate-element spirit-fade-in-elements">
                  UX &amp; Marketing manager / US1901
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </SectionLayout>
  );
};

export default About;
