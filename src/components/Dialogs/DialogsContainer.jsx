import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import Logo from "./Logo/Logo"
import {addSendMassegeCreator, UpdeteNewMassegeBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>

        { store => {
            let state = store.getState().DialogsPage;;

            let newDialogElement = React.createRef();

            let addDialog = () => {
                store.dispatch(addSendMassegeCreator());
            }
            let newMassageBody = state.newMassageBody;

            let onNewMessageChange = (body) => {
                store.dispatch(UpdeteNewMassegeBodyCreator(body));
            }
        return ( <Dialogs UpdeteNewMassegeBody={onNewMessageChange}
                      addSendMassege={addDialog}
                      DialogsPage={state}/>  )
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;
