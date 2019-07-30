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

export default new Router({
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "main_category",
            components: {
                header: AppHeader,
                default: Category,
                footer: AppFooter
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                header: AppHeader,
                default: Login
            }
        },
        {
            path: "/register",
            name: "register",
            components: {
                header: AppHeader,
                default: Register
            }
        },
        {
            path: '/playList/:id',
            name: 'play_list',
            components: {
                header: AppHeader,
                default: PlayList,
                footer: AppFooter
            }
        },
        {
            path: '/my_videos/:id/:phone',
            name: 'my_videos',
            components: {
                header: AppHeader,
                default: MyVideos,
                footer: AppFooter
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
