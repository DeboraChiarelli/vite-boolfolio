import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Portfolio from './views/Portfolio.vue';
import Contact from './views/Contact.vue';
import ProjectDetail from './views/ProjectDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },
        {
            path: '/portfolio/:slug', // Rotta dinamica con parametro :slug
            name: 'projectDetail',
            component: ProjectDetail,
        },
        {
            path: '/contatti',
            name: 'contacts',
            component: Contact,
        },
    ],
});

export { router };