import Axios from 'axios';

// const url = 'https://travel-blog-kv.herokuapp.com/posts';
const API = Axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('traveller-profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('traveller-profile')).token}`
    }

    return req;
});

export const fetchPosts = (page) => {
    return API.get(`/posts?page=${page}`);
};

export const createPost = (newPost) => {
    return API.post('/posts', newPost);
}

export const updatePost = (postId, post) => {
    return API.patch(`/posts/${postId}`, post);
}

export const deletePost = (postId) => {
    return  API.delete(`/posts/${postId}`);
}

export const likePost = (postId) => {
    return  API.patch(`/posts/${postId}/likePost`);
}

export const signIn = (formData) => {
    return API.post('/users/signIn', formData);
}

export const signUp = (formData) => {
    return API.post('/users/signUp', formData);
}

export const fetchPostsBySearch = (searchQuery) => {
    return API.get(`/posts/search?search=${searchQuery.search || 'none'}&tags=${searchQuery.tags || 'none'}`);
}

export const fetchPostById = (id) => {
    return API.get(`/posts/${id}`);
}

export const commentPost = (comment, postId) => {
    return  API.post(`/posts/${postId}/commentPost`, {comment});
}