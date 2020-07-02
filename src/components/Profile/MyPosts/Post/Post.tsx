import React from "react";
import classes from './Post.module.css';

type PropsItemType = {
    message: string,
    likeCounter: number,
}

const Post: React.FC<PropsItemType> = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src="https://whatmessenger.ru/s3/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg?b0a749c03fe00fd9b292c90620639415"/>
                {props.message}
                <div>
                    <span>Likes:</span>
                    {props.likeCounter}
                </div>
            </div>
        </div>
    );
}

export default Post