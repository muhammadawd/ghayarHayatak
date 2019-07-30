<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
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
            <div class="container-fluid">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="row">
                        <div class="col-md-7">
                            <div class="px-4">
                                <!--                                <div class="row justify-content-center mb-4">-->
                                <!--                                    <div class="col-lg-3 order-lg-2">-->
                                <!--                                        <div class="card-profile-image mb-5">-->
                                <!--                                            <a href="#">-->
                                <!--&lt;!&ndash;                                                <img v-lazy="'img/icons/collection/2.png'" class="rounded">&ndash;&gt;-->
                                <!--                                            </a>-->
                                <!--                                        </div>-->
                                <!--                                    </div>-->
                                <!--                                    <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">-->
                                <!--                                    </div>-->
                                <!--                                    <div class="col-lg-4 order-lg-1">-->
                                <!--                                    </div>-->
                                <!--                                </div>-->
                                <div class="text-center">
                                    <!--                                    <h4 class="font-weight-bold">مركز الارشاد الاسري</h4>-->
                                    <div class="py-5 border-top text-center">
                                        <slot v-if="current_video">
                                            <iframe :src="current_video" frameborder="0" width="100%"
                                                    height="600px"></iframe>
                                        </slot>
                                        <slot v-if="!current_video">
                                            <h2 class="font-weight-bold">ﻻ توجد بيانات</h2>
                                        </slot>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="mt-3">
                                <slot v-if="is_loading">
                                    <h3 class="text-center">

                                        LOADING ...
                                    </h3>
                                </slot>
                                <ul>
                                    <li v-for="(element,key) in submenu" class="li" :class="key == 0 ? 'opened' : ''">
                                        <h4 class="font-weight-bold">{{element.title}}</h4>
                                        <div class="arrow"></div>
                                        <div class="content">
                                            <ul>
                                                <li v-for="video in element.videos">
                                                    <div class="element">
                                                        <div class="card shadow-lg--hover mt-1 shadow">
                                                            <div class="card-body p-2">
                                                                <div class="px-1  text-right">
                                                                    <div class="pl-4">
                                                                        <h5 class="title text-info font-weight-bold">
                                                                            {{video.title}}</h5>
                                                                        <div class="h6 font-weight-300">
                                                                            <div v-html="getRate(video.total_rate)"></div>
                                                                        </div>
                                                                        <p>{{video.description}}</p>
                                                                        <b>تكلفة الفيديو </b>
                                                                        <b class="text-info"> {{video.price}} <span
                                                                                class="text-dark">د.ك</span></b>
                                                                        <br>
                                                                        <b>عدد مرات المشاهدة</b>
                                                                        <b class="text-info"> {{video.view_number}} </b>

                                                                        <button v-if="video.is_allowed"
                                                                                class="btn btn-info float-left pull-left"
                                                                                @click="check_video(video)">
                                                                            شاهد الان
                                                                        </button>
                                                                        <button v-if="!video.is_allowed" target="_blank"
                                                                                @click="check_video(video)"
                                                                                class="btn btn-danger text-white float-left pull-left">
                                                                            ادفع الان
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div><!----><!----></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>


    import 'video.js/dist/video-js.css'
    import {videoPlayer} from 'vue-video-player'

    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes';

    export default {

        data: () => {
            return {
                is_loading: true,
                submenu: [],
                current_video: null,
            }
        },
        components: {
            videoPlayer
        },
        mounted() {
            this.trigger();
            let id = this.$route.params.id;
            this.getDetails(id);
        },
        methods: {
            trigger() {
                $(document).on('click', '.li', function () {
                    $('li').removeClass('open');
                    $(this).toggleClass('open');
                })
            },
            getDetails(id) {
                let vm = this;
                let phone = localStorage.getItem('auth_mobile');
                let auth_id = localStorage.getItem('auth_id');
                axios
                    .get(apiServiesRoutes.BASE_URL + apiServiesRoutes.FIND_COURSES + '/' + id, {
                        params: {
                            phone: phone,
                            user_id: auth_id
                        }

                    })
                    .then(response => {
                        if (response.data.result == 'success') {
                            vm.submenu = response.data.subcourse;
                        }
                        vm.is_loading = false;
                    })
            },
            check_video(video) {
                let vm = this;
                let sub_course_duration_id = video.sub_course_duration_id;
                let phone = localStorage.getItem('auth_mobile');
                let auth_id = localStorage.getItem('auth_id');

                axios
                    .get(apiServiesRoutes.BASE_URL + apiServiesRoutes.CHECK_PAY + '/' + phone + '/' + sub_course_duration_id, {}).then((response) => {
                    console.log(response)
                    if (response.data.result == 'success') {
                        if (response.data.paid) {
                            let video_url = response.data.data;
                            vm.current_video = video_url;
                            return;
                        } else {
                            let link = response.data.data;
                            location.href = link;
                            return;
                        }
                        vm.$router.push({name:'login'})
                        return;
                        // let link = response.data.data.link;
                        // let link = "http://google.com";
                        // location.href = link;
                    }
                    vm.$router.push({name:'login'})
                    return;
                });
                // sub_course_duration_id
            },
            getRate(val) {
                val = parseFloat(val);
                console.log(val)
                if (val == 5) {
                    return `<ul>
                                <li class="list-inline-item"><i
                                        class="fa fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star text-warning"></i>
                                </li>
                            </ul>`;
                } else if (val > 0 && val <= 2.5) {
                    return `<ul>
                                <li class="list-inline-item"><i
                                        class="fa fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star-half-o text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star-o text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star-o text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star-o text-warning"></i>
                                </li>
                            </ul>`;
                } else if (val > 2.5 && val <= 4.5) {

                    return `<ul>
                                <li class="list-inline-item"><i
                                        class="fa fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star-half-o text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star-o text-warning"></i>
                                </li>
                            </ul>`;
                } else {

                    return `<ul>
                                <li class="list-inline-item"><i
                                        class="fa fa-star-o text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star-o text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star-o text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star-o text-warning"></i>
                                </li>
                                <li class="list-inline-item"><i
                                        class="fa fa-star-o text-warning"></i>
                                </li>
                            </ul>`;
                }
            },
        }
    };
