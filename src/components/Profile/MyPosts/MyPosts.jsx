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

        <Post messagePost = 'Hi, how are you?' />
        <Post messagePost = 'This is my first comment!!' />
       


        </div>

      
        
       </div>
        
    );
}

export default MyPosts ;