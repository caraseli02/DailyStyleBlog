<template>
    <Layout class="BgGallery ">
        <ul class="galery relative z-10 flex flex-col md:flex-row justify-around items-center h-full sm:h-screen">

            <li
                    class=""
                    v-for="{ node } in $page.galleries.edges"
                    :key="node.id"
            >
                <!-- component -->
                <g-link :to="`/gallery/${node.slug}`" class="">
                    <div class=" mx-auto max-w-xs rounded-lg shadow-lg my-2 bg-white">
                        <div class="relative">

                            <g-image
                                    class="cover-image rounded"
                                    :src="renderThumbnail(getCoverImage(node).url)"
                                    :alt="getCoverImage(node).title"
                            />

                            <div class="text-center absolute w-full" style="bottom: -30px">
                                <div class="mb-10">
                                    <!--<p class="text-gray-400 text-sm">@witch_forever</p>-->
                                    <h4 class="text-white tracking-wide uppercase text-lg font-bold">
                                        {{ node.title }}
                                    </h4>
                                </div>
                                <!--                                <button class="p-4 rounded-full transition ease-in duration-200 focus:outline-none">
                                                                    <svg class="w-6 h-6 flex justify-center items-center" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                                         viewBox="0 0 494.148 494.148" style="enable-background:new 0 0 494.148 494.148;" xml:space="preserve">
                                                                        <g>
                                                                          <g>
                                                                            <path d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124
                                                                              c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884
                                                                              C432.632,229.572,422.964,213.288,405.284,201.188z"/>
                                                                          </g>
                                                                        </g>
                                                                    </svg>
                                                                </button>-->
                            </div>
                        </div>
                    </div>
                </g-link>
            </li>
        </ul>
    </Layout>
</template>

<style scoped>
    .BgGallery {
        width: 100vw;
        background-image: url("../assets/img/styleBG.jpg");
        z-index: 1;
    }

    .BgGallery::after {
        content: '';
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.30);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .galery {
        width: 100vw;
        height: 95vh;
        z-index: 20;
    }

    button {
        background-color: #cfabff;
        background-image: linear-gradient(90deg, #f9f0f4 0%, #b6a3b6 100%);
        color: #03120e;;
        box-shadow: 0 0 0 0 #ec008c, 0.2rem 0.2rem 30px #6617cb;
    }

    button:hover {
        box-shadow: 0 0 0 0 #ec008c, 0.2rem 0.2rem 60px #6617cb;
    }

</style>

<script>
    import {getCoverImage, renderImage} from "../helpers/contentful";
    import ImageHover from "../components/ImageHover";

    export default {
        metaInfo: {
            title: "Galleries"
        },
        components: {
            ImageHover
        },
        methods: {
            getCoverImage(node) {
                return getCoverImage(node);
            },
            renderThumbnail(src) {
                return renderImage({src, fit: "fill", w: 760 / 2, h: 1024 / 2});
            }
        }
    };
</script>

<page-query>
    query Galleries {
        galleries: allContentfulGallery(sort: [{by: "sortOrder", order: ASC }, {by: "title", order: ASC}]) {
            edges {
                node {
                    id,
                    title,
                    slug,
                    media {
                        file {
                            url
                        },
                        title
                    },
                    heroImage {
                        file {
                            url
                        },
                        title
                    }
                }
            }
        }
    }
</page-query>
