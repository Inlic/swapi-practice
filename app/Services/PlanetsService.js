import { ProxyState } from "../AppState.js";
import Planet from "../Models/Planet.js";
// NOTE Api is an instance of Axios, with the baseURL set to the endpoint we are using throughout the app
import { api } from "./AxiosService.js";

class PlanetsService {
  getPlanets() {
    // NOTE "GET" is the method to retrieve data
    api.get('planets')
      .then(res => {
        ProxyState.nextPlanet = res.data.next
        ProxyState.planets = res.data.results.map(p => new Planet(p))
        ProxyState.planets = ProxyState.planets.filter(p => p.climate == "temperate")
        //NOTE mark suggested a recursive process where another api call would be made if there weren't ten results and filling an array
        //TODO consider implementing
      })
      .catch(error => {
        console.error(error)
      })
  }

  next() {
    if (ProxyState.nextPlanet) {
      api.get(ProxyState.nextPlanet)
        .then(res => {
          ProxyState.previousPlanet = res.data.previous
          ProxyState.nextPlanet = res.data.next
          ProxyState.planets = res.data.results.map(p => new Planet(p))
          ProxyState.planets = ProxyState.planets.filter(p => p.climate == "temperate")
        })
        .catch(error => {
          console.error(error)
        })
    }
  }


  previous() {
    if (ProxyState.previousPlanet) {
      api.get(ProxyState.previousPlanet)
        .then(res => {
          ProxyState.previousPlanet = res.data.previous
          ProxyState.nextPlanet = res.data.next
          ProxyState.planets = res.data.results.map(p => new Planet(p))
          ProxyState.planets = ProxyState.planets.filter(p => p.climate == "temperate")
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}


export const planetsService = new PlanetsService();