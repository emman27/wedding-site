export interface Action {
  type: string;
}

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const UPDATE_ATTENDEES = "UPDATE_ATTENDEES";

export interface UpdateStringAction {
  type: string;
  val: string;
}

export interface UpdateIntAction {
  type: string;
  val: number;
}

export function updateName(val: string): UpdateStringAction {
  return {
    type: UPDATE_NAME,
    val,
  };
}

export function updateContact(val: string): UpdateStringAction {
  return {
    type: UPDATE_CONTACT,
    val,
  };
}

export function updateAttendees(val: number): UpdateIntAction {
  return {
    type: UPDATE_ATTENDEES,
    val,
  };
}
