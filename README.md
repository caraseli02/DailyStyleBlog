# Gridsome Contentful example


## Gridsome

Gridsome does some out-of-the-box magic for you, especially routing and resolving data. [The documentation](https://gridsome.org/docs/) explains the why and the what, so I'll only detail the things that are relevant for us:

- [Layouts](https://gridsome.org/docs/layouts/) (I use only one in this example) go in the `/layouts` folder. These are components that are automagically available globally.
- [Static pages](https://gridsome.org/docs/pages/) go in the `/pages` folder. These will get a URL based on the name (`/blog` will route to `/pages/Blog.vue`). The homepage is the exception, which points to the `/pages/Index.vue`. Pages are suited for data collections, such as the overviews of the Content we'll be creating.
- [Content nodes](https://gridsome.org/docs/templates/) (this is how Gridsome defines an item in a collection) will go in the `/templates` folder. Because we're passing some parameters, we need to connect the routes, params and templates in a `gridsome.config.js` file, which I'll explain in a bit.
- All [reusable components](https://gridsome.org/docs/components/) go (you guessed it) in the `/components` folder. Just like any Vue application!

### Connect to Contentful

For an easy connection between the APIs of Contentful and Gridsome, there's [a nifty plugin available](https://gridsome.org/plugins/@gridsome/source-contentful) which you can install via:

```js
yarn add @gridsome/source-contentful
```

First register the plugin (I've moved the settings to an individual file `plugin.contentful.js`). It doesn't need much: in the `.env.example` you need to provide individual Contentful keys. You can remove the `.example` from the file name now.

**Do not, ever, include your .env file in your git repository, these include personal keys and sensitive data!!**

In the plugin configuration, it is important to note that the `type` definition helps in pointing Gridsome to the template file with the _same prefix_.

Now, let's [add the plugin and routes](https://gridsome.org/plugins/@gridsome/source-contentful) to the configuration by adding these lines to the `gridsome.config.js`.

1. Import the contentful plugin configuration:

```js
const contentful = require("./plugin.confentful");
```

2. In the `plugins` property (it's an array), add the `contentful` variable

```js
plugins: [contentful],
```

3. Add the routes for the different types to the `templates` property:

```js
templates: {
    ContentfulGallery: "/gallery/:slug",
    ContentfulPost: "/blog/:slug",
    ContentfulPage: "/:slug"
}
```

These routes tell Gridsome what type of source plugin is needed to feed the GraphQL data layer. The `:slug` part is the variable which references the `slug` field on the content (this is how we'll get the correct page data).

#### Getting the data

Every page in Gridsome has a [data layer](https://gridsome.org/docs/data-layer/) which hydrates the components with the appropiate data. These providers get their query from a `<page-query>` component, which you can add to pages in the `/pages` or `/templates` folders.

Take a look at the `/pages/Galleries.vue` for an example of getting a collection (`allContentfulGallery`) or `/templates/ContentfulGallery.vue` for a single entry (`contentfulGallery`). Bear in mind that the collection uses a filter when getting the content. The single entry uses a `$path` variable to map the slug to the item.

## Presenting the data

So, we've are now able to get data from Contentful to hydrate our Vue components in Gridsome. There's a couple of things that need to be done: Contentful offers their data in a very headless way, with descriptors of the nodes it publishes. These aren't always helpful to consume.

Contentful provides tools to transform the response with these plugins, so go ahead and install them:

```js
yarn add @contentful/rich-text-html-renderer @contentful/rich-text-types
```

Now take a look at the `/helpers/contentful.js` file. It offers two important functions `renderHtmlMethod` and `renderImage`.

- `renderHTMLMethod` transforms the extensive node information to the content, since we're mainly interested in the content.
- `renderImage` was written because _at the moment_ the Gridsome Contentful plugin doesn't support the assets API completely. This means we can't make use of the transformations on Contentful's end before consuming the data in the component.

### Render Image

We are getting the raw asset URL by default from the API. For large images, that's bad, because we don't always need to load a 3000x3000 sized image! The function takes in the asset URL and forces it to point to the [Contentful Images API](https://www.contentful.com/developers/docs/references/images-api/), to allow for some transformations which we'll want.

```js
const renderImage = ({ src = "", fit = "", w = 100, h = 100 } = {}) =>
  `${src.replace(/downloads./g, "images.")}?fit=${fit}&w=${w}&h=${h}`;
```

The `.replace` function makes sure that even URLs with a download API will point to the images API. The querystring part is making use of the baked in methods of the images API to resize the asset to some shape that's required for a particular component. Presto!

## Forms

The form is designed to make use of the Netlify Forms functionality. It's basically the implementation that Gridsome and Netlify advise to use, with some basic feedback for the user. These submissions will end up in your Netlify dashboard. In the dashboard, you have the option to add [outgoing notifications](https://docs.netlify.com/forms/setup/#notifications) to Slack, a webhook or send an email.

## Other caveats

This is basically the workings of the project. Apart from the Contentful Image support from the plugin, I found another caveat, which is that the `<vue-markdown>` component didn't properly rerender when moving van one page to the next. It simply didn't seem to pick up the change in content. To patch this, I've added the `$route.params.slug` property as the `key` for the component. This forces a rerender of the contents and seems a decent solution for now.

## Wrapping up

This should help you in setting up a Gridsome / Netlify / Contentful stack, with more performant images than you'd get out of the box. I think this setup covers 80% of the default use cases for a website.

Enjoy ✌️ 

Inspired From https://movingpixels.joranquinten.nl/


Original GitHub  https://github.com/joranquinten/gridsome-contentful-netlify-example

