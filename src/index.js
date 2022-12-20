import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";

// нужно вынести из метода что бы текстэриа работал
const root = ReactDOM.createRoot(document.getElementById('root'));
 let  rerenderEntireTree = ()=>{
    root.render(
        <React.StrictMode>
            <App   posts={store.getState().profilePage.posts}
                   dialogs={store.getState().dialogsPage.dialogs}
                   messages={store.getState().dialogsPage.messages}
                   newPostText={store.getState().profilePage.newPostText}

                   //Новый метод, который заменяет все методы
                   dispatch={store.dispatch.bind(store)}
                   //updateNewPostText={store.updateNewPostText.bind(store)}


            />
        </React.StrictMode>
    );


    reportWebVitals();

};


 store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());


