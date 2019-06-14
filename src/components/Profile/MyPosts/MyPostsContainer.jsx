import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    /*return (<StoreContext.Consumer>{ (store) => {

            let state = props.store.getState();
            let addPost = () => {
            props.store.dispatch(addPostActionCreator());
        }

            let onPostChange = (text) => {
            let action = onPostChangeActionCreator(text);
            props.store.dispatch(action);
        }

            return (<MyPosts updateNewPostText={onPostChange}
            addPost={addPost}
            Posts={state.ProfilePage.Posts}
            newPostText={state.ProfilePage.newPostText}/>)
        }
            }
        </StoreContext.Consumer>
    )*/
    return <StoreContext.Consumer>

        { store => {
            let state =store.getState();
            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }
            let onPostChange = (text) => {
                let action = onPostChangeActionCreator(text);
                store.dispatch(action);
            }
            return (<MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             Posts={state.ProfilePage.Posts}
                             newPostText={state.ProfilePage.newPostText}/>)
        }
        }
        }
    </StoreContext.Consumer>

}
export default MyPostsContainer;