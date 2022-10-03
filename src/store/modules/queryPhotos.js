import PhotoApi from '@/services/PhotoApi'
// import partials from '../partials'

export const namespaced = true

export const state = {
  queryPhotoresults: [],
};

export const getters = {
  searchPhotoResult: (state) => state.queryPhotoresults,
};

export const mutations = {
  returnPhotoResults: (state, queryPhotoresults) => (state.queryPhotoresults = queryPhotoresults),
};

export const actions = {
  async getFilterPhotos({ commit }, query) {
    console.log('helo world')
    PhotoApi.searchedPhotos(query)
      .then(response => {

        commit('returnPhotoResults', response.data)
        console.log('my data is here', response.data)
        // commit('SET_LOAD_STATE', partials.LOAD_STATE.SUCCESS)
      })
      .catch(error => {
        // commit('SET_LOAD_STATE', partials.LOAD_STATE.ERROR)
        console.log('Error: ' + error.response.data.errors[0])
      })
  }
}
