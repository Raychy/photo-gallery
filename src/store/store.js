// import * as Vue from "vue";
// import Vuex from 'vuex'
import {createStore} from 'vuex'

import * as photo from './modules/photo'
import * as queryPhotos from './modules/queryPhotos'

// Vue.use(Vuex)

export default createStore({
  modules: {
    photo,
    queryPhotos
  }
})
