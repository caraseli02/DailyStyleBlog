<template>
    <Layout class="relative">
        <profile-page/>
        <cubic-top/>
        <CubicBottom/>
        <section>
            <div class="container mx-auto flex flex-col items-center">
                <!--                <g-image src="../assets/img/desktop/bgmallorca@2x.jpg" class="w-full"/>-->
            </div>
        </section>
        <section class="py-8">

            <div class="max-w-6xl mx-auto m-8 ">

                <div class="flex flex-wrap mb-16 md:mb-12">
                    <div class="w-full sm:w-1/2 pl-6 flex justify-center items-start flex-col relative">
                        <div class="hidden absolute top-0 right-0  xl:block">
                            <h3 class="italic text-gray-500">"Lo más importante al vestir es una sonrisa"</h3>
                            <span class="flex justify-end mt-1 text-gray-500">Ann Taylor</span>
                        </div>
                        <g-link class="gradientLinks" to="/blog"><h2
                                class="text-2xl xl:text-4xl text-gray-800 font-bold">
                            {{getBlogs.titleBloc1}}</h2></g-link>
                        <p class=" flex flex-col justify-around text-gray-700 mb-3 lg:mt-10 lg:mb-10 mt-3 text-base lg:text-xl
                                    md:leading-normal lg:leading-relaxed">
                            {{getBlogs.textBloc1}}
                        </p>
                        <div class=" w-full bg-white flex justify-center sm:justify-end items-center pb-8">
                            <g-link class="bg-transparent hoverGradiant text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded"
                                    to="/blog/" title="To blog overview"
                            >Descubre Mas →
                            </g-link>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 ">
                        <g-link to="/blog">
                            <g-image
                                    class="w-5/6 sm:h-auto mx-auto"
                                    src="../assets/img/DailyStyleLooksBlog.jpg"
                                    alt="dailystyle blog picture"
                            />
                        </g-link>
                    </div>
                </div>
                <div class="relative w-full h-12 md:h20 min-w-full center lineZ">
                    <svg class="absolute w-full h-full " viewBox="0 0 10 10"
                         preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color: rgb(250,251,252); stop-opacity: 1;"></stop>
                                <stop offset="100%" style="stop-color: rgb(235,235,235); stop-opacity: 1;"></stop>
                            </linearGradient>
                        </defs>
                        <polygon points="0,0 10,0 0,10" fill="white"></polygon>
                    </svg>
                    <svg class="absolute top left w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line x1="100%" y1="0%" x2="0%" y2="100%" stroke="#B8C4C2" style="stroke-width: 0.5"></line>
                    </svg>
                    <svg class="absolute w-full h-full lineZ" viewBox="0 0 10 10"
                         preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color: rgb(235,235,235); stop-opacity: 1;"></stop>
                                <stop offset="100%" style="stop-color: rgb(250,251,252); stop-opacity: 1;"></stop>
                            </linearGradient>
                        </defs>
                        <polygon points="0,10 10,10 10,0" fill="url(&quot;#gradient2&quot;)"></polygon>
                    </svg>
                </div>
                <div class="flex flex-wrap flex-col-reverse sm:flex-row colorMongo pt-16 md:pt-12">
                    <div class="w-full sm:w-1/2">
                        <g-link to="/galleries">
                            <g-image class="w-5/6 sm:h-auto mx-auto"
                                     src="../assets/img/DailyStyleLooksGallery.jpg"
                                     alt="dailystyle gallery picture"/>
                        </g-link>

                    </div>
                    <div class="w-full sm:w-1/2 pl-6 flex justify-center items-start flex-col relative">
                        <div class="hidden absolute bottom-0 right-0 mr-3  xl:block w-3/4">
                            <h3 class="italic text-gray-500">"¿Cuál de mis fotos es mi fotografía preferida? Una que voy
                                a hacer mañana."</h3>
                            <span class="flex justify-end mt-1 text-gray-500">Imogen Cunningham</span>
                        </div>
                        <g-link class="gradientLinks" to="/blog"><h2
                                class="text-2xl xl:text-4xl text-gray-800 font-bold">
                            {{getBlogs.titleBloc2}}</h2></g-link>
                        <p class=" flex flex-col justify-around text-gray-700 mb-3
                                    lg:mt-10 lg:mb-10 mt-3 text-base lg:text-xl
                                    md:leading-normal lg:leading-relaxed ">
                            {{getBlogs.textBloc2}}
                        </p>
                        <div class=" w-full bg-white flex justify-center sm:justify-end items-center py-6 pr-4">
                            <g-link class="bg-transparent hoverGradiant text-gray-500 font-semibold
                            hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded"
                                    to="/galleries/" title="To blog overview"
                            >Descubre Mas →
                            </g-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <h3 class=" flex justify-center items-end w-full text-5xl sm:text-6xl -mb-8 text-black "><a
                href="https://www.instagram.com/daiilystylee/">INSTAGRAM</a></h3>
        <article class="gradientGallery w-full py-5 my-2 flex justify-around items-center">
            <g-image
                    src="../assets/img/DailyStyleLooks2.jpg"
                    fit="cover"
                    width="201"
                    height="324"
                    immediate="false"
                    quality="90"
                    alt="dailystyle-instagram-picture"
            />
            <g-image
                    src="../assets/img/DailyStyleLooks3.jpg"
                    fit="cover"
                    width="201"
                    height="324"
                    immediate="false"
                    quality="90"
                    alt="dailystyle-instagram-picture"
            />
            <g-image
                    src="../assets/img/DailyStyleLooks4.jpg"
                    fit="cover"
                    width="201"
                    height="324"
                    immediate="false"
                    quality="90"
                    alt="dailystyle-instagram-picture"
            />
        </article>
    </Layout>
