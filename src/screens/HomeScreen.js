import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CookieConsent from 'react-cookie-consent';

// LAYOUT
import HomeLayout from '../layout/HomeLayout';

// COMPONENTS
import Hero from '../components/Hero';
import Contact from '../components/Contact';

// ACTIONS
import { toggleAlertMessage, toggleModal } from '../actions/interfaceActions';
import { addListMember } from '../actions/marketingActions';

// UTILS
import { validateEmail } from '../utils/eventHandlers';

// ASSETS
import logoDefaultPromo from '../assets/img/logo.webp';

const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const interfaceDetails = useSelector((state) => state.interface);
  const { showModal } = interfaceDetails;
  const marketingDetails = useSelector((state) => state.marketing);

  const handleModalSubmit = (e) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      dispatch(
        toggleAlertMessage({
          show: true,
          variant: 'danger',
          title: 'E-mail address is required',
          bodyContent: 'Please check it and try it again',
        })
      );
    } else {
      dispatch(addListMember({ email }));

      setEmail('');
    }
  };

  useEffect(() => {
    const { error, message } = marketingDetails;

    if (error) {
      dispatch(
        toggleAlertMessage({
          show: true,
          variant: 'danger',
          title: error.split('.') ? error.split('.')[1] : error,
          bodyContent: 'Failed to subscribe email.',
        })
      );
    }

    if (message) {
      dispatch(
        toggleAlertMessage({
          show: true,
          variant: 'success',
          title: message,
          bodyContent: 'Hear from us soon.',
        })
      );
    }
  }, [dispatch, marketingDetails]);

  return (
    <>
      <Helmet>
        <title>Genealogy Care</title>
        <meta
          name="description"
          content="Know your DNA baseline. Saving Lives through Technology."
        />
        <meta property="og:url" content="https://genealogy.care" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Genealogy Care - Saving Lives through Technology"
        />
        <meta
          property="og:description"
          content="Know your DNA baseline. Saving Lives through Technology."
        />
        <meta property="og:image" content={logoDefaultPromo} />
        <meta
          name="keywords"
          content="dna, genealogy, hla, hla imputation, gene, disease"
        />
      </Helmet>
      <HomeLayout>
        <Hero />
        <Contact />
        <CookieConsent
          location="bottom"
          buttonText="Got it!"
          cookieName="genealogy-cookies"
          contentClasses="CookieConsent__content"
          buttonClasses="CookieConsent__button"
          expires={150}
        >
          This website uses cookies to ensure you get the best experience on our
          website.
        </CookieConsent>
      </HomeLayout>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={showModal}
        centered
      >
        <div className="modal-inner">
          <Modal.Header
            onClick={() => dispatch(toggleModal())}
            closeButton
          ></Modal.Header>
          <Modal.Body>
            <h3>You like taking the lead of line?</h3>
            <p>
              Being the first to know always feels great... Signing up to our
              newsletter gives you{' '}
              <strong>exclusive access to our Grand Opening!</strong>
            </p>
            <Form onSubmit={handleModalSubmit} className="contact-form">
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Click here to type your email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-name="Email Address"
                  autoComplete="email"
                ></Form.Control>
              </Form.Group>
              <Button
                type="submit"
                className="btn btn--light btn--colored submit"
              >
                <span>Get Notified</span>
              </Button>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default HomeScreen;
