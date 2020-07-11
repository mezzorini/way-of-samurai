import React from "react";
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import {MessagesPageType} from "../../redux/state";

type DialogsComponentType = {
    state: MessagesPageType
}

export function Dialogs(props: DialogsComponentType) {

    let dialogsElements = props.state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = props.state.messagesData.map((m ) => <Message message={m.message} id={m.id}/> );

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div>
                { messagesElements }
            </div>
        </div>
    );
}
