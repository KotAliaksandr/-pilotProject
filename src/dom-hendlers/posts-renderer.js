import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import { getPosts,createPost } from '../api/api-handlers.js';

export const renderPosts = () => {
    getPosts()
        .then( posts => {
            const postsCont = document.querySelector('.main-content__posts');
            postsCont.innerHTML = null;   
            
            posts.forEach( item => {
                const post = document.createElement('div');
                const title = document.createElement('h5');
                const content = document.createElement('p');
                const userName = document.createElement('span');
                const postDate = document.createElement('span');

                post.className = 'main-content__posts-post';
                title.className = 'main-content__posts-post-title';
                content.className = 'main-content__posts-post-content';
                userName.className = 'main-content__posts-post-bottom-info';
                postDate.className = 'main-content__posts-post-bottom-info';

                title.innerHTML = item.title;
                content.innerHTML = item.content;
                userName.innerHTML = `${item.name}, `;
                postDate.innerHTML = moment(item.date).format('lll');

                post.append(title, content, userName, postDate);
                postsCont.append(post);
            })
        })   
}

export const postFormHendler = () => {

    const post_form = document.getElementById('post_form');
    const title_input = document.getElementById('title_input');
    const post_content = document.getElementById('post_content');
    const postsContainer = document.querySelector('.main-content__posts');

    const post = {
        userId: uuidv4(),
        name: 'Alex',
        email: 'test@mail.com',
        date: moment().format(),
        title: null,
        content: null,
    }

    post_form.addEventListener('submit', event => {
        event.preventDefault();
        post.title = title_input.value;
        post.content = post_content.value;
        createPost(post)
            .then( () => renderPosts());
        title_input.value = null;
        post_content.value = null;
    });    
};
