import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let dialogsData =
    [{id: 0, name: 'Alex'},
        {id: 1, name: 'Petr'},
        {id: 2, name: 'Micha'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Masha'}
    ];
let messagesData =
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




const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />


            </div>
            <div className={s.messages}>
                <Messages message={messagesData[0].message}/>
                <Messages message={messagesData[1].message} />
                <Messages message={messagesData[2].message} />
                <Messages message={messagesData[3].message} />
                <Messages message={messagesData[4].message} />

            </div>


        </div>

    );

}

export default Dialogs;