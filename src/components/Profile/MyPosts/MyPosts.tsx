import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea>Add text</textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default MyPosts