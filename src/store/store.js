import {createStore} from 'vuex'
import * as photo from './modules/photo'

export default createStore({
  modules: {
    photo,
  }
})
