import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import SidebarReducer from "./sidebar-reduser";

let redusers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogReducer,
    Sidebar: SidebarReducer
});

let store = createStore(redusers);

export default store;