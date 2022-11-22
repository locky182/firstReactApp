import React from "react";
 import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={ s.dialog }>
                    <NavLink to="/dialogs/1" className={ ({isActive})=>`${isActive ? s.active : ''}` }>Lesha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Masha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Dron</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Dimitch</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Petr</NavLink>
                </div>



            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Hi, what your name?</div>
            </div>


        </div>

    );

}

export default Dialogs;