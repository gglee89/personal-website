import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Form } from 'react-bootstrap';

// LAYOUT
import SectionLayout from '../layout/SectionLayout';

// ACTIONS
import { sendEmail } from '../actions/marketingActions';
import { toggleAlertMessage } from '../actions/interfaceActions';

// UTILS
import { validateEmail } from '../utils/eventHandlers';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      dispatch(
        toggleAlertMessage({
          show: true,
          variant: 'danger',
          title: 'Error on 1st Field',
          bodyContent: 'Name too short or not specified',
        })
      );
    } else if (!email || !validateEmail(email)) {
      dispatch(
        toggleAlertMessage({
          show: true,
          variant: 'danger',
          title: 'Error on 2nd Field',
          bodyContent: 'Email is invalid or not specified',
        })
      );
    } else if (!message) {
      dispatch(
        toggleAlertMessage({
          show: true,
          variant: 'danger',
          title: 'Error on 3rd Field',
          bodyContent: 'Message too short or not specified',
        })
      );
    } else {
      dispatch(sendEmail({ name, email, message }));

      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const marketingDetails = useSelector((state) => state.marketing);
  const { loading } = marketingDetails;

  return (
    <SectionLayout id="contact">
      <Container className="section__wrapper">
        <div className="main-content align-center loaded">
          <span className="section-name animate-element spirit-fade-in-elements">
            Contact Us
          </span>
          <h2 className="animate-element spirit-fade-in-elements">
            Get in touch
          </h2>
          <span className="separator animate-element spirit-fade-in-elements"></span>
          <div className="row animate-element spirit-fade-in-elements">
            <div className="col-12 col-lg-6 animate-element spirit-fade-in-elements">
              <div className="row animate-element spirit-fade-in-elements">
                <div className="col-12 col-sm-6 animate-element spirit-fade-in-elements">
                  <h4 className="animate-element spirit-fade-in-elements">
                    Seoul
                  </h4>
                  <p className="contact-address animate-element spirit-fade-in-elements">
                    Seoul National Univ. Campus Town
                    <br className="animate-element spirit-fade-in-elements" />
                    535 Bongchun-ro, Gwanak-gu, Seoul
                    <br className="animate-element spirit-fade-in-elements" />
                    <a href="tel:+82-031-601-4001" className="link_in_text">
                      (+82) 031-601-4001
                    </a>
                  </p>
                </div>
                <div className="col-12 col-sm-6 animate-element spirit-fade-in-elements">
                  <h4 className="animate-element spirit-fade-in-elements">
                    Torrance
                  </h4>
                  <p className="contact-address animate-element spirit-fade-in-elements">
                    1124 W. Carson St.
                    <br className="animate-element spirit-fade-in-elements" />
                    Torrance, CA 90502
                    <br className="animate-element spirit-fade-in-elements" />
                    <a href="tel:+1-858-888-1850" className="link_in_text">
                      (+1) 858-888-1850
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1 animate-element spirit-fade-in-elements">
              <Form
                name="contact-form"
                method="POST"
                autoComplete="on"
                className="contact-form animate-element spirit-fade-in-elements"
                onSubmit={handleSubmit}
              >
                <div className="row animate-element spirit-fade-in-elements">
                  <div className="col-12 col-sm-6 col-lg-12 animate-element spirit-fade-in-elements">
                    <Form.Group className="animate-element spirit-fade-in-elements">
                      <Form.Control
                        type="text"
                        className="form form-control animate-element spirit-fade-in-elements"
                        placeholder="Name*"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-12 animate-element spirit-fade-in-elements">
                    <Form.Group className="animate-element spirit-fade-in-elements">
                      <Form.Control
                        type="text"
                        className="form form-control animate-element spirit-fade-in-elements"
                        placeholder="Email Address*"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-12 animate-element spirit-fade-in-elements">
                    <Form.Group className="animate-element spirit-fade-in-elements">
                      <Form.Control
                        as="textarea"
                        className="form textarea form-control animate-element spirit-fade-in-elements"
                        placeholder="Your message here*... 20 characters Min."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        row={5}
                      />
                    </Form.Group>
                    <span className="sub-text animate-element spirit-fade-in-elements">
                      * Required fields
                    </span>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="btn btn--light btn--colored submit animate-element spirit-fade-in-elements"
                  disabled={loading}
                >
                  <span>{`${loading ? 'Sending...' : 'Send my Message'}`}</span>
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </SectionLayout>
  );
};

export default Contact;
