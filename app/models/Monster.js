export class Monster {
  constructor(data) {
    this.commonLocations = data.common_locations ?? []
    this.drops = data.drops ?? []
    this.description = data.description
    this.isDLC = data.dlc
    // NOTE we can use the API's assigned ids instead of generating our own
    this.id = data.id
    this.image = data.image
    this.name = data.name
  }

  get dlcIcon() {
    if (this.isDLC) {
      return '<span class="mdi mdi-download-circle-outline"></span>'
    }

    return ''
  }

  get locationListItems() {
    if (this.commonLocations.length == 0) {
      return 'No locations'
    }

    let listItems = ''
    this.commonLocations.forEach(location => listItems += `<li>${location}</li>`)
    return listItems
  }
  get dropListItems() {
    if (this.drops.length == 0) {
      return 'No drops'
    }

    let listItems = ''
    this.drops.forEach(drop => listItems += `<li>${drop}</li>`)
    return listItems
  }

  get card() {
    return `
    <div class="col-md-4">
      <div class="bg-light shadow mb-3">
        <img src="${this.image}" alt="${this.name}" class="monster-img">
        <div class="p-2">
          <p class="fs-2 text-capitalize">
            ${this.name} ${this.dlcIcon}
          </p>
          <p>${this.description}</p>
          <p>Locations</p>
          <ul>
            ${this.locationListItems}
          </ul>
          <p>Drops</p>
          <ul>
            ${this.dropListItems}
          </ul>
        </div>

      </div>
    </div>
    `
  }
}

// let exampleData = {
//   "category": "monsters",
//   "common_locations": [
//     "Gerudo Highlands",
//     "Gerudo Desert"
//   ],
//   "description": "These particularly clever monsters bury themselves in deep sand or snow and disguise themselves as treasure chests. Anyone who approaches the chests is attacked. The treasures chests are not magnetic, which proves that they are actually a part of these monsters' bodies.",
//   "dlc": false,
//   "drops": [
//     "octorok tentacle",
//     "octo balloon",
//     "octorok eyeball",
//     "green rupee",
//     "blue rupee",
//     "red rupee",
//     "purple rupee",
//     "silver rupee"
//   ],
//   "id": 96,
//   "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/treasure_octorok/image",
//   "name": "treasure octorok"
// }