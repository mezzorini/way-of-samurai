import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

type postsDataType = {
    id: number,
    message: string,
    likeCounter: number
}

export function MyPosts() {

    //data
    let posts: Array<postsDataType> = [
        {id: 1, message: 'Hi!!!', likeCounter: 12 },
        {id: 2, message: "It's my first post!", likeCounter: 10 },
        {id: 3, message: "How a u dudes?", likeCounter: 7 }
    ]

    let postsElements = posts.map((p) => <Post message={p.message} likeCounter={p.likeCounter}/>);

    return (
        <div className={classes.PostsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea>Add text</textarea>
                </div>
                <div>
                    <button className={classes.ButtonStyle}>Add post</button>
                    <button className={classes.ButtonStyle}>Remove</button>
                </div>
            </div>
            <div className={classes.PostsStyle}>
                {postsElements}
            </div>
        </div>
    );
}
