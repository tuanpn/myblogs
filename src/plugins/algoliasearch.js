import algoliasearch from 'algoliasearch/lite'

const client = algoliasearch('EVUZO6BVAA', '5849a3f7e12397123d2a46ca826d0d90');
const indexAlgoliaSearch = client.initIndex('my_blogs');

const requestOptions = {
    headers: { 'X-Algolia-UserToken': 'user123' }
}

const doAlgoliaSearch = function (string, cb) {
    indexAlgoliaSearch.search(string, requestOptions)
        .then(({ hits }) => {
            cb(hits)
        })
}

export { doAlgoliaSearch }
