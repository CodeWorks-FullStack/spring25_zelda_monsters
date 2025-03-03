import { monstersService } from "../services/MonstersService.js";
import { Pop } from "../utils/Pop.js";

export class MonstersController {
  constructor() {
    console.log('Monsters Controller is ready!');
    this.getMonsters()
  }

  getResultBack() {
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
      console.error('PROMISE WAS REJECTED');
    }
  }

  async getMonsters() {
    try {
      await monstersService.getMonsters()
      Pop.success('Successful request to get the monsters')
    } catch (error) {
      console.error('Could not get monsters from API', error)
      Pop.error(error, "Could not get monsters!")
    }
  }
}