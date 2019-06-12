import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action);
    }

    return ( <MyPosts updateNewPostText = {onPostChange}
                      addPost = {addPost}
                      Posts = {state.ProfilePage.Posts}
                      newPostText = { state.ProfilePage.newPostText }/>)
}

export default MyPostsContainer;