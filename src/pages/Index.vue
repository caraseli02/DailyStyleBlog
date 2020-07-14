<template>
    <Layout class="relative">
        <transition
                appear
                @before-enter="beforeEnter"
                @enter="enter"
                :css="false"
        >
            <profile-page/>
        </transition>
        <cubic-top/>
        <CubicBottom/>
        <section>
            <div class="container mx-auto flex flex-col items-center">
                <!--                <g-image src="../assets/img/desktop/bgmallorca@2x.jpg" class="w-full"/>-->
            </div>
        </section>
        <section

                class="py-8"
        >
            <div class="max-w-6xl mx-auto m-8 ">
                <div
                        v-for="(article , index) in articles" :key="index"
                        class="card flex flex-wrap mb-16 md:mb-12" :class="article.class"
                >
                    <div class="w-full sm:w-1/2 pl-6 flex justify-center items-start flex-col relative">
                        <div class="hidden absolute top-0 right-0  xl:block">
                            <h3 class="italic text-gray-500">{{article.slogan}}</h3>
                            <span class="flex justify-end mt-1 text-gray-500">{{article.sloganAut}}</span>
                        </div>
                        <g-link class="gradientLinks" :to="article.linkTo"><h2
                                class="text-2xl xl:text-4xl text-gray-800 font-bold">
                            {{article.title}}</h2></g-link>
                        <p class=" flex flex-col justify-around text-gray-700 mb-3
                                    lg:mt-10 lg:mb-10 mt-3 text-base lg:text-xl
                                    md:leading-normal lg:leading-relaxed">
                            {{article.text}}
                        </p>`
                        <link-btn :link-btn="article.linkTo">
                            Descubre Mas →
                        </link-btn>
                    </div>
                    <div class="w-full sm:w-1/2 ">
                        <g-link to="/blog">
                            <g-image
                                    class="w-5/6 sm:h-auto mx-auto"
                                    :src="require(`!!assets-loader!@images/${article.img}`)"
                                    alt="dailystyle blog picture"
                            />
                        </g-link>
                    </div>

                </div>
                <!--<div class="flex flex-wrap mb-16 md:mb-12">
                    <div class="w-full sm:w-1/2 pl-6 flex justify-center items-start flex-col relative">
                        <div class="hidden absolute top-0 right-0  xl:block">
                            <h3 class="italic text-gray-500">"Lo más importante al vestir es una sonrisa"</h3>
                            <span class="flex justify-end mt-1 text-gray-500">Ann Taylor</span>
                        </div>
                        <g-link class="gradientLinks" to="/blog"><h2
                                class="text-2xl xl:text-4xl text-gray-800 font-bold">
                            {{getBlogs.titleBloc1}}</h2></g-link>
                        <p class=" flex flex-col justify-around text-gray-700 mb-3
                                    lg:mt-10 lg:mb-10 mt-3 text-base lg:text-xl
                                    md:leading-normal lg:leading-relaxed">
                            {{getBlogs.textBloc1}}
                        </p>
                        <link-btn link-btn="blog">
                            Descubre Mas →
                        </link-btn>
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
                        <g-link to="/gallery">
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
                        <g-link class="gradientLinks" to="/gallery"><h2
                                class="text-2xl xl:text-4xl text-gray-800 font-bold">
                            {{getBlogs.titleBloc2}}</h2></g-link>
                        <p class=" flex flex-col justify-around text-gray-700 mb-3
                                    lg:mt-10 lg:mb-10 mt-3 text-base lg:text-xl
                                    md:leading-normal lg:leading-relaxed ">
                            {{getBlogs.textBloc2}}
                        </p>
                        <div class=" w-full® flex justify-center sm:justify-end items-center py-6 pr-4">
                            <link-btn link-btn="gallery">
                                Descubre Mas →
                            </link-btn>
                        </div>
                    </div>
                </div>-->
            </div>
        </section>
        <h3 class=" flex justify-center items-end w-full text-5xl sm:text-6xl -mb-5 sm:-mb-6 text-gray-700 z-10"><a
                href="https://www.instagram.com/daiilystylee/">INSTAGRAM</a></h3>
        <intersect @enter="instDisplay = true" @leave="instDisplay = false">
            <!--Intersected-->
            <article class="overflow-y-scroll">
                <ul v-if="instDisplay" class="gradientGallery InstagramGrid">
                    <g-image
                            v-for="(img, index) in imgList" :key="index"
                            :src="require(`!!assets-loader!@images/${img}`)"
                            fit="cover"
                            quality="90"
                            alt="dailystyle-instagram-picture"
                            class="inst redondo cover"
                    />
                </ul>
            </article>
        </intersect>
        <!--Intersectzd-->
    </Layout>
</template>

<script>
    import {getCoverImage, renderImage} from "../helpers/contentful";
    import ProfilePage from "../components/profilePage";
    import CubicTop from "../components/CubicTop";
    import CubicBottom from "../components/CubicBottom";
    import VueMarkdown from "vue-markdown";
    import LinkBtn from "../components/buttons/linkBtn";
    import Intersect from 'vue-intersect'
    import gsap from 'gsap'

    export default {
        name: 'Index',
        metaInfo: {
            title: "DailyStyleLooks a blog about Fashion and Beauty "
        },
        data: function () {
            return {
                imgList: [
                    "DailyStyleLooks0.jpeg",
                    "DailyStyleLooks1.jpeg",
                    "DailyStyleLooks2.jpeg",
                    "DailyStyleLooks3.jpeg",
                    "DailyStyleLooks4.jpeg",
                    "DailyStyleLooks5.jpeg",
                    "DailyStyleLooks6.jpeg",
                    "DailyStyleLooks7.jpeg",
                    "DailyStyleLooks8.jpeg",
                    "DailyStyleLooks9.jpeg",
                    "DailyStyleLooks10.jpeg",
                    "DailyStyleLooks11.jpeg"
                ],
                articles: [
                    {
                        "slogan": "' Lo más importante al vestir es una sonrisa '",
                        "sloganAut": "Ann Taylor",
                        "img": "DailyStyleLooksBlog.jpg",
                        "linkTo": "/blog/",
                        "text": "Donde recopilo ideas, inspiración diaria, pensamientos y fotos de mi estilo personal. " +
                            "Mi blog le dará una idea de mis aventuras diarias con la moda. " +
                            "También es una forma de compartir alguna de mis cosas favoritas en la vida, la moda, " +
                            "inspiración , consejos de belleza y estilo",
                        "title": "Un blog de moda..",
                        "class": ""
                    }, {
                        "slogan": "¿Cuál de mis fotos es mi fotografía preferida? Una que voy a hacer mañana.",
                        "sloganAut": "Imogen Cunningham",
                        "img": "DailyStyleLooksGallery.jpg",
                        "linkTo": "/gallery/",
                        "text": "Empece a crear mi galería de looks como un hobby, " +
                            "en una nueva experiencia para mí espero que os animéis " +
                            "a compartirla conmigo y formar parte de ella.",
                        "title": "Una galería de inspiraciones...",
                        "class": "flex-row-reverse"
                    },
                ],
                instDisplay: false
            }
        },
        components: {
            Intersect,
            LinkBtn,
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
        mounted() {
            gsap.from('.card', {
                duration: 1.2,
                opacity: 0,
                scale: 0,
                y: 200,
                ease: 'power1',
                stagger: 0.1
            })
        },
        methods: {
            getCoverImage(node) {
                return getCoverImage(node);
            },
            renderThumbnail(src) {
                return renderImage({src, fit: "fill", w: 968, h: 968});
            },
            beforeEnter(el) {
                el.style.opacity = 0
                el.style.transform = 'scale(0,0)'
            },
            enter(el, done) {
                gsap.to(el, {
                    duration: 1,
                    opacity: 1,
                    scale: 1,
                    onComplete: done
                })
            }
        },
        computed: {
            getBlogs() {
                return this.$page.contentfulIndexMain
            }
        }
    }
</script>


<style scoped>

    .InstagramGrid {
        height: 350px;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(12, 250px);
        grid-template-rows: 402.41px;
        overflow-x: scroll;
        scroll-snap-type: x proximity;
        padding-top: 22px;

    }

    .InstagramGrid > li,
    .InstagramGrid__item {
        scroll-snap-align: center;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: transparent;


    }

    @media (min-width: 640px) {
        .InstagramGrid {

        }

        .InstagramGrid > li,
        .InstagramGrid__item {

        }
    }

    @media (min-width: 1280px) {
        .InstagramGrid {


        }

        .InstagramGrid > li,
        .InstagramGrid__item {

        }
    }


    .colorMongo {
        background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(250, 251, 252, 1) 19%, rgba(250, 251, 252, 1) 100%);
    }

    .lineZ {
        z-index: -1;
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
