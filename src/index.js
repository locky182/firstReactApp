import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Messages from "./components/Dialogs/Message/Messages";
import Post from "./components/Profile/MyPosts/Post/Post";

let posts =
    [{id: 0, message: 'It is my first!!', likesCount: '23' },
    {id: 2, message: 'I like it', likesCount: '0' },
    {id: 3, message: 'I like it', likesCount: '0' },
    {id: 4, message: 'I like it', likesCount: '0' },
    {id: 5, message: 'I like it', likesCount: '0' }
];

let dialogs =
    [{id: 0, name: 'Alex'},
        {id: 1, name: 'Petr'},
        {id: 2, name: 'Micha'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Masha'}
    ];

let messages =
    [{id: 0, message:'Hi'},
        {id: 1, message: 'How are you'},
        {id: 2, message: 'How can i help you'},
        {id: 3, message: 'I dont now'},
        {id: 4, message: 'where are you from?'}
    ];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
