import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {updateNewPostText} from "./redux/state";


function App(props) {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />


                <div className='app-wrapper-content'>
                    <Routes>
                        //локальный state не относится к базе
                        //указывется конечная точка props.posts
                        <Route path='/profile' element={<Profile posts = {props.posts}
                                                                 addPost = {props.addPost}
                                                                 newPostText={props.newPostText}
                                                                 updateNewPostText={props.updateNewPostText}/>}/>
                        <Route  path='dialogs/*' element={<Dialogs dialogs = {props.dialogs}
                                                                   messages = {props.messages}
                                                                   />}/>


                    </Routes>


                </div>


            </div>

        </BrowserRouter>
    );
}

export default App;
