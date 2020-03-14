import config from '../config';

const PetApiService = {
  async listUsers() {
    const res = await fetch(`${config.API_ENDPOINT}/people`)
    if (!res.ok) {
      res.json().then(e => Promise.reject(e))
    }
    return res.json();
  },
  
  
  async createUser(user) {
    const res = await fetch(`${config.API_ENDPOINT}/people`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    if (!res.ok) {
      res.json().then(e => Promise.reject(e))
    }
    return res.json();
  },
  
  
  
  async getPets(pet) {
      const res = await fetch(`${config.API_ENDPOINT}/${pet}`)
      if (!res.ok) {
        res.json().then(e => Promise.reject(e))
      }
      return res.json();
  },
  
  
  async getDog() {
    const res = await fetch(`${config.API_ENDPOINT}/dog`)
    if (!res.ok) {
      res.json().then(e => Promise.reject(e))
    }
    return res.json();
  },
  
  
  
  async getCat() {
    const res = await fetch(`${config.API_ENDPOINT}/cat`)
    if (!res.ok) {
      res.json().then(e => Promise.reject(e))
    }
    return res.json();
  },
  
  
  async adopt(animal, name) {
    const res = await fetch(`${config.API_ENDPOINT}/${animal}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(name)
    })
    if (!res.ok) {
      res.json().then(e => Promise.reject(e))
    }
    return res.json().then();
  },
  
  
  
  async refreshUsers() {
    const res = await fetch(`${config.API_ENDPOINT}/people`)
    if (!res.ok) {
      res.json().then(e => Promise.reject(e))
    }
    return res.json();
  }
}
export default PetApiService;