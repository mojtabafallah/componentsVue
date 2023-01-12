import { createRouter, createWebHashHistory, createWebHistory, } from "vue-router";
import Home from '../components/Home.vue';
import PostsList from '../components/PostsList.vue';
import UsersList from '../components/UsersList.vue'
import User from '../components/User.vue'
import UserProfile from '../components/users/UserProfile.vue'
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
    },
    {
        path: '/users',
        name: 'users',
        component: UsersList
    },
    {
        path: '/users/:id',
        name: 'showUser',
        component: User,
        // redirect: { name: 'userProfile' },
        children: [
            {
                path: 'profile',
                name: 'userProfile',
                component: UserProfile
            }   
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass : 'active',
    linkExactActiveClass: 'active-exact'
});

export default router;