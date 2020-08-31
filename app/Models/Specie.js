export default class Specie {
  constructor({ name, classification, designation, average_height, average_lifespan, language }) {
    this.name = name
    this.classification = classification
    this.designation = designation
    this.averageHeight = average_height
    this.averageLifespan = average_lifespan
    this.language = language
  }

  get Template() {

    return /*html*/`
    <div class='col-3'>
      <div class="card p-2 value">
          ${this.name} - ${this.classification} - ${this.designation} - ${this.averageLifespan}
      </div>
    </div>
    `
  }
}