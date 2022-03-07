import { createApp, ref } from 'vue'
import App from './App.vue'

import { butter } from './plugins/buttercms'
import algoliasearch from 'algoliasearch'

const admin = algoliasearch('EVUZO6BVAA', '0da5b40d23a908322a0a13f1f634acab');
const indexAlgoliaAdmin = admin.initIndex('my_blog');

const uploadDataAlgolia = function (objects) {
    indexAlgoliaAdmin.saveObjects(objects).then(({ objectIDs }) => {
        console.log(objectIDs);
    });
}

const sendDataSearch = function(data) {
    let dataSends = data.map(post => {
        let obj = {
            objectID: post.slug,
            categories: post.categories[0]?.name || '',
            tags: post.tags,
            title: post.title,
            summary: post.summary
        }
        return obj
    })
    uploadDataAlgolia(dataSends)
}

butter.post.list({
    page: 1,
    page_size: 100
}).then(res => {
    let array = res.data.data
    sendDataSearch(array)
})

const app = createApp(App)
