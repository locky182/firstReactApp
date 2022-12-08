import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

//указывается конечная точка props.posts
    let postsElements = props.posts
        .map(p => <Post messagePost={p.message} likesCount={p.likesCount}/> )

    //Мы не имеем право работать напрямую сдом элементами
    //создали ссылку
    let newPostElement = React.createRef();


    //через пропс вызываем функцию описанную на стороне BLL in state.js
    let addPost = ()=>{

        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value='';



    }





    return (
        <div className={s.postsBlock}>
           <h3> My Posts</h3>
            <div>
                <div>
                    {/*ссылка на текстовое поле*/}
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                { postsElements }


            </div>


        </div>

    );
}

export default MyPosts;