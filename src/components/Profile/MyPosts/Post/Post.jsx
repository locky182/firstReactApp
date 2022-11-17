import React from 'react';
import s from './Post.module.css';


const Post=(props)=>{
    return(
       
        
        <div className={s.item}>
        <img src="https://cspromogame.ru//storage/upload_images/avatars/2038.jpg" alt="" />
         {props.message}

        <div>
            <span>like</span>
        </div>
        </div>
      
        
    );
}

export default Post ;