import PhotoApi from '@/services/PhotoApi'
import partials from '../partials'

export const namespaced = true

export const state = {
  photos: [],
  queryPhotos: [],
  technologyPhotos:[],
  animalPhotos:[],
  sportPhotos:[],
  naturePhotos:[],
  buildingPhotos:[],
  carPhotos:[],
  searchFound: false,
  loadState: partials.LOAD_STATE.LOADING,
}

export const mutations = {
  SET_PHOTOS: (state, photos) => state.photos = photos,
  SET_LOAD_STATE: (state, value) => (state.loadState = value),
  SET_FILTER_PHOTOS: (state, queryPhotos) => (state.queryPhotos = queryPhotos),
  SET_SEARCH_STATUS: (state, searchFound) => (state.searchFound = searchFound),
  SET_FILTER_TECHNOLOGY_PHOTOS: (state, technologyPhotos) => (state.technologyPhotos = technologyPhotos),
  SET_FILTER_ANIMAL_PHOTOS: (state, animalPhotos) => (state.animalPhotos = animalPhotos),
  SET_FILTER_FOOD_PHOTOS: (state, foodPhotos) => (state.foodPhotos = foodPhotos),
  SET_FILTER_BUILDING_PHOTOS: (state, buildingPhotos) => (state.buildingPhotos = buildingPhotos),
  SET_FILTER_SPORT_PHOTOS: (state, sportPhotos) => (state.sportPhotos = sportPhotos),
  SET_FILTER_NATURE_PHOTOS: (state, naturePhotos) => (state.naturePhotos = naturePhotos),
  SET_FILTER_CAR_PHOTOS: (state, carPhotos) => (state.carPhotos = carPhotos),
}
export const getters = {
  searchPhotoResult: (state) => state.queryPhotos,
  // searchTechnologyResult: (state) => state.technologyPhotos,
};

export const actions = {
  fetch({ commit }) {

    PhotoApi.getPhotos()
      .then(response => {
        commit('SET_PHOTOS', response.data)
        // console.log('hello res', response.data)
        // commit('SET_TOTAL_PHOTOS', response.headers['x-total'])
        // commit('SET_PAGE', page)
        // commit('SET_ORDER', order)
        commit('SET_LOAD_STATE', partials.LOAD_STATE.SUCCESS)
      })
      .catch(error => {
        commit('SET_LOAD_STATE', partials.LOAD_STATE.ERROR)
        console.log('Error: ' + error.response.data.errors[0])
      })
  },
  async getSearchPhotos({ commit }, search) {
    console.log('helo world')
    PhotoApi.searchedPhotos({ query: search })
      .then(response => {

        commit('SET_FILTER_PHOTOS', response.data.results)
        if(response.data.results.length > 0){
          commit('SET_SEARCH_STATUS', true)
          console.log('my search data is here', response.data)
          commit('SET_LOAD_STATE', partials.LOAD_STATE.SUCCESS)
        }
        else{
          commit('SET_SEARCH_STATUS', false)
        }
       
        
      })
      .catch(error => {
        commit('SET_SEARCH_STATUS', false)
        commit('SET_LOAD_STATE', partials.LOAD_STATE.ERROR)
        console.log('Error: ' + error.response.data.errors[0])
      })
  },
  fetchTechnologyPhotos({ commit }) {
    PhotoApi.searchedTechnologyPhotos()
      .then(response => {
        commit('SET_FILTER_TECHNOLOGY_PHOTOS', response.data.results)
        // console.log(response.data.results)
        
        commit('SET_LOAD_STATE', partials.LOAD_STATE.SUCCESS)
      })
      .catch(error => {
        commit('SET_LOAD_STATE', partials.LOAD_STATE.ERROR)
        console.log('Error: ' + error.response.data.errors[0])
      })
  },
  fetchAnimalPhotos({ commit }) {
    PhotoApi.searchedAnimalPhotos()
      .then(response => {
        commit('SET_FILTER_ANIMAL_PHOTOS', response.data.results)
        // console.log(response.data.results)
        
        commit('SET_LOAD_STATE', partials.LOAD_STATE.SUCCESS)
      })
      .catch(error => {
        commit('SET_LOAD_STATE', partials.LOAD_STATE.ERROR)
        console.log('Error: ' + error.response.data.errors[0])
      })
  },
  fetchFoodPhotos({ commit }) {
    PhotoApi.searchedFoodPhotos()
      .then(response => {
        commit('SET_FILTER_FOOD_PHOTOS', response.data.results)
        // console.log(response.data.results)
        
        commit('SET_LOAD_STATE', partials.LOAD_STATE.SUCCESS)
      })
      .catch(error => {
        commit('SET_LOAD_STATE', partials.LOAD_STATE.ERROR)
        console.log('Error: ' + error.response.data.errors[0])
      })
  },
  fetchSportPhotos({ commit }) {
    PhotoApi.searchedSportPhotos()
      .then(response => {
        commit('SET_FILTER_SPORT_PHOTOS', response.data.results)
        // console.log(response.data.results)
        
        commit('SET_LOAD_STATE', partials.LOAD_STATE.SUCCESS)
      })
      .catch(error => {
        commit('SET_LOAD_STATE', partials.LOAD_STATE.ERROR)
        console.log('Error: ' + error.response.data.errors[0])
      })
  },
  fetchBuildingPhotos({ commit }) {
    PhotoApi.searchedBuildingPhotos()
      .then(response => {
        commit('SET_FILTER_BUILDING_PHOTOS', response.data.results)
        // console.log(response.data.results)
        
        commit('SET_LOAD_STATE', partials.LOAD_STATE.SUCCESS)
      })
      .catch(error => {
        commit('SET_LOAD_STATE', partials.LOAD_STATE.ERROR)
        console.log('Error: ' + error.response.data.errors[0])
      })
  },
  fetchNaturePhotos({ commit }) {
    PhotoApi.searchedNaturePhotos()
      .then(response => {
        commit('SET_FILTER_NATURE_PHOTOS', response.data.results)
        // console.log(response.data.results)
        
        commit('SET_LOAD_STATE', partials.LOAD_STATE.SUCCESS)
      })
      .catch(error => {
        commit('SET_LOAD_STATE', partials.LOAD_STATE.ERROR)
        console.log('Error: ' + error.response.data.errors[0])
      })
  },
  fetchCarPhotos({ commit }) {
    PhotoApi.searchedCarPhotos()
      .then(response => {
        commit('SET_FILTER_CAR_PHOTOS', response.data.results)
        // console.log(response.data.results)
        
        commit('SET_LOAD_STATE', partials.LOAD_STATE.SUCCESS)
      })
      .catch(error => {
        commit('SET_LOAD_STATE', partials.LOAD_STATE.ERROR)
        console.log('Error: ' + error.response.data.errors[0])
      })
  },
}
