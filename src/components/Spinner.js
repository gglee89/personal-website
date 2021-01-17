import React from 'react';
import { Image } from 'react-bootstrap';

// ASSETS
import loaderImage from '../assets/img/loader-image.gif';

const Spinner = ({ overlay, cssBased, withMarginTop }) => {
  return (
    <div className={`spinner overlay`}>
      {cssBased ? (
        <div className="spinner__loader">
          <div className="wave top-wave">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="wave bottom-wave">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          <Image src={loaderImage} alt="Loader Image of DNA Helix" />
          <p>Loading...</p>
        </>
      )}
    </div>
  );
};

Spinner.defaultProps = {
  cssBased: false,
  overlay: true,
  withMarginTop: false,
};

export default Spinner;
