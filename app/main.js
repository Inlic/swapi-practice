import CharactersController from "./Controllers/CharactersController.js";
import SpeciesController from "./Controllers/SpeciesController.js";
import PlanetsController from "./Controllers/PlanetsController.js"

class App {
  constructor() {
    this.charactersController = new CharactersController();
    this.speciesController = new SpeciesController();
    this.planetsController = new PlanetsController();
  }
}

window["app"] = new App();
