import Axios from 'axios';

// const url = 'https://travel-blog-kv.herokuapp.com/posts';
// const url = 'http://localhost:5000/posts';
const API = Axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('traveller-profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('traveller-profile')).token}`
    }

    return req;
});

export const fetchPosts = () => {
    return API.get('/posts');
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