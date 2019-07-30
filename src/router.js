import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Category from "./views/Category.vue";
import PlayList from "./views/PlayList.vue";
import MyVideos from "./views/MyVideos.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

let router = new Router({
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "main_category",
            components: {
                header: AppHeader,
                default: Category,
                footer: AppFooter
            },
            meta: {
                guest: true
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                header: AppHeader,
                default: Login
            },
            meta: {
                guest: true
            }
        },
        {
            path: "/register",
            name: "register",
            components: {
                header: AppHeader,
                default: Register
            },
            meta: {
                guest: true
            }
        },
        {
            path: '/playList/:id',
            name: 'play_list',
            components: {
                header: AppHeader,
                default: PlayList,
                footer: AppFooter
            },
            meta: {
                guest: true
            }
        },
        {
            path: '/my_videos/:id/:phone',
            name: 'my_videos',
            components: {
                header: AppHeader,
                default: MyVideos,
                footer: AppFooter
            },
            meta: {
                requiresAuth: true
            }
        },
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
});
/**
 * routes middleware
 */
router.beforeEach((to, from, next) => {
    // close menu mobile
    $('.collapse-close button').trigger('click');

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('auth_id') == null) {
            next({name: 'login', params: {nextUrl: to.fullPath}})
        } else {
            next()
        }
    } else {
        next()
    }
});

export default router;