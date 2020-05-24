<template>
    <div>
        <section class="profile-page">
            <article class="relative block s500">
                <div class="absolute top-0 w-full h-full bg-center bg-cover bgImage bg-center">
                    <span id="blackOverlay"
                          class="w-full h-full absolute opacity-50 bg-black"
                    >
                    </span>
                </div>
            </article>
            <section class="relative py-16 bg-white">
                <div class="mx-auto px-4 m-4">
                    <div
                            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
                    >
                        <div class="px-6">
                            <div class="flex flex-wrap justify-center">
                                <div
                                        class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                                >
                                    <div class="">
                                        <g-image
                                                alt="dailystyle-profile-foto"
                                                src="../assets/img/DailyStyleProfile.jpg"
                                               class="imgMaxW shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-11 lg:-ml-16"
                                        />
                                    </div>
                                </div>
                                <div
                                        class="w-full lg:w-4/12 px-4  lg:order-3 lg:text-right lg:self-center"
                                >
                                    <div class="sm:py-6 px-3 mt-24 sm:mt-10 lg:mt-0 flex justify-center">
                                        <a href="https://www.instagram.com/daiilystylee/">
                                            <button
                                                    class="flow justify-center items-center bg-gray-500 active:bg-black uppercase text-pink-200 font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                                    type="button"
                                                    style="transition: all 0.15s ease 0s;"
                                            >
                                                Instagram
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div class="mr-4 p-3 text-center">
                      <span
                              class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                      >{{instData[0]['node']['Followers'] }}</span
                      ><span class="text-sm text-gray-500">Followers</span>
                                        </div>
                                        <div class="mr-4 p-3 text-center">
                      <span
                              class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                      >{{instData[0]['node']['Following'] }}</span
                      ><span class="text-sm text-gray-500">Following</span>
                                        </div>
                                        <div class="lg:mr-4 p-3 text-center">
                      <span
                              class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                      >{{instData[0]['node']['Posts'] }}</span
                      ><span class="text-sm text-gray-500">Posts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <h1
                                        class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
                                >
                                    Bienvenidos a
                                    DailyStyle
                                </h1>
                                <div class="w-full mb-4">
                                    <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                                </div>
                                <!--                                <div class="mb-2 text-gray-700 mt-10">
                                                                    <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                                                                    >Zara - Creative Tim Officer
                                                                </div>
                                                                <div class="mb-2 text-gray-700">
                                                                    <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                                                                    >ESCUELA DE TURISMO DE BALEARES S.L.
                                                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
</template>

<script>

    export default {
        name: "profilePage",
        computed: {
            instData: function(){
                return this.$static.allDataInstagram.edges
            }
        }
    }
</script>

<style scoped>
    .imgMaxW {
        max-width: 150px;
    }

    .gradient {
        background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
    }

    .bgImage {
        background-image: url("../../static/fondoBlogmovil.jpg");
    }

    @media (min-width: 640px) {
        .bgImage {
            background-image: url("../../static/fondoBlog.jpg");
        }
    }

    .s500 {
        height: 500px;
    }

</style>

<static-query>
    query {
        allDataInstagram {
            edges {
                node {
                    Followers
                    Following
                    Posts
                }
            }
        }
    }
</static-query>
