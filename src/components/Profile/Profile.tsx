import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileComponentType = {
    state: ProfilePageType
}

export function Profile(props:ProfileComponentType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.postsData}/>
        </div>
    );
}
