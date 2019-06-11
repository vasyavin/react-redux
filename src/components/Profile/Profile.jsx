import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts Posts={ props.ProfilePage.Posts }
                     newPostText = {props.ProfilePage.newPostText}
                     dispatch = {props.dispatch}/>
        </div>
    )
}

export default Profile;