import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";

// NOTE our axios instance that we will use to send requests to APIs
// @ts-ignore
const monstersApi = axios.create({
  // NOTE where we are sending our requests to
  baseURL: 'https://botw-compendium.herokuapp.com/api/v3/compendium',
  // NOTE how long we will wait for a response from this API
  timeout: 2000
})

class MonstersService {
  async getMonsters() {
    // NOTE sending GET request to 'https://botw-compendium.herokuapp.com/api/v3/compendium' + '/category/monsters'
    const response = await monstersApi.get('category/monsters')
    // NOTE response data from an axios response will be the response's body (the data we care about)
    console.log('GOT MONSTERS 📡📡📡📡', response.data);
    // NOTE map will return a new array of different data. We convert all of the objects sent from the other API into our own personal class objects
    const monsters = response.data.data.map(pojo => new Monster(pojo))
    AppState.monsters = monsters // triggers observer
    console.log('monsters!', AppState.monsters);
  }
}

export const monstersService = new MonstersService()