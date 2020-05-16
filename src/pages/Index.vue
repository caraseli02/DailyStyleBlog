<template>
    <Layout class="relative">
        <cubic-top/>
        <CubicBottom/>
        <section>
            <div class="container mx-auto flex flex-col items-center">
                <!--                <g-image src="../assets/img/desktop/bgmallorca@2x.jpg" class="w-full"/>-->
            </div>
        </section>
        <section class="py-8">

            <div class="max-w-6xl mx-auto m-8 ">

                <div class="flex flex-wrap ">
                    <div class="w-full sm:w-1/2 pl-6 flex justify-center items-start flex-col relative">
                        <div class="hidden absolute top-0 right-0  xl:block">
                            <h3 class="italic text-gray-500">"Lo más importante al vestir es una sonrisa"</h3>
                            <span class="flex justify-end mt-1 text-gray-500">Ann Taylor</span>
                        </div>
                        <g-link class="gradientLinks" to="/blog"><h2
                                class="text-2xl xl:text-4xl text-gray-800 font-bold">
                            {{getBlogs.titleBloc1}}</h2></g-link>
                        <p class=" flex flex-col justify-around text-gray-600 mb-3 lg:mt-10 lg:mb-10 mt-3 text-base lg:text-xl">
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
                                    :srcset="$page.contentfulIndexMain.imgBloc1[0].secure_url"
                                    alt="dailystyle blog picture"

                            />
                        </g-link>
                    </div>
                </div>

                <div class="flex flex-wrap flex-col-reverse sm:flex-row">
                    <div class="w-full sm:w-1/2">
                        <g-link to="/galleries">
                            <g-image
                                    class="w-5/6 sm:h-auto mx-auto"
                                    :srcset="$page.contentfulIndexMain.imgBloc2[0].secure_url"
                                    alt="dailystyle gallery picture"

                            />
                        </g-link>

                    </div>
                    <div class="w-full sm:w-1/2 pl-6 flex justify-center items-start flex-col relative">
                        <div class="hidden absolute bottom-0 right-0 mr-3  xl:block w-3/4">
                            <h3 class="italic text-gray-500">"¿Cuál de mis fotos es mi fotografía preferida? Una que voy a hacer mañana."</h3>
                            <span class="flex justify-end mt-1 text-gray-500">Imogen Cunningham</span>
                        </div>
                        <g-link class="gradientLinks" to="/blog"><h2
                                class="text-2xl xl:text-4xl text-gray-800 font-bold">
                            {{getBlogs.titleBloc2}}</h2></g-link>
                        <p class=" flex flex-col justify-around text-gray-600 mb-3 lg:mt-10 lg:mb-10 mt-3 text-base lg:text-xl">
                            {{getBlogs.textBloc2}}
                        </p>
                        <div class=" w-full bg-white flex justify-center sm:justify-start items-center pb-8">
                            <g-link class="bg-transparent hoverGradiant text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded"
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
        <article class="gradientGallery w-full py-5 my-2">
            <ClientOnly>
                <carousel-3d :width="187" :height="301" :space="200" :disable3d="true" :clickable="false"
                             :controls-visible="true">
                    <slide class="redondo" v-for="(node, i) in $page.allInstagramPhoto.edges" :index="i" :key="node.id">

                        <g-image
                                class="h-full object-cover rounded-lg"
                                :srcset="node.node.display_url"
                                alt="dailystyle-instagram-images"
                                fit="contain"
                        />
                    </slide>
                </carousel-3d>
            </ClientOnly>
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
        }
    };

</script>

<style scoped>

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

    .fondoBlog {
        background-image: url("../assets/img/fondoBlog.svg");
        background-size: cover;


    }

</style>

<page-query>
    query {
        allInstagramPhoto {
            edges {
                node {
                    display_url
                    edge_media_to_caption {
                        edges {
                            node {
                                text
                            }
                        }
                    }
                }
            }
        }
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
