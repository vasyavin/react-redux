import React from 'react';
import {addSendMassegeCreator, UpdeteNewMassegeBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage
    }
}

let mapDispatchTooProps = (dispatch) => {
    return {
        UpdeteNewMassegeBody: (body) => {
            dispatch(UpdeteNewMassegeBodyCreator(body));
        },
        addSendMassege: () => {
            dispatch(addSendMassegeCreator());
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchTooProps)(Dialogs);

export default DialogsContainer;
