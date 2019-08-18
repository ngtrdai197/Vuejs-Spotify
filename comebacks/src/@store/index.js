import Vue from 'vue'
import VueX from 'vuex'

import { auth } from './modules/auth'

Vue.use(VueX);

export const store = new VueX.Store({
    modules: {
        AuthModule: auth
    }
})