import React from 'react';
import {Link } from 'react-router-dom';
import PetApiService from '../../services/pet-api-service';
import './LandingPage.css';


import SearchPets from '../../images/searchpets.png';


class LandingPage extends React.Component {    

   state = {
       user : '',
       redirect: false
   }
  
   
   handleChange = e => {
       e.preventDefault();
       
       this.setState({
           user : e.target.value
       })
   }
    handleSubmit = e => {
     
       e.preventDefault();
       PetApiService.createUser(this.state.user).then(res => {
           !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
       })
       
       
    }
  render() {
    return (
      <section className='landing-page'>
    
          <p>Welcome to Petful where we pride ourselves as being the friendliest pet center in the world</p>
          <p>We have lovable pets for adoption. Search through our database and see which furry friend will touch your heart.</p>
          <span>
                    <img id='landing-img' src={SearchPets} alt="search for your new pet"/>
                </span>

        <Link to='/adoption'>Get Started</Link>
        

      </section>
    );
  };
}
export default LandingPage;