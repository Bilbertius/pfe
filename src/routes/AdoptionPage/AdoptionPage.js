import React from 'react';
import PetApiService from '../../services/pet-api-service';
import './AdoptionPage.css';


class AdoptionPage extends React.Component {
  state = {
    users: [],
    dog: {},
    cat: {},
    recentlyAdopted: [],
    intervalId: null,
  }

  async componentDidMount() {
    const userReq = PetApiService.listUsers();
    const catReq = PetApiService.getCat();
    const dogReq = PetApiService.getDog();

    const [users, cat, dog] = await Promise.all([userReq, catReq, dogReq])

    const intervalId = setInterval(() => {
      this.adopt('dog');
    }, 10000) //once the page is loading start the adpotion dog timer

    this.setState({
      users: users.adoptorsLine,
      dog: dog.dog,
      cat: cat.cat,
      intervalId
    })
  }

  async componentDidUpdate(prevProps, prevState) {
    // console.log('in componeneDidUpdate')
    if (prevState.users.length !== 0 && this.state.users.length === 0) {
      const newUsers = await PetApiService.refreshUsers();
      this.setState({ users: newUsers })
    }
  }

  adopt = async (animal) => {
    const userObj = localStorage.getItem('petful-user');
    const name = JSON.parse(userObj).name;

    const currentUser = {
      name: name,
    }

    const response = await PetApiService.adopt(animal, currentUser)
    const newAnimal = await PetApiService.getPets(animal)
    const newUsers = await PetApiService.listUsers()

    this.setState({
      recentlyAdopted: response.adoptedList,
      [animal]: newAnimal[animal],
      users: newUsers.peopleLine,
    })
    this.cancelInterval()
  }

  cancelInterval = () => {
    const userObj = localStorage.getItem('petful-user');
    const name = JSON.parse(userObj).name;
  
    if (this.state.users[0] === name) {

      clearInterval(this.state.intervalId)
    }
  }

  renderUsers = (users) => {

    return users.map((user, i) => {
      return <div className={(i === 0 ? 'user active' : 'user')} key={i}>
        <h4>{user}</h4>
      </div>
    })
  }

  renderCat = (animal) => {
    const {imageURL, name, breed, sex, story } = animal;
    return (<div className='animal'>
      <img src={imageURL} alt='animal-profile-img' className='responsive' />
      <h3>Name: {name}</h3>
      <p>Breed: {breed}</p>
      <p>Gender: {sex}</p>
      <p>Story: {story}</p>
    </div>);
  }

  renderDog = (animal) => {
    const {imageURL, name, breed, sex, story } = animal;
    return (<div className='animal'>
      <img src={imageURL} alt='animal-profile-img' className='responsive' />
      <h3>Name: {name}</h3>
      <p>Breed: {breed}</p>
      <p>Gender: {sex}</p>
      <p>Story: {story}</p>
    </div>);
  }

  renderLastAdopted = () => {
    return (
      this.state.recentlyAdopted.map((result, i) => {
        return <div className='adopted' key={i}>
          <p> {result.name}</p>
        </div>
      })
    )
  }

  canAdopt = () => {

    // console.log('checking user')
    const userObj = localStorage.getItem('petful-user');
    const name = JSON.parse(userObj).name;
    // console.log(this.state.users[0], name)
    if (this.state.users.length) {
      return this.state.users[0] !== name
    }
    else return false

  }

  render() {

    const { users, dog, cat } = this.state;
    return (
      <section className='adoptions-page'>
        <div className='users'>
          <h4>User Line:</h4>
          {this.renderUsers(users)}
        </div>

        <div className='animals'>
          <h2>Up Next to Adopt: </h2>
          <div className='animal-wrapper'>
            <div className='dog-queue'>
              {this.renderDog(dog)}
              <button className='button primary' onClick={() => this.adopt('dog')} disabled={this.canAdopt()}>Adopt {dog.name}</button>
            </div>
            <div className='cat-queue'>
              {this.renderCat(cat)}
              <button className='button primary' onClick={() => this.adopt('cat')} disabled={this.canAdopt()}>Adopt {cat.name}</button>
            </div>
          </div>
        </div>

        <div className='recently-adopted'>
                    <h4>Recently Adopted: </h4>
          <div className='adopted-wrapper'>
            {this.renderLastAdopted()}
          </div>
        </div>
      </section>
    );
  };
}
export default AdoptionPage;


