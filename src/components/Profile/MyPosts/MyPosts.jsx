import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts=()=>{
    
    return(
       <div>
        My Posts
        <div>
            <textarea/>
            <button>Add post</button>
        </div>
        <div className={s.posts}>

        <Post messagePost = 'Hi, how are you?' likesCount = '0' />
        <Post messagePost = 'This is my first comment!!' likesCount = '23' />
       


        </div>

      
        
       </div>
        
    );
}

export default MyPosts ;