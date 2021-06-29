import * as api from '../api';
import {CREATE, DELETE, UPDATE, FETCH_ALL, LIKE} from '../constants/actionTypes';
// Just like with a normal action, we first need to handle a user event in the application, 
// such as a click on a button. Then, we call dispatch(), and pass in something, whether it
// be a plain action object, a function, or some other value that a middleware can look for.
// Once that dispatched value reaches a middleware, it can make an async call, and then dispatch
// a real action object when the async call completes.

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log('Error message : '+ error);
    }
}

export const createPost = (posts) => async (dispatch) => {
    try {
        const {data} = await api.createPost(posts);
        
        dispatch({ type: CREATE, payload : data});
    } catch (error) {
        console.log('Error message : '+ error);
        
    }
}

export const updatePost = (postId, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(postId, post);
        
        dispatch({type : UPDATE, payload : data});
    } catch (error) {
        console.log('Error message : '+ error);
    }
}

export const deletePost = (postId) => async (dispatch) => {
    try {
        await api.deletePost(postId);
        dispatch({type : DELETE, payload: postId})
    } catch (error) {
        console.log('Error message : '+ error);
    }
}

export const likePost = (postId) => async (dispatch) => {
    try {
        const {data} = await api.likePost(postId);
        dispatch({type : LIKE, payload : data});
    } catch (error) {
        console.log('Error message : '+ error);
    }
}