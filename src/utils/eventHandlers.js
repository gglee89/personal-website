import moment from 'moment';

export const emailOnKeyUpHandler = (event) => {
  const email = event.target.value;

  const expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let validEmail = expression.test(String(email).toLowerCase());
  if (!validEmail) {
    setSignupErrors([...signupErrors, 'email']);
  } else {
    setSignupErrors(signupErrors.filter((error) => error !== 'email'));
  }
};

export const validateEmail = (email) => {
  const expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return expression.test(String(email).toLowerCase());
};

export const validateEmptyString = (str) => {
  return str && str.length > 0;
};

export const calculateTimeLeft = () => {
  const timeTillDate = '2021-02-01';
  const then = moment(timeTillDate);
  const now = moment();
  const difference = moment(then - now);

  return {
    days: then.diff(now, 'days'),
    hours: difference.format('HH'),
    minutes: difference.format('mm'),
    seconds: difference.format('ss'),
  };
};
