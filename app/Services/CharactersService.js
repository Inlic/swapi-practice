import { ProxyState } from "../AppState.js";
import Character from "../Models/Character.js";
// NOTE Api is an instance of Axios, with the baseURL set to the endpoint we are using throughout the app
import { api } from "./AxiosService.js";

class CharactersService {


  getCharacters() {
    // NOTE "GET" is the method to retrieve data
    api.get('people')
      .then(res => {
        ProxyState.nextCharacter = res.data.next
        ProxyState.characters = res.data.results.map(c => new Character(c))
      })
      .catch(error => {
        console.error(error)
      })
  }

  next() {
    if (ProxyState.nextCharacter) {
      api.get(ProxyState.nextCharacter)
        .then(res => {
          ProxyState.previousCharacter = res.data.previous
          ProxyState.nextCharacter = res.data.next
          ProxyState.characters = res.data.results.map(c => new Character(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }


  previous() {
    if (ProxyState.previousCharacter) {
      api.get(ProxyState.previousCharacter)
        .then(res => {
          ProxyState.previousCharacter = res.data.previous
          ProxyState.nextCharacter = res.data.next
          ProxyState.characters = res.data.results.map(c => new Character(c))
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}


export const charactersService = new CharactersService();