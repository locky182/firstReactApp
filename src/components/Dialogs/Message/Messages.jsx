import s from "./../Dialogs.module.css";
import React from 'react';


const Messages = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

export default Messages;
