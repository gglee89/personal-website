import {
  MAILCHIMP_ADD_LISTMEMBER_REQUEST,
  MAILCHIMP_ADD_LISTMEMBER_SUCCESS,
  MAILCHIMP_ADD_LISTMEMBER_FAILED,
  MAILER_FAILED,
  MAILER_REQUEST,
  MAILER_SUCCESS,
} from '../actions/marketingActions';

const INITIAL_STATE = {
  loading: false,
};

export const marketingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MAILCHIMP_ADD_LISTMEMBER_REQUEST:
      return { ...state, loading: true };
    case MAILCHIMP_ADD_LISTMEMBER_SUCCESS:
      return { loading: false, ...action.payload };
    case MAILCHIMP_ADD_LISTMEMBER_FAILED:
      return { loading: false, error: action.payload };
    case MAILER_REQUEST:
      return { loading: true };
    case MAILER_SUCCESS:
      return { loading: false, ...action.payload };
    case MAILER_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
