import { FORM_STATE } from "../../components/Form";
import {
  Action, SET_RSVP_SERVICE, SetRSVPServiceAction,
  UPDATE_ATTENDEES, UPDATE_CONTACT, UPDATE_NAME,
  UPDATE_STATE, UpdateIntAction, UpdateStateAction, UpdateStringAction,
} from "./actions";

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
    case UPDATE_STATE:
      return Object.assign({}, state, { state: (action as UpdateStateAction).state });
    default: return state;
  }
}

export default form;
