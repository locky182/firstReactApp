import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Messages from './Message/Messages';







 const Dialogs = (props) => {





//Новые массивы, можно с ретурном
    let dialogsItems = props.dialogs.map(d => {return (<DialogItem name={d.name} id={d.id} />)})

//можно без ретурно сокращенно
    let messagesItem =props.messages.map(m => <Messages message={m.message} />)





    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                { dialogsItems }
            </div>

            <div className={s.messages}>
                { messagesItem }
            </div>


        </div>

    );

}

export default Dialogs;