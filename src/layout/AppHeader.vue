<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/white.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand text-right">
                    <a href="">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li v-if="user_id && phone">
                    <router-link :to="{name:'my_videos',params:{phone:phone,id:user_id}}" class="nav-link text-right" slot="title" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <b class="nav-link-inner--text">مشاهدة فيديوهاتى ({{phone}}) </b>
                    </router-link>
                </li>
            </ul>
            <ul class="navbar-nav text-right align-items-lg-center mr-lg-auto">
                <li class="nav-item">
                    <slot v-if="phone">
                        <a class="nav-link nav-link-icon" @click="logout()" style="cursor: pointer">
                            <span class="font-weight-bold">الخروج  </span>
                        </a>
                    </slot>
                    <slot v-if="!phone">
                        <router-link :to="{name:'login'}" class="nav-link nav-link-icon">
                            <span class="font-weight-bold">تسجيل الدخول</span>
                        </router-link>
                    </slot>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="" target="_blank"
                       rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">فيسبوك</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="" target="_blank"
                       rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">تويتر</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
    import BaseNav from "@/components/BaseNav";
    import BaseDropdown from "@/components/BaseDropdown";
    import CloseButton from "@/components/CloseButton";

    export default {
        components: {
            BaseNav,
            CloseButton,
            BaseDropdown
        },
        data() {
            return {
                phone: null,
                user_id: null,
            }
        },
        mounted() {
            let phone = localStorage.getItem('auth_mobile');
            let auth_id = localStorage.getItem('auth_id');
            if (phone) {
                this.phone = phone;
            }
            if (auth_id) {
                this.user_id = auth_id;
            }
        },
        methods: {
            logout() {
                localStorage.removeItem('auth_mobile');
                localStorage.removeItem('auth_id');
                location.reload()
            }
        }
    };
</script>
<style>
</style>
