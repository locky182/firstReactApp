import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let posts =[
    {id: 0, message: 'It is my first!!', likesCount: '23' },
    {id: 2, message: 'I like it', likesCount: '0' },
    {id: 3, message: 'I like it', likesCount: '0' },
    {id: 4, message: 'I like it', likesCount: '0' },
    {id: 5, message: 'I like it', likesCount: '0' }


];

let postsElements = posts
    .map(p => <Post messagePost={p.message} likesCount={p.likesCount}/> )




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

                { postsElements }


            </div>


        </div>

    );
}

export default MyPosts;