import authApi from '../../@api/auth.api'
export const auth = {
    namespaced: true,
    state: {
        users: [],
        user: {}
    },
    getters: {
        GET_ALL_USERS: state => state.users,
        GET_USER: state => state.user,
    },
    mutations: {
        GET_ALL: (state, data) => {
            state.users = data
        },
        GET_USER: (state, data) => {
            state.user = data
        }
    },
    actions: {
        async GET_ALL({ commit }) {
            const result = await authApi.fetchAll()
            if (result) {
                commit('GET_ALL', result.data)
            }
        },
        async GET_BY_USER_NAME({ commit }) {
            const result = await authApi.getByUsername('nguyendai')
            if (result) {
                commit('GET_USER', result.data)
            }
        }
    }

}