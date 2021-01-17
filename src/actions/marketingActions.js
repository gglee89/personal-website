import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

export const MAILCHIMP_ADD_LISTMEMBER_REQUEST =
  'marketing/MAILCHIMP_ADD_LISTMEMBER_REQUEST';
export const MAILCHIMP_ADD_LISTMEMBER_SUCCESS =
  'marketing/MAILCHIMP_ADD_LISTMEMBER_SUCCESS';
export const MAILCHIMP_ADD_LISTMEMBER_FAILED =
  'marketing/MAILCHIMP_ADD_LISTMEMBER_FAILED';

export const MAILER_REQUEST = 'marketing/MAILER_REQUEST';
export const MAILER_SUCCESS = 'marketing/MAILER_SUCCESS';
export const MAILER_FAILED = 'marketing/MAILER_FAILED';

export const addListMember = (formProps) => async (dispatch) => {
  try {
    dispatch({ type: MAILCHIMP_ADD_LISTMEMBER_REQUEST });

    const { data } = await axios.post(
      `${process.env.API_BASE_URL}/marketing/addListMember`,
      formProps
    );

    dispatch({ type: MAILCHIMP_ADD_LISTMEMBER_SUCCESS, payload: data });
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      dispatch({
        type: MAILCHIMP_ADD_LISTMEMBER_FAILED,
        payload: error.response.data.message
          ? error.response.data.message
          : 'Failed to subscribe to newsletter',
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      dispatch({
        type: MAILCHIMP_ADD_LISTMEMBER_FAILED,
        payload: error.message
          ? error.message
          : 'Failed to subscribe to newsletter',
      });
    }
  }
};

export const sendEmail = (formProps) => async (dispatch) => {
  try {
    dispatch({ type: MAILER_REQUEST });

    const { data } = await axios.post(
      `${process.env.API_BASE_URL}/mailer/sendEmail`,
      formProps
    );

    dispatch({ type: MAILER_SUCCESS, payload: data });
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      dispatch({
        type: MAILER_FAILED,
        payload: error.response.data.message
          ? error.response.data.message
          : 'Failed to subscribe to newsletter',
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      dispatch({
        type: MAILER_FAILED,
        payload: error.message
          ? error.message
          : 'Failed to subscribe to newsletter',
      });
    }
  }
};
