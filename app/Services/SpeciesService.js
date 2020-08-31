import { ProxyState } from "../AppState.js";
import Specie from "../Models/Specie.js";
// NOTE Api is an instance of Axios, with the baseURL set to the endpoint we are using throughout the app
import { api } from "./AxiosService.js";

class SpeciesService {
  getSpecies() {
    // NOTE "GET" is the method to retrieve data
    api.get('species')
      .then(res => {
        ProxyState.nextSpecies = res.data.next
        ProxyState.species = res.data.results.map(s => new Specie(s))
      })
      .catch(error => {
        console.error(error)
      })
  }

  next() {
    if (ProxyState.nextSpecies) {
      api.get(ProxyState.nextSpecies)
        .then(res => {
          ProxyState.previousSpecies = res.data.previous
          ProxyState.nextSpecies = res.data.next
          ProxyState.species = res.data.results.map(s => new Specie(s))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }


  previous() {
    if (ProxyState.previousSpecies) {
      api.get(ProxyState.previousSpecies)
        .then(res => {
          ProxyState.previousSpecies = res.data.previous
          ProxyState.nextSpecies = res.data.next
          ProxyState.species = res.data.results.map(s => new Specie(s))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}


export const speciesService = new SpeciesService();