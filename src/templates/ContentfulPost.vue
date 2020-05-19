<template>
    <Layout class="post">
        <!--

        <div class="post-header">
          <h1 class="post-title">
            {{ $page.post.title }}
          </h1>
          <span class="post-date hand-written">{{ $page.post.publishDate }}</span>
          <g-image
            class="post-hero-image"
            v-if="$page.post.heroImage"
            :src="renderHeroImage($page.post.heroImage.file.url)"
            :alt="$page.post.heroImage.title"
          />
        </div>
        <vue-markdown class="post-body">{{ changeData }}</vue-markdown>
        <div class="post-footer">
          <g-link class="return-link" to="/blog/" title="To blog overview"
            >👈 Back to blog overview</g-link
          >
        </div>
      -->
        <!-- Showcase -->
        <section class="section-a my-8">
            <article class="lg:px-16 px-8  flex flex-col xl:flex-row items-center justify-between bg-gray-100">
                <div class="flex-1 px-4 h-full ">
                    <div class=" sm:hidden w-full ">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <h1 class="text-3xl text-center">{{ $page.post.title }}</h1>
                    <div class="w-full my-4">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <vue-markdown class="">{{ richTextDiscription }}</vue-markdown>
                </div>
                <div class="flex-1">
                    <g-image
                            class="object-contain h-full w-full"
                            v-if="$page.post.heroImage"
                            :src="renderHeroImage($page.post.heroImage.file.url)"
                            :alt="$page.post.heroImage.title"
                    />
                </div>
            </article>
            <article class="lg:px-16 px-8  flex flex-col xl:flex-row items-center justify-between bg-gray-100">
                <div class="flex justify-center items-center h-full">
                    <vue-markdown class="">{{ richTextBody }}</vue-markdown>
                </div>
                <div class="w-full py-5 my-2">
                    <ClientOnly>
                        <carousel-3d :width="150" :height="250" :space="170" :disable3d="true" :clickable="false"
                                     :controls-visible="true">
                            <slide class="redondo" v-for="(img, i) in $page.post.media" :index="i" :key="img.id">

                                <g-image
                                        class="h-full object-cover "
                                        :srcset="img.file.url"
                                        alt="dailystyle-instagram-images"
                                        fit="contain"
                                />
                            </slide>
                        </carousel-3d>
                    </ClientOnly>
                </div>
            </article>

            <div class="lg:px-16 px-8 bg-white flex justify-between items-center">
                <g-link class="bg-transparent hoverGradiant text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded"
                        to="/blog/" title="To blog overview"
                >Blog
                </g-link>
                <g-link class="bg-transparent hoverGradiant text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded">
                    Next Post
                </g-link>
            </div>
        </section>

        <!-- Large Text -->
        <!--    <section id="about" class="section-b">
                <div class="overlay">
                    <div class="section-b-inner py-5">
                        <h3 class="text-2">Loud & Clear</h3>
                        <h2 class="text-5 mt-1">People Aren't Hearing All the Music</h2>
                        <p class="mt-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                            repudiandae laboriosam quia, error tempore porro ducimus voluptate
                            laborum nostrum iure.
                        </p>
                    </div>
                </div>
            </section>-->

        <!-- Gallery -->
        <section class="section-c">
            <div class="gallery">
                <a href="https://i.ibb.co/CHLBZnp/gal2323.jpg" class="big"
                ><img src="https://i.ibb.co/CHLBZnp/gal2323.jpg" alt=""
                /></a>
                <a href="https://i.ibb.co/4pBbhfY/gal39834.jpg" class="big"
                ><img src="https://i.ibb.co/4pBbhfY/gal39834.jpg" alt=""
                /></a>
                <a href="https://i.ibb.co/xSnHP7g/gal43884.jpg" class="big"
                ><img src="https://i.ibb.co/xSnHP7g/gal43884.jpg" alt=""
                /></a>
                <a href="https://i.ibb.co/QN6Bnrb/gal4958.jpg" class="big"
                ><img src="https://i.ibb.co/QN6Bnrb/gal4958.jpg" alt=""
                /></a>
                <a href="https://i.ibb.co/dGZvj75/gal4545.jpg" class="big">
                    <img src="https://i.ibb.co/dGZvj75/gal4545.jpg" alt=""
                    /></a>
                <a href="https://i.ibb.co/S6FVFNt/gal74744.jpg" class="big"
                ><img src="https://i.ibb.co/S6FVFNt/gal74744.jpg" alt=""
                /></a>
            </div>
        </section>
    </Layout>
</template>

<script>
    import {renderImage} from "../helpers/contentful";
    import VueMarkdown from "vue-markdown";
    import {documentToHtmlString} from "@contentful/rich-text-html-renderer";

    export default {
        metaInfo() {
            return {
                title: this.$page.post.title
            };
        },
        components: {
            VueMarkdown,
            Carousel3d: () =>
                import ('vue-carousel-3d')
                    .then(m => m.Carousel3d)
                    .catch(),
            Slide: () =>
                import ('vue-carousel-3d')
                    .then(m => m.Slide)
                    .catch()
        },
        computed: {
            richTextDiscription: function () {
                // `this` points to the vm instance
                return documentToHtmlString(this.$page.post.description)
            },
            richTextBody: function () {
                // `this` points to the vm instance
                return documentToHtmlString(this.$page.post.body)
            }
        },
        methods: {
            renderHeroImage(src) {
                return renderImage({src, fit: "fill", w: 1200, h: 1200});
            }
        }
    };
