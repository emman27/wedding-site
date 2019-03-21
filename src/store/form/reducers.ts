import {
  Action, SET_RSVP_SERVICE, SetRSVPServiceAction,
  UPDATE_ATTENDEES, UPDATE_CONTACT, UPDATE_NAME,
  UpdateIntAction, UpdateStringAction,
} from "./actions";

enum FORM_STATE {
  READY,
  SUBMITTING,
  SUBMITTED,
}

const DEFAULT_STATE = {
  name: "",
  contact: "",
  attendees: "",
  state: FORM_STATE.READY,
  rsvpService: null,
};

function form(state = DEFAULT_STATE, action: Action) {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: (action as UpdateStringAction).val });
    case UPDATE_CONTACT:
      return Object.assign({}, state, { contact: (action as UpdateStringAction).val });
    case UPDATE_ATTENDEES:
      return Object.assign({}, state, { attendees: (action as UpdateIntAction).val });
    case SET_RSVP_SERVICE:
      return Object.assign({}, state, { rsvpService: (action as SetRSVPServiceAction).service });
    default: return state;
  }
}

export default form;
