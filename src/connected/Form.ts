import { connect } from "react-redux";
import Form from "../components/Form";
import { updateAttendees, updateContact, updateName } from "../store/form/actions";

function mapStateToProps(state: any) {
  return {
    name: state.form.name,
    contact: state.form.contact,
    attendees: state.form.attendees,
    rsvpService: state.form.rsvpService,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onNameChange: (val: string) => dispatch(updateName(val)),
    onAttendeesChange: (val: number) => dispatch(updateAttendees(val)),
    onContactChange: (val: string) => dispatch(updateContact(val)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
