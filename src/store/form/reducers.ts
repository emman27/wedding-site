import { Action, UPDATE_ATTENDEES, UPDATE_CONTACT, UPDATE_NAME, UpdateIntAction, UpdateStringAction } from "./actions";

const DEFAULT_STATE = {
  name: "",
  contact: "",
  attendees: "",
};

function form(state = DEFAULT_STATE, action: Action) {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: (action as UpdateStringAction).val });
    case UPDATE_CONTACT:
      return Object.assign({}, state, { contact: (action as UpdateStringAction).val });
    case UPDATE_ATTENDEES:
      return Object.assign({}, state, { attendees: (action as UpdateIntAction).val });
    default: return state;
  }
}

export default form;
