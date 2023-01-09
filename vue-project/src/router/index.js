import  {createRouter, createWebHashHistory, createWebHistory,  } from "vue-router";
import Home from '../components/Home.vue';
import PostsList from '../components/PostsList.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/posts',
        name: 'posts',
        component: PostsList
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;