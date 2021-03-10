import axios from 'axios';

const API = axios.create({ baseURL : 'https://deploymern2021.herokuapp.com' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

//Posts
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

//Articles
export const fetchArticles = () => API.get('/articles');
export const createArticle = (articleData) => API.post('/articles', articleData);
export const deleteArticle = (id) => API.delete(`/articles/${id}`);

//Auth
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

//Contact
export const sendContactForm = (formData) => API.post('/contact', formData);


