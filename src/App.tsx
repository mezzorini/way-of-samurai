import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Route, BrowserRouter} from "react-router-dom";
import {News} from "./components/News/News";
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { Profile } from './components/Profile/Profile';
import {RootStateType} from "./redux/state";

type AppComponentType = {
    state: RootStateType
}

function App(props: AppComponentType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () =>  <Dialogs state={props.state.messagesPage}
                    />
                    }/>
                    <Route path='/profile' render={ () =>  <Profile
                        state = {props.state.profilePage}
                    />  }/>
                    <Route path='/news' render={ () =>  <News/>  }/>
                    <Route path='/music' render={ () =>  <Music/>  }/>
                    <Route path='/settings' render={ () =>  <Settings/>  }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
