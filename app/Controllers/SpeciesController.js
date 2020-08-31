import { ProxyState } from "../AppState.js";
import { speciesService } from "../Services/SpeciesService.js";

function _draw() {
  let specs = ProxyState.species
  let template = ''
  specs.forEach(s => template += s.Template)
  document.getElementById("species").innerHTML = template
}

export default class SpeciesController {
  constructor() {
    // FIXME _draw();
    // NOTE register subscribers first
    ProxyState.on('species', _draw)
    // Go get the relevant data
    speciesService.getSpecies();
  }

  next() {
    speciesService.next()
  }

  previous() {
    speciesService.previous()
  }
}