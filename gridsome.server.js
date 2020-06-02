// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
    api.loadSource(async actions => {
        const data = require('./src/data/dataInst.json')

        const collection = actions.addCollection('DataInstagram')
        /*for (const item of data) {

        }*/
        collection.addNode({
            Followers: data['followed'],
            Following: data['follow'],
            Posts: data['posts']
        })
        console.log(data.Followers, data.Following, data.Posts)
    })

    /*api.createPages(({createPage}) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    });*/
};
