import { combineReducers } from "redux";
import posts from './posts';
import selectedPost from './selectedPost';

export default combineReducers({
    posts,
    selectedPost,
});
