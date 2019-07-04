import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        Posts: state.ProfilePage.Posts,
        newPostText: state.ProfilePage.newPostText
    }
}

let mapDispatchTooProps = (dispatch) => {
    debugger;
    return {
        updateNewPostText: (text) => {
            debugger;
            let action = onPostChangeActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchTooProps)(MyPosts);

export default MyPostsContainer;