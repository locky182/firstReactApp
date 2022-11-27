import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div className={s.info}>
            <div className={s.profileImg}>
            <img src="https://bipbap.ru/wp-content/uploads/2017/05/more2.jpg" alt="" />
            </div>

            <div className={s.descriptionBlock}>
            <div> Ava + description </div>
            </div>

        </div>
    );

}
export default ProfileInfo;