import React from 'react';
 import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile=()=>{
    return(
        <div>

            <img src="https://bipbap.ru/wp-content/uploads/2017/05/more2.jpg" alt="" />

            <div> Ava + description </div>

            <MyPosts />


        </div>
    );
}

export default Profile;