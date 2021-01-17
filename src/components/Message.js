import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ show, variant, title, bodyContent }) => {
  return (
    <Alert show={show} variant={variant}>
      <span>
        <i
          className={`fas ${variant === 'success' ? 'fa-check' : 'fa-times'}`}
        ></i>
      </span>
      <div className="body-content">
        <Alert.Heading>{title}</Alert.Heading>
        <p>{bodyContent}</p>
      </div>
    </Alert>
  );
};

Message.defaultProps = {
  show: false,
  variant: 'danger',
  title: 'Congrats! You are in list.',
  bodyContent: `We will inform you as soon as we finish.`,
};

export default Message;
