import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import Logo from "./Logo/Logo"
import {addSendMassegeCreator, UpdeteNewMassegeBodyCreator} from "../../redux/dialogs-reducer";





const Dialogs = (props) => {
    debugger

    let state = props.store.getState().DialogsPage;

    let DialogsElements = state.dialogs
        .map( d => <DialogsItem name={d.name} id={d.id} /> );

    let massagesElements = state.Massages
        .map( m => <Message massage={m.massage} id={m.id}/>)
    let LogoDialogs = state.imageProfile
        .map( n => <Logo img={n.img}/>)

    let newDialogElement = React.createRef();

    let addDialog = () => {
        props.store.dispatch(addSendMassegeCreator());
    }
//localhost lesson 43
    let newMassageBody = state.newMassageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(UpdeteNewMassegeBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
           {/* <div className={s.massages}>
                {LogoDialogs}
            </div>*/}
            <div className={s.DialogsItem}>
                { DialogsElements }
            </div>
            <div className={s.massages}>
                <div>{ massagesElements }</div>
                <div>
                    <div><textarea value={ newMassageBody }
                                   onChange={ onNewMessageChange }
                                   placeholder='Enter you message'  ref={newDialogElement}></textarea></div>
                    <div><button onClick={ addDialog }>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
