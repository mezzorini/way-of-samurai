import React from "react";
import classes from './Dialogs.module.css';

export function Dialogs () {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.activeLink}>
                    Sasha
                </div>
                <div className={classes.dialog}>
                    Pasha
                </div>
                <div className={classes.dialog}>
                    Dima
                </div>
                <div className={classes.dialog}>
                    Sveta
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Yo</div>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How a u?</div>
            </div>
        </div>
    );
}
