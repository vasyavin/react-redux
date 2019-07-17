import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import SidebarReducer from "./sidebar-reduser";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let redusers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogReducer,
    Sidebar: SidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(redusers);

window.store = store;

export default store;