export class Monster {
  constructor(data) {
    this.commonLocations = data.common_locations
    this.description = data.description
    this.isDLC = data.dlc
    this.drops = data.drops
    // NOTE we can use the API's assigned ids instead of generating our own
    this.id = data.id
    this.image = data.image
    this.name = data.name
  }

  get card() {
    return `
    <div class="col-md-4">
      <div class="bg-light shadow">
        <img src="https://botw-compendium.herokuapp.com/api/v3/compendium/entry/treasure_octorok/image"
          alt="some monster" class="monster-img">
        <div class="p-2">
          <p class="fs-2">
            Octorok <span class="mdi mdi-download-circle-outline"></span>
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere accusamus accusantium magni amet? Id
            non
            dolorum ea praesentium aut repudiandae!</p>
          <p>Locations</p>
          <ul>
            <li>The river</li>
            <li>The Mountain</li>
          </ul>
          <p>Drops</p>
          <ul>
            <li>Treasure</li>
            <li>Hot Dogs</li>
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