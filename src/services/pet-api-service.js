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
    });
    return !res.ok ? res.json().then(err => Promise.reject(err.statusText)) : res.json();
  },
  
  
  
  async getPets(pet) {
      const res = await fetch(`${config.API_ENDPOINT}/${pet}`);
      return !res.ok ? res.json().then(err => Promise.reject(err.statusText)) : res.json();
  },
  
  
  async getDog() {
    const res = await fetch(`${config.API_ENDPOINT}/dog`);
    return !res.ok ?res.json().then(e => Promise.reject(e)) : res.json();
  },
  
  
  
  async getCat() {
    const res = await fetch(`${config.API_ENDPOINT}/cat`)
    return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
  },
  
  
  
  async adopt(animal, name) {
    const res = await fetch(`${config.API_ENDPOINT}/${animal}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(name)
    });
      return res.ok ? Promise.resolve('Animal successfully adopted') : Promise.reject('Cannot complete adoption, try again in a moment');
      
   
  },
  
  
  
  async refreshUsers() {
    const res = await fetch(`${config.API_ENDPOINT}/people`);
    return !res.ok ?res.json().then(e => Promise.reject(e)) : res.json();
    
  }
};
export default PetApiService;