import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let dialogs =
    [{id: 0, name: 'Alex'},
        {id: 1, name: 'Petr'},
        {id: 2, name: 'Micha'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Masha'}
    ];

let messages =
    [{id: 0, message:'Hi'},
        {id: 1, message: 'How are you'},
        {id: 2, message: 'How can i help you'},
        {id: 3, message: 'I dont now'},
        {id: 4, message: 'where are you from?'}
    ];



const DialogItem = (props) => {
    let path = "/dialogs/ " + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={s.dialog}>{props.name}</NavLink>
        </div>
    );
}

const Messages = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

//Новые массивы, можно с ретурном
let dialogsItems = dialogs.map(d => {return (<DialogItem name={d.name} id={d.id} />)})
console.log(dialogsItems);
//можно без ретурно сокращенно
let messagesItem = messages.map(m => <Messages message={m.message} />)





const Dialogs = (props) => {
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