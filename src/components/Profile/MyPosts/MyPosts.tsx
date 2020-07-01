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
            <Post
                message="Hi, gow are u?"
                likeCounter={3}/>
            <Post
                message="It's my first post"
                likeCounter={6}/>
        </div>
    );
}

export default MyPosts