import {combineReducers, legacy_createStore as createStore} from 'redux';
import PostsReducer from './PostsReducer';
import DialogsReducer from './DialogsReducer';
import MusicsReducer from './MusicsReducer';
import UsersReducer from './UsersReducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    PostsPage:PostsReducer,
    DialogsPage:DialogsReducer,
    MusicsPage:MusicsReducer,
    UsersPage:UsersReducer,
    auth: authReducer,
});

let store = createStore(reducers);



export default store;