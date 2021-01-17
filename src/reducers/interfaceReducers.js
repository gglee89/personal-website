import {
  SHOW_MOBILE_NAV,
  SHOW_ALERT_MESSAGE,
  SHOW_MODAL,
} from '../actions/interfaceActions';

const INITIAL_STATE = {
  alertMessage: {
    show: false,
  },
  showMobileNav: false,
  showModal: false,
};

export const interfaceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MOBILE_NAV:
      const newShowMobileNav = !state.showMobileNav;

      // PREVENT SCROLLING ON MOBILE
      if (newShowMobileNav) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }

      return {
        ...state,
        showMobileNav: newShowMobileNav,
      };
    case SHOW_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: {
          ...state.alertMessage,
          ...action.payload,
        },
      };
    case SHOW_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    default:
      return state;
  }
};
