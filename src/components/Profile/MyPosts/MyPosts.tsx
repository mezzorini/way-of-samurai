import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/state";

type MyPostsComponentType = {
    posts: Array<PostsDataType>
}

export function MyPosts(props: MyPostsComponentType) {

    let postsElements = props.posts.map((p: PostsDataType) => <Post id={p.id} message={p.message} likeCounter={p.likeCounter}/>);

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
