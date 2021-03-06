import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../../actions/modal_actions";

const AddFriends = ({ openModal }) => {
  const sessionLinks = () => (
    <a className="addfriends" onClick={() => openModal("Add")}>
      +add
    </a>
  );

  return sessionLinks();
};

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriends);
