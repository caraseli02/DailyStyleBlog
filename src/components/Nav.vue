<template>
    <header class=" white_gradient lg:px-16 px-8 bg-transparent flex flex-wrap items-center z-10">
        <div class="flex-1 flex justify-between items-center z-10">
            <g-link to="/" class="home-link"
            >
                <Logo :alt="$static.metadata.siteName"
                />
            </g-link>
        </div>

        <label for="menu-toggle" class="cursor-pointer md:hidden block p-3 z-10">
            <svg class="fill-current text-gray-900"
                 xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle"/>

        <div class="hidden md:flex md:items-center md:w-auto w-full z-10" id="menu">
            <nav>
                <ul class="md:flex items-center justify-between text-base text-gray-700 p-4">
                    <li class=" hover:text-black flex justify-center items-center"><g-link class="hover:shadow rounded-lg md:p-4 p-3 block" to="/blog">Blog</g-link></li>
                    <li class=" hover:text-black flex justify-center items-center"><g-link class="hover:shadow rounded-lg md:p-4 p-3 block" to="/gallery/">My Style</g-link></li>
                    <!--                    <li><g-link class="md:p-4 py-3 px-0 block" to="/about">About</g-link></li>-->
<!--                    <li class=" hover:text-black flex justify-center items-center"><g-link class="hover:shadow rounded-lg md:p-4 p-3 block" to="/contact">Contact</g-link></li>-->
                </ul>
            </nav>

        </div>
    </header>
</template>

<script>
    import Logo from "../components/Logo";

    export default {
        components: {
            Logo
        }
    };
</script>

<style scoped>
    #menu-toggle:checked + #menu {
        display: block;
    }

</style>
<style >
    .white_gradient {
        background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(254,254,254,0.8) 50%, rgba(255,255,255,0.8) 100%);
    }
    header{
        z-index: 10;
    }
    footer {
        z-index: 10;
    }


</style>
<static-query>
    query {
    metadata {
    siteName
    }
    }
</static-query>
