import Vue from "vue";

import DefaultLayout from "~/layouts/Default.vue";
import Cloudinary, {CldContext, CldImage,  CldTransformation, CldPoster} from "cloudinary-vue";

export default function (Vue, {router, head, isClient, isServer}) {
    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout)
    Vue.use(Cloudinary, {
        configuration: { cloudName: "daiilystylee" },
        components: [ CldImage , CldContext,  CldTransformation]
    })
    head.link.push({
        rel: "stylesheet",
        href:
            "https://fonts.googleapis.com/css?family=Work+Sans|Amatic+SC&display=swap"
    })
    // Add a meta tag
    head.meta.push(
        {
            name: 'description',
            content: 'My blog will give you an idea of ​​my daily fashion adventures. It is also a way to share some of my favorite things in life, fashion, inspiration, beauty tips and style.'
        },
        {property: 'language', content: 'en-ES'},
        {property: 'og:title', content: "DailyStyle | Looks | Fashion | Moda | Lifestyle"},
        {property: 'og:site_name', content: 'dailystylelooks'},
        {property: 'og:url', content: 'https://dailystylelooks.com/'},
        {property: 'og:type', content: 'website'},
        {property: 'og:image', content: 'https://res.cloudinary.com/daiilystylee/image/upload/v1589216463/logoNegro_qwvizr.png'},
        {name: 'robots', content: 'index,follow'},
        {
            property: 'twitter:description',
            content: 'My blog will give you an idea of ​​my daily fashion adventures. It is also a way to share some of my favorite things in life, fashion, inspiration, beauty tips and style.'
        },
        {property: 'twitter:title', content: "DailyStyle | Looks | Fashion | Moda | Lifestyle"},
        {property: 'twitter:creator', content: 'dailystylelooks'},
        {property: 'twitter:site', content: 'https://dailystylelooks.com/'},
        {property: 'twitter:type', content: 'website'},
        {property: 'twitter:image', content: 'https://res.cloudinary.com/daiilystylee/image/upload/v1589216463/logoNegro_qwvizr.png'},
)
}