</script>

<style>
    .hoverGradiant:hover {
        background: linear-gradient(90deg, #fbd2e0 0%, #fbc9fb 100%);
        color: #03120e;
    }

    .gradient {
        background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
    }

    .post-body > * {
        font-size: 16px;
    }

    h1,
    h2,
    h3,
    h4 {
        line-height: 1.3;
    }

    a {
        color: #444;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    img {
        width: 100%;
        height: 50vh;
    }

    .container {
        max-width: 1100px;
        margin: auto;
        overflow: hidden;
        padding: 0 1rem;
    }

    .section-a {
        margin: 2rem 0;
    }

    .section-a .container {
        display: grid;
        grid-template-columns: 0.75fr 1.25fr;
        grid-gap: 3rem;
        align-items: center;
        justify-content: center;
    }

    .section-a p {
        margin: 1rem 0;
    }

    /*    .section-b {
            position: relative;
            background: url('https://i.ibb.co/1RS1dqC/section-b.jpg') no-repeat bottom center/cover;
            height: 600px;
        }

        .section-b-inner {
            color: #fff;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: auto;
            max-width: 860px;
            padding: 5rem 0;
        }

        .section-b-inner h3 {
            font-size: 2rem;
        }

        .section-b-inner h2 {
            font-size: 5rem;
            margin-top: 1rem;
        }

        .section-b-inner p {
            margin-top: 1rem;
            font-size: 1.5rem;
        }*/

    .section-c .gallery {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    .section-c .gallery a:first-child {
        /* grid-row-start: 1;
        grid-row-end: 3; */
        grid-row: 1/3;
        grid-column: 1/3;
    }

    .section-c .gallery a:nth-child(2) {
        grid-column-start: 3;
        grid-column-end: 5;
    }

    .section-c .gallery img,
    .section-c .gallery a {
        width: 100%;
        height: 100%;
    }

    /*.section-footer {
        background: var(--primary-color);
        color: #fff;
        padding: 4rem 0;
    }

    .section-footer .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
    }

    .section-footer h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .section-footer h3 {
        margin-bottom: 0.7rem;
    }

    .section-footer a {
        line-height: 1.9;
        color: #ccc;
    }

    .section-footer a > i {
        color: #555;
        margin-right: 0.5rem;
    }

    .email-form {
        width: 100%;
        display: inline-block;
        background-color: #555;
        position: relative;
        border-radius: 20px;
        line-height: 0;
        margin-top: 1rem;
    }*/

    /* // .form-control-wrap {
    // 	position: relative;
    // 	display: inline-block;
    // 	width: 100%;
    // } */

    /*.email-form .form-control {
        display: inline-block;
        border: 0;
        outline: 0;
        font-size: 1rem;
        color: #ddd;
        background-color: transparent;
        font-family: inherit;
        margin: 0;
        padding: 0 3rem 0 1.5rem;
        width: 100%;
        height: 45px;
        border-radius: 20px;
    }

    .email-form .submit {
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        width: 45px;
        height: 45px;
        background-color: #eee;
        font-size: 1rem;
        text-align: center;
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        color: #333;
        cursor: pointer;
        border-radius: 0 20px 20px 0;
    }

    .btn {
        display: inline-block;
        background: var(--primary-color);
        color: #fff;
        padding: 0.8rem 1.5rem;
        border: none;
        cursor: pointer;
        font-size: 1.1rem;
        border-radius: 30px;
    }

    .btn:hover {
        background: var(--secondary-color);
    }

    .overlay {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--overlay-color);
    }*/

    @media (max-width: 700px) {
        .section-a .container {
            grid-template-columns: 1fr;
            text-align: center;
        }

        .section-a .container div:first-child {
            order: 2;
        }

        .section-a .container div:nth-child(2) {
            order: -1;
        }

        .section-a img {
            width: 95vw;
            margin: auto;
        }

        .section-c .gallery {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }

        .section-c .gallery a:first-child {
            grid-row: 1/1;
            grid-column: 1/1;
        }

        .section-c .gallery a:nth-child(2) {
            grid-column: 2/4;
            grid-row: 2/2;
        }

        .section-c .gallery a:last-child {
            display: none;
        }

        /*        .section-footer {
                    padding: 2rem 0;
                }
                .section-footer .container {
                    grid-template-columns: 1fr;
                    text-align: center;
                }

                .section-footer div:nth-child(2),
                .section-footer div:nth-child(3) {
                    display: none;
                }*/
    }
</style>

<page-query>
    query Post ($path: String!) {
        post: contentfulPost (path: $path) {
            title,
            slug,
            publishDate,
            metaDescription,
            body,
            description,
            media{
                file {
                    url
                }
            }
            heroImage {
                file {
                    url
                }
                title
            }
        }
    }
</page-query>