</script>
<style>
    /* Arrow Animation Styles Start */

    .li,
    .arrow,
    .arrow:before,
    .arrow:after,
    .content {
        transition: all .3s ease-in-out;
    }

    .arrow {
        position: absolute;
        left: 30px;
        top: 25px;
    }

    .arrow,
    .arrow:before,
    .arrow:after {
        border-radius: 25px;
    }

    .arrow:before {
        content: " ";
        width: 25px;
        height: 6px;
        right: 50%;
        margin-left: -25px;
        background-color: black;
        position: absolute;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .arrow:after {
        content: " ";
        width: 25px;
        height: 6px;
        background-color: black;
        position: absolute;
        left: -10px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    .open .arrow:before {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    .open .arrow:after {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }


    /* Arrow Animation Styles End */


    ul {
        list-style-type: none;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .li {
        text-align: right;
        display: block;
        cursor: pointer;
        border-bottom: 1px solid #ccc;
        position: relative;
        padding: 20px;
        overflow: hidden;
        list-style: none;
        max-height: 50px;
    }

    .li.open {
        padding-bottom: 15%;
        cursor: default;
        max-height: inherit;
    }

    .li:hover {
        background: #ebebeb;
    }

    .li.open:hover {
        background: none;
    }

    .li h4 {
        display: inline;
        font-size: 20px;
    }

    .content {
        opacity: 0;
        height: auto;
    }

    .open .content {
        opacity: 1;
    }

    .video-js {
        width: 100%;
    }

    .video-js .vjs-big-play-button {
        top: 50%;
        left: 50%;
    }
    @media only screen and (max-width: 600px) {
        iframe {
            max-height: 200px;
        }
    }
</style>
