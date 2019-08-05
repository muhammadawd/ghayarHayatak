<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0" style="height: 340px;">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">

            <div class="container pt-lg-md mt--300">
                <div class="row justify-content-center">
                    <div class="col-lg-5">
                        <card type="secondary" shadow
                              header-classes="bg-white pb-5"
                              body-classes="px-lg-5 py-lg-5"
                              class="border-0">
                            <template>
                                <form role="form">
                                    <base-input alternative
                                                class="mb-3"
                                                placeholder="Phone"
                                                v-model="phone"
                                                addon-left-icon="ni ni-mobile-button">
                                    </base-input>
                                    <base-input alternative
                                                type="password"
                                                placeholder="Password"
                                                v-model="password"
                                                addon-left-icon="ni ni-lock-circle-open">
                                    </base-input>
                                    <small id="error_message" class="text-danger"></small>
                                    <div class="text-center">
                                        <base-button type="primary" @click="submitLogin()" class="btn-info my-4"> دخول
                                        </base-button>
                                    </div>
                                </form>
                            </template>
                        </card>
                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <router-link :to="{name:'register'}" class="nav-link nav-link-icon">
                                    <small> انشاء حساب جديد</small>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes';

    export default {

        data: () => {
            return {
                phone: null,
                password: null,
            }
        },
        components: {},
        mounted() {
            if (this.$route.query.nextUrl) {
                console.log('nextUrl')
            }

        },
        methods: {
            submitLogin() {
                let vm = this;
                const params = new URLSearchParams();

                params.append('mobile', vm.phone);
                params.append('password', vm.password);

                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.LOGIN, params).then((response) => {
                    if (response.data.result == 'fail') {
                        $('#error_message').text(response.data.message)
                        return;
                    }

                    $('#error_message').text(response.data.message)


                    if (vm.$route.query.nextUrl) {
                        console.log('nextUrl')
                        vm.$router.push({path: vm.$route.query.nextUrl});
                    } else {
                        vm.$router.push({name: 'main_category'});
                    }
                    localStorage.setItem('auth_mobile', response.data.data.mobile);
                    localStorage.setItem('auth_id', response.data.data.user_id);
                    location.reload()
                });
            }
        }
    };
</script>
<style>

</style>
