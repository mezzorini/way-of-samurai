import React from "react";
import classes from './../Dialogs.module.css';
import {MessagesDataType} from "../../../redux/state";

export function Message(props: MessagesDataType) {
    return (
        <div className={classes.messages}>
            {props.message}
        </div>
    );
}

