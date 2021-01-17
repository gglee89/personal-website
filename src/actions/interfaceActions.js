export const SHOW_MOBILE_NAV = 'interface/SHOW_MOBILE_NAV';
export const SHOW_ALERT_MESSAGE = 'interface/SHOW_ALERT_MESSAGE';
export const SHOW_MODAL = 'interface/SHOW_MODAL';

export const toggleMobileNav = () => {
  return {
    type: SHOW_MOBILE_NAV,
  };
};

/**
 * @desc Alert Message for Overall Webpage
 * @param {Object} alertParams
 */
export const toggleAlertMessage = (alertParams) => {
  return {
    type: SHOW_ALERT_MESSAGE,
    payload: alertParams,
  };
};

/**
 * @desc Toggle the Overall page modal
 * @param {}
 */
export const toggleModal = () => {
  return {
    type: SHOW_MODAL,
  };
};
