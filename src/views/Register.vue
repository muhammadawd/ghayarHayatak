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
                                <form role="form" @submit="submitRegister">
                                    <base-input alternative
                                                class="mb-3"
                                                placeholder="Name"
                                                v-model="name"
                                                required=""
                                                addon-left-icon="ni ni-circle-08">
                                    </base-input>
                                    <small class="text-danger" id="name_error"></small>
                                    <base-input alternative
                                                class="mb-3"
                                                placeholder="Phone"
                                                required=""
                                                v-model="phone"
                                                addon-left-icon="ni ni-mobile-button">
                                    </base-input>
                                    <small class="text-danger" id="phone_error"></small>
                                    <base-input alternative
                                                type="password"
                                                placeholder="Password"
                                                required=""
                                                v-model="password"
                                                addon-left-icon="ni ni-lock-circle-open">
                                    </base-input>
                                    <small class="text-danger" id="password_error"></small>
                                    <small class="text-danger" id="message_error"></small>
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-info my-4">
                                            حساب
                                            جديد
                                        </button>
                                    </div>
                                </form>
                            </template>
                        </card>
                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <router-link :to="{name:'login'}" class="nav-link nav-link-icon">
                                    <small> تسجيل الدخول</small>
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
                account_kit: null,
                name: null,
                phone: null,
                password: null,
            }
        },
        components: {},
        created() {
            // this.initKit();
        },
        methods: {
            // initKit() {
            //     let vm = this;
            //     try {
            //         vm.account_kit = AccountKit.init(
            //             {
            //                 appId: 391171254863573,
            //                 state: "abcd",
            //                 version: "v1.0",
            //                 // debug: true,
            //             }
            //         );
            //     } catch (e) {
            //         console.log(e)
            //     }
            //
            // },
            submitRegister(e) {
                e.preventDefault();
                let vm = this;
                let name = vm.name;
                let phone = vm.phone;
                let password = vm.password;
                let has_error = false;
                if (name == null) {
                    $('#name_error').text('required')
                    has_error = true;
                } else {
                    $('#name_error').text('')
                }
                if (phone == null) {
                    $('#phone_error').text('required')
                    has_error = true;
                } else {
                    $('#phone_error').text('')
                }
                if (password == null) {
                    $('#password_error').text('required')
                    has_error = true;
                } else {
                    $('#password_error').text('')
                }

                if (has_error) {
                    return;
                }

                let data = {
                    full_name: name,
                    mobile: phone,
                    password: password
                };
                vm.registerUser(data);

                return;
                try {
                    vm.account_kit = AccountKit.init(
                        {
                            appId: 391171254863573,
                            state: "abcd",
                            version: "v1.0",
                            debug: true,
                        }
                    );
                    let test = AccountKit.login(
                        'PHONE',
                        {countryCode: '+965', phoneNumber: vm.phone}, // will use default values if not specified
                        vm.loginCallback
                    );

                } catch (e) {
                    location.reload()
                }


            },
            loginCallback(response) {
                if (response.status === "PARTIALLY_AUTHENTICATED") {
                    var code = response.code;
                    var csrf = response.state;
                    // Send code to server to exchange for access token
                } else if (response.status === "NOT_AUTHENTICATED") {
                    // handle authentication failure
                } else if (response.status === "BAD_PARAMS") {
                    // handle bad parameters
                }
            },
            registerUser(data) {
                let vm = this;

                const params = new URLSearchParams();
                params.append('full_name', data.full_name);
                params.append('mobile', data.mobile);
                params.append('password', data.password);

                axios
                    .post(apiServiesRoutes.BASE_URL + apiServiesRoutes.REGISTER, params).then((response) => {

                    if (response.data.result == 'fail') {
                        $('#message_error').text(response.data.message)
                        return;
                    }
                    $('#message_error').text(response.data.message);
                    vm.$router.push({name: 'main_category'});
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
