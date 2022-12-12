import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from "./redux/state";

// нужно вынести из метода что бы текстэриа работал
const root = ReactDOM.createRoot(document.getElementById('root'));
export let  rerenderEntireTree = (state)=>{
    root.render(
        <React.StrictMode>
            <App   posts={state.profilePage.posts}
                   dialogs={state.dialogsPage.dialogs}
                   messages={state.dialogsPage.messages}
                   newPostText={state.profilePage.newPostText}
                   addPost={addPost}
                   updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>
    );


    reportWebVitals();

};