</template>

<script>
    import {getCoverImage, renderImage} from "../helpers/contentful";
    import ProfilePage from "../components/profilePage";
    import CubicTop from "../components/CubicTop";
    import CubicBottom from "../components/CubicBottom";
    import VueMarkdown from "vue-markdown";

    export default {
        name: 'Index',
        metaInfo: {
            title: "DailyStyleLooks a blog about Fashion and Beauty "
        },
        data: function () {
            return {
                imgList: [],
                // matchNumbers: '^[0-9]*$'
            }
        },
        components: {
            VueMarkdown,
            CubicTop,
            CubicBottom,
            ProfilePage,
            Carousel3d: () =>
                import ('vue-carousel-3d')
                    .then(m => m.Carousel3d)
                    .catch(),
            Slide: () =>
                import ('vue-carousel-3d')
                    .then(m => m.Slide)
                    .catch()
        },
        methods: {
            getCoverImage(node) {
                return getCoverImage(node);
            },
            renderThumbnail(src) {
                return renderImage({src, fit: "fill", w: 968, h: 968});
            }
        },
        computed: {
            getBlogs() {
                return this.$page.contentfulIndexMain
            }
            /*            CreatImgList() {
                            var i;
                            for (i = 0; i < 10; i++) {
                                this.imgList[i] = `../assets/DailyStyleLooks${i}.jpg`
                            }
                                return this.imgList[i]
                        }*/
        }
    }
</script>

<style scoped>

    .colorMongo {
        background-color: #FAFBFC;
    }

    .lineZ {
        z-index: -1;
    }

    .hoverGradiant:hover {
        background: linear-gradient(90deg, #fbd2e0 0%, #fbc9fb 100%);
        color: #03120e;
    }

    .gradientGallery {
        background: #000000; /* fallback for old browsers */
        background: -webkit-linear-gradient(to top, #434343, #000000); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to top, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }

    .gradientLinks:hover {
        background-image: linear-gradient(to bottom, #ffffff, #ffffff, #ffffff, #ebd3ff, #ffffff);
    }

    .redondo {
        border-radius: 15px;
    }

</style>

<page-query>
    query {
        contentfulIndexMain(id: "5yTmn6wGeJQ9HyvJPxxR2e") {
            titleBloc1
            titleBloc2
            textBloc1
            textBloc2
            imgBloc1 {
                url
                secure_url
            }
            imgBloc2 {
                url
                secure_url
            }
        }
    }
</page-query>
