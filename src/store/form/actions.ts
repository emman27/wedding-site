import { RSVPService } from "../../services/rsvp";

export interface Action {
  type: string;
}

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const UPDATE_ATTENDEES = "UPDATE_ATTENDEES";
export const SET_RSVP_SERVICE = "SET_RSVP_SERVICE";

export interface UpdateStringAction {
  type: string;
  val: string;
}

export interface UpdateIntAction {
  type: string;
  val: number;
}

export interface SetRSVPServiceAction {
  type: string;
  service: RSVPService;
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

export function setRSVPService(rsvpService: RSVPService): SetRSVPServiceAction {
  return {
    type: SET_RSVP_SERVICE,
    service: rsvpService,
  };
}
