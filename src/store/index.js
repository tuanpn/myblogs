import { createStore } from 'vuex'

export default createStore({
    state: {
        lastPostObj: {},
        currentCategory: null,
        currentPost: null
    },
    getters: {
        getLastPost(state) {
            return state.currentCategory ? state.lastPostObj[state.currentCategory] : []
        },
        getLastPostByCategory(state) {
            return (category) => {
                return state.lastPostObj[category]
            }
        }
    },
    mutations: {
        saveLastPosts (state, { category, posts} ) {
          state.lastPostObj[category] = posts
        },
        setCurrentCategory(state, category) {
          state.currentCategory = category
        },
        setCurrentPost(state, post) {
            state.currentPost = post
        }
    },
    actions: {
    },
    modules: {
    }
})
