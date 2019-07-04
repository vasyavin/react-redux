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
        addSendMassege: () => {
            dispatch(addSendMassegeCreator());
        },
        UpdeteNewMassegeBody: (body) => {
            dispatch(UpdeteNewMassegeBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchTooProps)(Dialogs);

export default DialogsContainer;
