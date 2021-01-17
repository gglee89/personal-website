import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Image, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-scroll';

// ASSETS
import logo from '../assets/img/logo.webp';

// ACTIONS
import { toggleMobileNav, toggleModal } from '../actions/interfaceActions';

const Header = () => {
  const dispatch = useDispatch();

  const handleMobileMenuIconClick = () => {
    dispatch(toggleMobileNav());
  };

  const handleNotifyMe = () => {
    handleMobileMenuIconClick();
    dispatch(toggleModal());
  };

  const interfaceDetails = useSelector((state) => state.interface);
  const { showMobileNav } = interfaceDetails;

  return (
    <header>
      <Navbar
        collapseOnSelect
        bg="lightark"
        variant="light"
        expand="lg"
        fixed="top"
      >
        <Row className={`navbar__row navbar__bg`}>
          <div className="filler"></div>
          <LinkContainer to="/">
            <Navbar.Brand className="d-flex align-items-center justify-content-center">
              <Image src={logo} />
            </Navbar.Brand>
          </LinkContainer>
          <div
            className={`mobile-menu__icon ${showMobileNav ? 'show' : ''}`}
            onClick={() => handleMobileMenuIconClick()}
          >
            <span className="custom-menu"></span>
          </div>
        </Row>
      </Navbar>
      <div className={`mobile-menu vertical ${showMobileNav ? 'show' : ''}`}>
        <div className="mobile-menu__wrapper">
          <Link
            className="mobile-menu__item"
            onClick={() => handleMobileMenuIconClick()}
            spy={true}
            smooth={true}
            duration={500}
            to="section0"
          >
            Home
          </Link>
          <Link
            className="mobile-menu__item"
            onClick={() => handleMobileMenuIconClick()}
            spy={true}
            smooth={true}
            duration={500}
            to="contact"
          >
            Contact Us
          </Link>
          <div className="mobile-menu__item" onClick={() => handleNotifyMe()}>
            Notify Me
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
