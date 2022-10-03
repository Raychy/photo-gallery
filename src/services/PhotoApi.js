var accessKey = 'dqFblhWiXOlITzDpS5pI1-f5d3_NAz3gyCN1nuePNNs'
// var secretKey = 'lSPERgyVJ-02nFFNIP-YKKr8Rvgmw3ErO6N2sJOpBT0'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getPhotos() {
    return apiClient.get(
      `/photos?client_id=${accessKey}&per_page=15`
    )
  },
  searchedPhotos({ query }) {
    return apiClient.get(
      `/search/photos?client_id=${accessKey}&query=${query}&per_page=15`
    )
  },
  searchedTechnologyPhotos() {
    return apiClient.get(
      `/search/photos?client_id=${accessKey}&query=technology&per_page=15`
    )
  },
  searchedAnimalPhotos() {
    return apiClient.get(
      `/search/photos?client_id=${accessKey}&query=animal&per_page=15`
    )
  },
  searchedFoodPhotos() {
    return apiClient.get(
      `/search/photos?client_id=${accessKey}&query=food&per_page=15`
    )
  },
  searchedBuildingPhotos() {
    return apiClient.get(
      `/search/photos?client_id=${accessKey}&query=building&per_page=15`
    )
  },
  searchedSportPhotos() {
    return apiClient.get(
      `/search/photos?client_id=${accessKey}&query=sport&per_page=15`
    )
  },

  searchedNaturePhotos() {
    return apiClient.get(
      `/search/photos?client_id=${accessKey}&query=nature&per_page=15`
    )
  },
  searchedCarPhotos() {
    return apiClient.get(
      `/search/photos?client_id=${accessKey}&query=car&per_page=15`
    )
  },
}