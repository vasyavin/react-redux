import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    /*   let Posts = [
           {id: 1, message: 'Hi, how are you?', likesCount: '0'},
           {id: 2, message: 'It\'s my first post', likesCount: '23'}
       ]
   */
    let PostElements = props.Posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = onPostChangeActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {PostElements}
            </div>
        </div>
    )
}

export default MyPosts;