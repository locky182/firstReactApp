import React from 'react';
import s from './Profile.module.css';

const Profile=()=>{
    return(
        <div className='content'>
        <div>
            <img src='https://www.firestock.ru/wp-content/uploads/2016/12/1480269282583b1de2854858.55593951-700x469.jpg'/>
        </div>
        <div> ava + description</div>
        <div className={s.item}>My posts</div>
        <div>New posts</div>
        <div>post1</div>
        <div>post2</div>
        </div>
    );
}

export default Profile;