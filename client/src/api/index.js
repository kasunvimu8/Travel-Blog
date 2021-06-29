import Axios from 'axios';

const url = 'https://travel-blog-kv.herokuapp.com/posts';

export const fetchPosts = () => {
    return Axios.get(url);
};

export const createPost = (newPost) => {
    return Axios.post(url, newPost);
}

export const updatePost = (postId, post) => {
    return Axios.patch(`${url}/${postId}`, post);
}

export const deletePost = (postId) => {
    return  Axios.delete(`${url}/${postId}`);
}

export const likePost = (postId) => {
    return  Axios.patch(`${url}/${postId}/likePost`);
}