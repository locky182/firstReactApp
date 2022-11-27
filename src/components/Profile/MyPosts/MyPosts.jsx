import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postData =[
    {id: 0, message: 'It is my first!!', likesCount: '23' },
    {id: 1, message: 'I like it', likesCount: '0' }

];


const MyPosts = () => {

    return (
        <div className={s.postsBlock}>
           <h3> My Posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                <Post messagePost={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post messagePost={postData[1].message} likesCount={postData[1].likesCount}/>


            </div>


        </div>

    );
}

export default MyPosts;