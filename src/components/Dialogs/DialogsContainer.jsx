import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import Logo from "./Logo/Logo"
import {addSendMassegeCreator, UpdeteNewMassegeBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().DialogsPage;;

    let newDialogElement = React.createRef();

    let addDialog = () => {
        props.store.dispatch(addSendMassegeCreator());
    }
    let newMassageBody = state.newMassageBody;

    let onNewMessageChange = (body) => {
        props.store.dispatch(UpdeteNewMassegeBodyCreator(body));
    }

    return ( <Dialogs UpdeteNewMassegeBody={onNewMessageChange}
                      addSendMassege={addDialog}
                      DialogsPage={state}/>  )
}

export default DialogsContainer;
