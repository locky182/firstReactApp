import React from 'react';
 import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile=(props)=>{





    return(
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.posts}
                     newPostText={props.newPostText}
                     //addPost ={props.addPost}
                     //updateNewPostText={props.updateNewPostText}
                     dispatch={props.dispatch}

                   />

        </div>
    );
}

export default Profile;