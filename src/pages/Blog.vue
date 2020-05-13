<template>
    <Layout>
        <section class="w-full h-full mb-16 pb-16">
            <ul id="revers" class="flex flex-col justify-around items-start">
                <li class="flex justify-around items-center h-full xs:h-12 overflow-hidden zaracolor w-full"
                    v-for="{ node } in $page.post.edges" :key="node.id">
                    <div class="flex-1 flex flex-col justify-center items-center">

                        <g-link :to="`blog/${node.slug}`"><h3
                                class="font-bold text-sm mb-2 w-3/4 m-auto text-center lg:text-4xl lg:w-2/3">
                            {{ node.title }}
                        </h3></g-link>
                        <vue-markdown :key="node.slug" class="text-gray-700 text-xs w-32 lg:w-2/3 m-auto text-center lg:text-xl">{{
                            excerpt(node) }}
                        </vue-markdown>
                        <article class=" w-full flex justify-around items-center flex">
                            <div class="hidden sm:flex sm:w-22 lg:w-32 h-auto flex justify-around items-center"
                                 v-for="(prendas, i) in node.prendas" :key="node.id">
                                <a class=""
                                   :href="prendas.aLink">
                                    <g-image class="w-full h-auto object-contain "
                                             :src="prendas.imgLink"
                                             alt="Image from Zara">
                                    </g-image>
                                </a>
                            </div>
                        </article>
                    </div>
                    <!--<div class="">
                        <Tags class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2"
                              :tags="node.tags"/>
                    </div>-->
                    <!--<div class="flex items-center">
                        <img class="w-10 h-10 mr-4" src="../assets/icons/logoNegro.png"
                             alt="DailyStyle fashion blog"/>
                        <div class="text-sm">
                            <p class="text-gray-900 leading-none">DS</p>
                            <p class="text-gray-600">{{
                                dateFormat(node.publishDate)
                                }}</p>
                        </div>
                    </div>-->

                    <div class="flex-1 flex flex-col justify-center items-start max-h-screen">
                        <a href="" class="h-auto">
                            <g-image
                                    class="w-full h-auto"
                                    :src="getCoverImage(node).url"
                                    :alt="getCoverImage(node).title"
                            />
                        </a>
                    </div>
                </li>
            </ul>
            <Pager :info="$page.post.pageInfo"
                   linkClass="pager__link px-3 py-1 mx-3 my-1"
                   class="mt-4 inline-block w-full text-center flex justify-center items-center"
                   range="2"
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

    export default {
        metaInfo: {
            title: "Fashion Blog"
        },
        components: {
            VueMarkdown,
            ImageHover,
            Pager
        },
        methods: {
            excerpt(node) {
                let excerpt = node.metaDescription ? node.metaDescription : node.body;
                return truncate(documentToHtmlString(excerpt), 100);
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

    template {
        background-color: #EDF2F7;
    }

    p {
        font-size: 14px;
    }

    #revers > li:nth-child(2n+0) {
        flex-direction: row-reverse;
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
