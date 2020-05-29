<template>
    <div class="layout">
        <Nav/>
        <transition name="fade" appear>
            <main>
                <slot/>
            </main>
        </transition>
        <footer class="gradient mt-16">
            <div class="container mx-auto  px-8">
                <h4 class="flex justify-center items-center mb-2">Gracias por seguirme y apoyarme con todo su amor en mi aventura.</h4>
                <div class="w-full flex flex-col md:flex-row justify-between">
                    <div class="">
                        <ul class="flex flex-row  justify-around list-reset mb-6">
                            <!--<li class="m-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">
                                    <button class="bg-white hover:bg-gray-100 text-blue font-bold py-2 px-4 rounded-full w-10 flex justify-center items-center">
                                        f
                                    </button>
                                </a>
                            </li>-->
                            <li class="m-4 inline-block mr-2 md:block md:mr-0  w-6 h-6">
                                <a href="https://www.instagram.com/daiilystylee/"
                                   class="no-underline hover:underline text-gray-800 hover:text-orange-500">
                                    <g-image src="../assets/media/Instagram.svg"
                                             height="32"
                                             width="32"
                                             alt="Instagram"
                                    />

                                </a>
                            </li>
                            <li class="m-4 inline-block mr-2 md:block md:mr-0 w-6 h-6">
                                <a href="mailto:daniela.mindru@gmail.com"  class="no-underline hover:underline text-gray-800 hover:text-orange-500">
                                    <g-image src="../assets/media/Gmail.svg"
                                             height="32"
                                             width="32"
                                            alt="Gmail"
                                    />

                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="">
                        <ul class="flex flex-row  justify-around list-reset mb-6 ">
                            <li class="m-2">
                                <g-link to="/terms/"
                                   class="no-underline hover:underline text-gray-800 hover:text-orange-500">Terms of Service</g-link>
                            </li>
                            <li class="m-2">
                                <g-link to="/privacy/"
                                   class="no-underline hover:underline text-gray-800 hover:text-orange-500">Privacy Policy</g-link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="w-full flex justify-between px-8 pb-2 text-xs xl:text-sm">
                <h2>Built by VladWeb</h2>
                <nav class="justify-end">
                    <span class="">Powered by: </span>
                    <a href="https://www.contentful.com/" title="Contentful">Contentful</a>,
                    <a href="https://gridsome.org/" title="Gridsome">Gridsome</a> &amp;
                    <a href="https://www.netlify.com/" title="Netlify">Netlify</a>
                </nav>
            </div>

        </footer>
    </div>
</template>

<script>

    import Nav from "../components/Nav";

    export default {
        components: {
            Nav
        }
    };
</script>

<style scoped>

    .gradient {
        background: linear-gradient(180deg, #fff 0%, #FFECF8 50%, #FFECF8 100%);
    }

</style>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

    * {
        font-family: 'Playfair Display', serif;
    }
</style>


<static-query>
    query {
        metadata {
            siteName
        }
    }
</static-query>
