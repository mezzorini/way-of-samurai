import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://c7.hotpng.com/preview/845/302/525/javascript-logo-html-comment-blog-others.jpg"/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src='https://i.pinimg.com/originals/f8/a4/c9/f8a4c90d00ce2e5684c3bf47c4a6ce17.jpg'/>
                </div>
                <div>
                    <img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'/>
                </div>
                <div>
                    my posts
                    <div>
                        new posts
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
