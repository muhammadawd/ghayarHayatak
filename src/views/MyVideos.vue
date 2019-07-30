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
                                <div class="text-center">
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
                            <h3 class="m-2 text-right display-3">
                                فيديوهاتي
                            </h3>
                            <div class="mt-3">
                                <slot v-if="is_loading">
                                    <h3 class="text-center">

                                        LOADING ...
                                    </h3>
                                </slot>
                                <ul>
                                    <li v-for="video in videos">
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
                                                            <b>عدد مرات المشاهدة</b>
                                                            <span class="text-info"> {{video.view_number}} </span>
                                                            <button class="btn btn-info float-left pull-left"
                                                                    @click="showVideo(video)">
                                                                شاهد الان
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div><!----><!----></div>
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

    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes';

    export default {

        data: () => {
            return {
                is_loading: true,
                submenu: [],
                videos: [],
                current_video: null,
            }
        },
        components: {},
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
                    .get(apiServiesRoutes.BASE_URL + apiServiesRoutes.PAID_COURSE + '/' + auth_id, {})
                    .then(response => {
                        if (response.data.result == 'success') {
                            vm.videos = response.data.data;
                        }
                        vm.is_loading = false;
                    })
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
            showVideo(video) {
                this.current_video = video.video_url;

            }
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
