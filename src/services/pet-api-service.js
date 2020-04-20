import config from '../config';

const PetApiService = {
  
  async listUsers() {
    const res = await fetch(`${config.API_ENDPOINT}/user`);
    return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
  },
  
  
  async createUser(user) {
    const res = await fetch(`${config.API_ENDPOINT}/user`, {
  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(user),
    });
    return !res.ok ? res.json().then(err => Promise.reject(err.statusText)) : res.json();
  },
  

  
  async getDog() {
    const res = await fetch(`${config.API_ENDPOINT}/dog`);
    return !res.ok ?res.json().then(e => Promise.reject(e)) : res.json();
  },
  
  
  
  async getCat() {
    const res = await fetch(`${config.API_ENDPOINT}/cat`);
    return !res.ok ?res.json().then(e => Promise.reject(e)) : res.json();
  },
  
  async userAdopted(){
    const res = await fetch(`${config.API_ENDPOINT}/user`, {
      method : 'DELETE',
      headers: {
        'Content-type' : 'application/json'
      }
    });
    return !res.ok ?res.json().then(e => Promise.reject(e)) : res.json();
  },
  
  
  async adoptCat() {
    const res = await fetch(`${config.API_ENDPOINT}/cat`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return !res.ok ?res.json().then(e => Promise.reject(e)) : res.json();
  },
  
  async adoptDog() {
    const res = await fetch(`${config.API_ENDPOINT}/dog`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return !res.ok ?res.json().then(e => Promise.reject(e)) : res.json();
  }
  
  
};
export default PetApiService;