// @ts-ignore
const monstersApi = axios.create({
  // NOTE where we are sending our requests to
  baseURL: 'https://botw-compendium.herokuapp.com/api/v3/compendium',
  // NOTE how long we will wait for a response from this API
  timeout: 2000
})

class MonstersService {
  async getMonsters() {

    // NOTE sending request to 'https://botw-compendium.herokuapp.com/api/v3/compendium' + 'category/monsters'
    const response = await monstersApi.get('category/monsters')
    console.log('GOT MONSTERS 📡📡📡📡', response);
  }
}

export const monstersService = new MonstersService()