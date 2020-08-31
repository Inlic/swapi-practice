import { ProxyState } from "../AppState.js";
import { planetsService } from "../Services/PlanetsService.js";

function _draw() {
  let plans = ProxyState.planets
  let template = ''
  plans.forEach(p => template += p.Template)
  document.getElementById("planets").innerHTML = template
}

export default class PlanetsController {
  constructor() {
    // FIXME _draw();
    // NOTE register subscribers first
    ProxyState.on('planets', _draw)
    // Go get the relevant data
    planetsService.getPlanets();
  }

  next() {
    planetsService.next()
  }

  previous() {
    planetsService.previous()
  }
}