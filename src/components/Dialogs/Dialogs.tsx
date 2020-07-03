import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

//Типизируем
type DialogItemType = {
    name: string,
    id: number
}

type MessageType = {
    message: string
}

type dialogsType = {
    id: number,
    name: string
}

type messagesType = {
    id: number,
    message: string
}

function DialogItem(props: DialogItemType) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.activeLink}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

function Message(props: MessageType) {
    return (
        <div className={classes.messages}>
            {props.message}
        </div>
    );

}

export function Dialogs() {

    //Data
    let dialogs: Array<dialogsType> = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Pasha'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Olya'},
        {id: 6, name: 'Viktor'},
        {id: 7, name: 'Kolya'},
        {id: 8, name: 'Alex'},
    ]
    //Data
    let messages: Array<messagesType> = [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'how a u?'},
        {id: 4, message: 'ok'},
        {id: 5, message: 'great!'},
    ]
    //Отрисовка jsx элементов. Сколько значений в данных (Data), столько раз мапим данные и отрисуем их
    let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = messages.map((m) => <Message message={m.message}/> );

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
