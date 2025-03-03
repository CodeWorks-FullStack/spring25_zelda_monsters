export class MonstersController {
  constructor() {
    this.testPromise()
    console.log('Monsters Controller is ready!');
  }

  getResultBack() {
    const result = new Promise((resolve) => {
      setTimeout(() => {
        resolve('All done, here is the result')
      }, 3000)
    })

    return result
  }

  async testPromise() {
    const something = await this.getResultBack()

    console.log('what is something', something);

  }
}