import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({ width, height, text }) => {
  return (
    <div className="spinner-wrapper">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <p>{text}</p>
    </div>
  );
};

Loader.defaultProps = {
  text: 'Loading...',
};

export default Loader;
