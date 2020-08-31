import CharactersController from "./Controllers/CharactersController.js";
import SpeciesController from "./Controllers/SpeciesController.js";

class App {
  constructor() {
    this.charactersController = new CharactersController();
    this.speciesController = new SpeciesController();
  }
}

window["app"] = new App();
