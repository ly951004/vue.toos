import { INPUT_DATA } from '../types/home'

const store = {
    state: {
        data: { text: 'hello' }
    },
    mutations: {
        [INPUT_DATA] (state, data) {
            state.data = data
        }
    },
    actions: {
        [INPUT_DATA] ({ commit }, data) {
            commit(INPUT_DATA, data)
        }
    }
}
export default store
