<template>
    <Layout>
        <cubic-top class="CubicIndexTop hidden xl:block"/>
        <section class="w-full h-full mb-16 pb-16">
            <ul id="revers" class="flex flex-col justify-around items-start">
                <li class="flex flex-col sm:flex-row justify-around items-center h-full xs:h-12 overflow-hidden zaracolor w-full"
                    v-for="{ node } in $page.post.edges" :key="node.id">
                    <div class="flex-1 flex flex-col justify-center items-center">

                        <g-link :to="`blog/${node.slug}`"><h3
                                class="font-bold text-sm mt-6 sm:mt-0 mb-2 w-3/4 m-auto text-center lg:text-4xl lg:w-2/3">
                            {{ node.title }}
                        </h3></g-link>
                        <vue-markdown :key="node.slug"
                                      class="text-gray-700 text-xs mx-4 lg:w-2/3 m-auto text-center lg:text-xl">{{
                            excerpt(node) }}
                        </vue-markdown>
                        <article class=" w-full flex justify-around items-center flex">
                            <ClientOnly>
                                <carousel-3d :width="100" :height="160" :space="110" :disable3d="true"
                                             :clickable="false"
                                             :controls-visible="false">
                                    <slide class="slide hidden border-0 rounded sm:flex sm:w-22 lg:w-32 h-auto flex justify-around items-center"
                                           v-for="(prendas, i) in node.prendas" :key="node.id" :index="i">
                                        <a class=""
                                           :href="prendas.aLink">
                                            <g-image class="w-full h-auto object-contain "
                                                     :src="prendas.imgLink"
                                                     alt="Image from Zara">
                                            </g-image>
                                        </a>
                                    </slide>
                                </carousel-3d>
                            </ClientOnly>
                        </article>
                    </div>
                    <div class="flex-1 flex flex-col justify-center items-start max-h-screen">
                        <a href="" class="h-auto">
                            <g-link :to="`blog/${node.slug}`">
                                <g-image
                                        class="w-full h-auto"
                                        :src="getCoverImage(node).url"
                                        :alt="getCoverImage(node).title"
                                />
                            </g-link>
                        </a>
                    </div>
                </li>
            </ul>

            <Pager :info="$page.post.pageInfo"
                   linkClass="pager__link px-3 py-1 mx-3 my-1"
                   class="mt-4 inline-block w-full text-center flex justify-center items-center"
                   :range="2"
            />
        </section>

    </Layout>
</template>

<script>
    import VueMarkdown from "vue-markdown";
    import truncate from "html-truncate";
    import dateFormat from "date-fns/format";
    import {documentToHtmlString} from "@contentful/rich-text-html-renderer";
    import {getCoverImage, renderImage} from "../helpers/contentful";
    import ImageHover from "../components/ImageHover";
    import {Pager} from 'gridsome'
    import CubicTop from "../components/CubicTop";

    export default {
        metaInfo: {
            title: "Fashion Blog | Looks | Fashion | Moda | Lifestyle"
        },
        components: {
            CubicTop,
            VueMarkdown,
            ImageHover,
            Pager,
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
            excerpt(node) {
                let excerpt = node.metaDescription ? node.metaDescription : node.body;
                return truncate(documentToHtmlString(excerpt), 200);
            },
            dateFormat(date) {
                const thisDate = new Date(date);
                return dateFormat(thisDate, "MMMM do, yyyy");
            },
            getCoverImage(node) {
                return getCoverImage(node);
            },
            renderThumbnail(src) {
                return renderImage({src, fit: "fill", w: 968, h: 968});
            }
        },
        watch: {
            $route(to) {
                excerpt(node)
            },
        },
    };
</script>

<style scoped>

    .CubicIndexTop{
        z-index: 10;
        left: 0;
        top: 0;
    }

    .slide {
        border: 0.5px solid black;
        border-radius: 15px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
    }

    .slide img {
        object-fit: cover;
        height: 100%;
    }

    template {
        background-color: #EDF2F7;
    }

    p {
        font-size: 14px;
    }

    @media (min-width: 768px) {
        #revers > li:nth-child(2n+0) {
            flex-direction: row-reverse;
        }
    }

    .zaracolor {
        background-color: #f0f0f0;
    }

    .pager__link {
        color: #CABCE6;
        text-align: center;
        text-decoration: none;
        padding: 0.25rem 0.5rem;
        margin: 0.25rem 0.5rem;
    }

    .pager__link:hover:not(.active) {
        background-color: #CABCE6;
        border-radius: 15px;
        color: #ffecf8;
    }

    .active {
        background-color: #ffecf8;;
        border-radius: 15px;
    }

</style>

<page-query>
    query Posts($page: Int) {
        post: allContentfulPost(sortBy:"publishDate" order:DESC perPage: 2, page: $page) @paginate {
            pageInfo {
                totalPages
                currentPage
            }
            edges {
                node {
                    title
                    slug
                    publishDate
                    metaDescription
                    body
                    prendas{
                        imgLink
                        aLink
                    }
                    heroImage{
                        file{
                            url
                        }
                    }

                }
            }
        }
    }
</page-query>
