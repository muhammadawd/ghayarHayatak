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
        <section class="section section-skew section-lg pt-lg-0 mt--300">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4 mb-4">
                                <card class="border-0 text-center" hover shadow body-classes="py-5">
                                    <img src="img/icons/collection/1.png" class="mb-4" alt="">
                                    <h6 class="text-info text-uppercase font-weight-bold"> اسنشارات نفسية</h6>
                                    <p class="description mt-3">استشارات نفسية يمكنك مشاهدة المزيد</p>
                                    <div>
                                        <badge type="info" rounded>استشارات</badge>
                                        <badge type="info" rounded>نفسية</badge>
                                        <badge type="info" rounded>طبيب</badge>
                                    </div>
                                    <router-link class="btn mt-4 btn-info" :to="{name:'play_list',params:{id:2}}">
                                        شاهد المزيد
                                    </router-link>
                                </card>
                            </div>
                            <div class="col-lg-4 mb-4">
                                <card class="border-0 text-center" hover shadow body-classes="py-5">
                                    <img src="img/icons/collection/2.png" class="mb-4" alt="">
                                    <h6 class="text-info text-uppercase font-weight-bold"> اسنشارات اطفال</h6>
                                    <p class="description mt-3">استشارات اطفال يمكنك مشاهدة المزيد</p>
                                    <div>
                                        <badge type="info" rounded>استشارات</badge>
                                        <badge type="info" rounded>اطفال</badge>
                                        <badge type="info" rounded>طبيب</badge>
                                    </div>
                                    <router-link class="btn mt-4 btn-info" :to="{name:'play_list',params:{id:1}}">
                                        شاهد المزيد
                                    </router-link>
                                </card>
                            </div>
                            <div class="col-lg-4 mb-4">
                                <card class="border-0 text-center" hover shadow body-classes="py-5">
                                    <img src="img/icons/collection/5.png" class="mb-4" alt="">
                                    <h6 class="text-info text-uppercase font-weight-bold"> دورات تدريبية</h6>
                                    <p class="description mt-3">دورات تدريبية يمكنك مشاهدة المزيد</p>
                                    <div>
                                        <badge type="info" rounded>دورات</badge>
                                        <badge type="info" rounded>تدريبية</badge>
                                        <badge type="info" rounded>طبيب</badge>
                                    </div>
                                    <router-link class="btn mt-4 btn-info" :to="{name:'play_list',params:{id:4}}">
                                        شاهد المزيد
                                    </router-link>
                                </card>
                            </div>
                            <div class="col-lg-4 mb-4">
                                <card class="border-0 text-center" hover shadow body-classes="py-5">
                                    <img src="img/icons/collection/4.png" class="mb-4" alt="">
                                    <h6 class="text-info text-uppercase font-weight-bold"> استشارات قبل الزواج </h6>
                                    <p class="description mt-3">استشارات قبل الزواج يمكنك مشاهدة المزيد</p>
                                    <div>
                                        <badge type="info" rounded>استشارات</badge>
                                        <badge type="info" rounded>زواج</badge>
                                        <badge type="info" rounded>طبيب</badge>
                                    </div>
                                    <router-link class="btn mt-4 btn-info" :to="{name:'play_list',params:{id:3}}">
                                        شاهد المزيد
                                    </router-link>
                                </card>
                            </div>
                            <div class="col-lg-4 mb-4">
                                <card class="border-0 text-center" hover shadow body-classes="py-5">
                                    <img src="img/icons/collection/6.png" class="mb-4" alt="">
                                    <h6 class="text-info text-uppercase font-weight-bold"> سلوكيات الابراج </h6>
                                    <p class="description mt-3">سلوكيات الابراج يمكنك مشاهدة المزيد</p>
                                    <div>
                                        <badge type="info" rounded>سلوكيات</badge>
                                        <badge type="info" rounded>الابراج</badge>
                                        <badge type="info" rounded>طبيب</badge>
                                    </div>
                                    <router-link class="btn mt-4 btn-info" :to="{name:'play_list',params:{id:1109}}">
                                        شاهد المزيد
                                    </router-link>
                                </card>
                            </div>
                            <div class="col-lg-4 mb-4">
                                <card class="border-0 text-center" hover shadow body-classes="py-5">
                                    <img src="img/icons/collection/7.png" class="mb-4" alt="">
                                    <h6 class="text-info text-uppercase font-weight-bold"> فوائد مهمة </h6>
                                    <p class="description mt-3">فوائد مهمة يمكنك مشاهدة المزيد</p>
                                    <div>
                                        <badge type="info" rounded>سلوكيات</badge>
                                        <badge type="info" rounded>الابراج</badge>
                                        <badge type="info" rounded>طبيب</badge>
                                    </div>
                                    <router-link class="btn mt-4 btn-info" :to="{name:'play_list',params:{id:8}}">
                                        شاهد المزيد
                                    </router-link>
                                </card>
                            </div>
<!--                            <div class="col-lg-4 mb-4">-->
<!--                                <card class="border-0 text-center" hover shadow body-classes="py-5">-->
<!--                                    <img src="img/icons/collection/3.png" class="mb-4" alt="">-->
<!--                                    <h6 class="text-info text-uppercase font-weight-bold"> مركز الارشاد الاسري </h6>-->
<!--                                    <p class="description mt-3">مركز الارشاد الاسري يمكنك مشاهدة المزيد</p>-->
<!--                                    <div>-->
<!--                                        <badge type="info" rounded>سلوكيات</badge>-->
<!--                                        <badge type="info" rounded>الابراج</badge>-->
<!--                                        <badge type="info" rounded>طبيب</badge>-->
<!--                                    </div>-->
<!--                                    <router-link class="btn mt-4 btn-info" :to="{name:'play_list',params:{id:7}}">-->
<!--                                        شاهد المزيد-->
<!--                                    </router-link>-->
<!--                                </card>-->
<!--                            </div>-->

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<script>
    export default {};
</script>
<style>
</style>
