import * as firebase from "firebase/app";
import "firebase/firestore";
import { timeout } from "q";
import { Store } from "redux";
import { FORM_STATE } from "../components/Form";
import { updateState } from "../store/form/actions";

export interface RSVP {
  name: string;
  contact: string;
  numberOfAttendees: number;
}

export interface RSVPService {
  submitRSVP(rsvp: RSVP): void;
}

export class RSVPServiceFirestore {
  private db: firebase.firestore.Firestore;
  private store: Store;

  constructor(reduxStore: Store) {
    this.store = reduxStore;
    const config = {
      apiKey: "AIzaSyDmvD2Cij9V0evMkbJylQ3BV_y6eh3KysQ",
      authDomain: "tingscoregoh.firebaseapp.com",
      databaseURL: "https://tingscoregoh.firebaseio.com",
      projectId: "tingscoregoh",
      storageBucket: "tingscoregoh.appspot.com",
      messagingSenderId: "181862653498",
    };

    firebase.initializeApp(config);
    this.db = firebase.firestore();

  }
  public submitRSVP({ name, contact, numberOfAttendees }: RSVP) {
    this.store.dispatch(updateState(FORM_STATE.SUBMITTING));
    this.db.collection("rsvps").add({
      name,
      contact,
      numberOfAttendees,
      timestamp: new Date(),
    }).then(() => {
      this.store.dispatch(updateState(FORM_STATE.SUBMITTED));
    });
  }

}
