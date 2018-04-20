import axios from "axios";

export default {
  search: function(query) {
    return axios.get("https://dog.ceo/api/breed/" + query + "/images");
  },
  getList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  },
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  }
};
