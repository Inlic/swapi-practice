export default class Planet {
  constructor({ name, climate, terrain, population }) {
    this.name = name
    this.climate = climate
    this.terrain = terrain
    this.population = population
  }

  get Template() {

    return /*html*/`
    <div class='col-3'>
      <div class="card p-2 value">
          ${this.name} - ${this.climate} - ${this.terrain} - ${this.population}
      </div>
    </div>
    `
  }
}