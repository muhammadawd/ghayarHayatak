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

            <!--            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">-->
            <!--                <base-dropdown class="nav-item " menu-classes="dropdown-menu-xl dropdown-menu-right">-->
            <!--                    <a slot="title" href="#" class="nav-link text-right" data-toggle="dropdown" role="button">-->
            <!--                        <i class="ni ni-ui-04 d-lg-none"></i>-->
            <!--                        <b class="nav-link-inner&#45;&#45;text">ابدأ الان</b>-->
            <!--                    </a>-->
            <!--                    <div class="dropdown-menu-inner">-->
            <!--                        <router-link :to="{name:'main_category'}" class="media d-flex align-items-center">-->
            <!--                            <div class="icon icon-shape bg-gradient-info rounded-circle text-white">-->
            <!--                                <i class="ni ni-vector"></i>-->
            <!--                            </div>-->
            <!--                            <div class="media-body text-right mr-3">-->
            <!--                                <h6 class="heading text-info mb-md-1"> التصنيفات الرئيسية </h6>-->
            <!--                                <p class="description d-none d-md-inline-block mb-0">-->
            <!--                                    قم الان بمشاهدة التصيفات الرئيسية للموقع-->
            <!--                                </p>-->
            <!--                            </div>-->
            <!--                        </router-link>-->
            <!--                        &lt;!&ndash;                        <router-link :to="{name:'homes'}" class="media d-flex align-items-center">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                                <i class="ni ni-ui-04"></i>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                            </div>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                            <div class="media-body ml-3">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                                <h5 class="heading text-warning mb-md-1">Components</h5>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                                <p class="description d-none d-md-inline-block mb-0">Learn how to use Argon&ndash;&gt;-->
            <!--                        &lt;!&ndash;                                    compiling Scss, change brand colors and more.</p>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                            </div>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                        </router-link>&ndash;&gt;-->
            <!--                    </div>-->
            <!--                </base-dropdown>-->

            <!--            </ul>-->
            <ul class="navbar-nav text-right align-items-lg-center mr-lg-auto">
                <li class="nav-item">
                    <slot v-if="phone">
                        <a class="nav-link nav-link-icon">
                            <span class="font-weight-bold">مرحبا, {{phone}}  </span>
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
            }
        },
        mounted() {
            let phone = localStorage.getItem('auth_mobile');
            if (phone) {
                this.phone = phone;
            }
        }
    };
</script>
<style>
</style>
