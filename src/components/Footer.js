import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-scroll';

// COMPONENTS
import { Col, Row } from 'react-bootstrap';

// ACTIONS
import { toggleModal } from '../actions/interfaceActions';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer>
      <div className="line"></div>
      <Row>
        <Col lg={12} xl={4} className="footer__nav">
          <ul className="on-left">
            <li>
              <Link spy={true} smooth={true} duration={500} to="section0">
                Home
              </Link>
            </li>
            <li>
              <Link spy={true} smooth={true} duration={500} to="contact">
                Contact
              </Link>
            </li>
            <li>
              <div className="trigger" onClick={() => dispatch(toggleModal())}>
                Notify Me
              </div>
            </li>
          </ul>
        </Col>
        <Col lg={12} xl={4} className="footer__copyright">
          <p>
            © Genealogy 2020
            <br />
            Saving lives through technology
          </p>
        </Col>
        <Col lg={12} xl={4} className="footer__nav">
          <ul className="on-right">
            <li>
              <a
                href="https://www.facebook.com/Genealogy-108106037678646"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/genealogybio"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/14503823"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
