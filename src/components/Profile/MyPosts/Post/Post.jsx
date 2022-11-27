import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (


        <div className={s.item}>
            <img src="https://cspromogame.ru//storage/upload_images/avatars/2038.jpg" alt=""/>
            {props.messagePost}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>


    );
}

export default Post;