import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS
import Header from '../components/Header';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import Message from '../components/Message';

// ACTIONS
import {
  toggleMobileNav,
  toggleAlertMessage,
} from '../actions/interfaceActions';

/**
 * @render react
 * @name HomeLayout
 * @description Wrapper with Header and Footer and surrounding components
 * @param {Object} props
 */
const HomeLayout = ({ children }) => {
  const [loadingScreen, setLoadingScreen] = useState(true);
  const interfaceDetails = useSelector((state) => state.interface);
  const { showMobileNav, alertMessage } = interfaceDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    // HIDES THE LOADING SPINNER AFTER 1000ms
    const timeoutId = setTimeout(() => setLoadingScreen(false), 1000);
    let alertTimeoutId = null;

    if (alertMessage.show) {
      // HIDES THE TOGGLE ALERT MESSAGE AFTER 5000ms
      alertTimeoutId = setTimeout(() => {
        dispatch(
          toggleAlertMessage({
            show: false,
          })
        );
      }, 5000);
    }

    return () => {
      alertTimeoutId && clearTimeout(alertTimeoutId);
      clearTimeout(timeoutId);
    };
  }, [dispatch, alertMessage]);

  return (
    <>
      <div
        className={`mobile-nav-overlay ${showMobileNav ? 'show' : ''}`}
        onClick={() => dispatch(toggleMobileNav())}
      ></div>
      <Header />
      <main>
        {loadingScreen && <Spinner />}
        {children}
        <div className={`message-container ${alertMessage.show ? 'show' : ''}`}>
          <Message
            show={alertMessage.show}
            variant={alertMessage.variant}
            title={alertMessage.title}
            bodyContent={alertMessage.bodyContent}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
