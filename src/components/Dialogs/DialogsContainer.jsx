import React from 'react';
import {addSendMassegeCreator, UpdeteNewMassegeBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Redirect} from "react-router-dom";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage
    }
}

let mapDispatchTooProps = (dispatch) => {
    return {
        addSendMassege: () => {
            dispatch(addSendMassegeCreator());
        },
        UpdeteNewMassegeBody: (body) => {
            dispatch(UpdeteNewMassegeBodyCreator(body));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchTooProps),
    withAuthRedirect
)(Dialogs);
