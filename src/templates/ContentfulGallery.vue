<template>
    <Layout class="BgGallery">
        <section class="galery">
            <div class=" container my-12 mx-auto px-4 md:px-12 bg-pink-100 opacity-75 w-full md:w-1/2 flex justify-center flex-col rounded">
                <h1 class="w-full flex justify-center text-4xl mb-6">{{ $page.gallery.title }}</h1>
                <h2
                        class="w-3/4 m-auto flex justify-center text-base pb-4 md:pb-8"
                        v-html="renderHtmlMethod($page.gallery.description)"
                />
            </div>
            <article class="container my-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap justify-center -mx-1 lg:-mx-4">
                    <figure class="relative my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 flex justify-center"
                            :key="index"
                            v-for="(image, index) in $page.gallery.media"
                    >
                        <g-image
                                class="overflow-hidden rounded-lg shadow-lg4"
                                :src="renderThumbnail(image.file.url)"
                                :alt="image.title"
                                @click="openPicture(index)"
                        />
                        <figcaption class="absolute bottom-0 left-0 text-base -mt-16 text-white px-6">
                            <div>
                                <h1>{{image.title}}</h1>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </article>
            <transition name="fade">
                <PictureModal
                        :pictures="$page.gallery.media"
                        :index="currentIndex"
                        v-if="modalIsOpen"
                        @close="hideModal"
                />
            </transition>

            <!--<g-link class="return-link" to="/gallery/">👈 Back to gallery overview
            </g-link>-->
        </section>
    </Layout>
</template>

<script>
    import {renderHtmlMethod, renderImage} from "../helpers/contentful";
    import VueMarkdown from "vue-markdown";
    import PictureModal from "../components/PictureModal";

    export default {
        metaInfo() {
            return {
                title: this.$page.gallery.title
            };
        },
        components: {
            VueMarkdown
        },
        created() {
            this.$root.$on("modal-close", this.hideModal);
        },
        components: {
            PictureModal
        },
        methods: {
            renderHtmlMethod(input) {
                return renderHtmlMethod(input);
            },
            renderThumbnail(src) {
                return renderImage({src, fit: "fill", w: 1024 / 2, h: 1024 / 2});
            },
            openPicture(index) {
                this.currentIndex = index;
                this.showModal();
            },
            showModal() {
                this.modalIsOpen = true;
            },
            hideModal() {
                this.modalIsOpen = false;
            }
        },
        data() {
            return {
                currentIndex: 0,
                modalIsOpen: false
            };
        }
    };
</script>

<style lang="scss" scoped>
    .BgGallery {
        width: 100vw;
        background-image: url("../assets/img/styleBG.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 1;
        position: relative;
    }

    .galery {
        width: 100vw;
        min-height: 95vh;
        z-index: 20;
    }

</style>

<page-query>
    query Gallery ($path: String!) {
        gallery: contentfulGallery (path: $path) {
            title,
            description,
            heroImage {
                file {
                    url,
                    details {
                        size
                    }
                }
            }
            media {
                title,
                file {
                    url,
                    details {
                        size
                    }
                },
                description
            }
        }
    }
</page-query>
