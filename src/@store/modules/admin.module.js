import { authApi } from '../../@api/auth.api'
import { GET_ALL_MUSICS } from '../actions'

export const admin = {
    namespace: true,
    state: {
        musics: []
    },
    getters: {
        [GET_ALL_MUSICS]: state => state.musics
    },
    mutations: {
        [GET_ALL_MUSICS]: (state, data) => {
            state.musics = data
        }
    },
    actions: {
        async [GET_ALL_MUSICS]({ commit }) {
            const result = await authApi.fetchAll()
            if (result) {
                commit(GET_ALL_MUSICS, result.data)
            }
        }
    }
}