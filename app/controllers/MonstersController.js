import { AppState } from "../AppState.js";
import { monstersService } from "../services/MonstersService.js";
import { Pop } from "../utils/Pop.js";

export class MonstersController {
  constructor() {
    console.log('Monsters Controller is ready!');
    AppState.on('monsters', this.drawMonsters)
    this.getMonsters()

    // NOTE since our data is coming from an API now, there will be nothing to draw from our AppState on page load
    // ❌ this.drawMonsters()
  }

  getResultBack() {
    // NOTE this bit of code will take 3 seconds for our Promise to resolve/reject
    const result = new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNum = Math.round(Math.random() * 10)

        if (randomNum > 5) {
          resolve(`randomNum was ${randomNum}`)
        }
        else {
          reject(`randomNum was ${randomNum}`)
        }
      }, 3000)
    })

    return result
  }

  async testPromise() {
    try {
      const something = await this.getResultBack()
      console.log('what is something', something);
    } catch (error) {
      console.error('PROMISE WAS REJECTED', error);
    }
  }

  // NOTE async modifier allows us to use the 'await' keyword within functions so that we can pause our code while a promise is resolved 
  async getMonsters() {
    // NOTE if any error is THROWN in the try block, it catches the error and runs the catch code block instead
    try {
      await monstersService.getMonsters()
      Pop.success('Successful request to get the monsters')
    } catch (error) {
      console.error('Could not get monsters from API', error)
      Pop.error(error, "Could not get monsters!")
    }
  }

  // NOTE nothing has changed here
  drawMonsters() {
    const monsters = AppState.monsters
    let monsterCardsContent = ''
    monsters.forEach(monster => monsterCardsContent += monster.card)
    const monsterCardsElem = document.getElementById('monsterCards')
    monsterCardsElem.innerHTML = monsterCardsContent
  }
}