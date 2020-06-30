import React from "react";
import classes from './Post.module.css';


const Post = () => {
    return (
        <div>
            <div className={classes.item}>
                <img
                    src="https://whatmessenger.ru/s3/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg?b0a749c03fe00fd9b292c90620639415"/>
                post 1
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>
    );
}

export default Post