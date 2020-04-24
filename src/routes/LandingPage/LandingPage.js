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
          <p>We have lovable pets for adoption. Come see which furry friend will touch your heart.</p>
       <p>The process begins when  users enter their name and are placed in a line based who arrived first. Then you can see your place 
       in the queue and when it is your turn select cat or dog you would like to adopt. Our policy is that the animals who were here first 
       are always the first to be adopted</p>
          <span>
                    <img id='landing-img' src={SearchPets} alt="search for your new pet"/>
                </span>
       

        <Link to='/adoption'>Get Started</Link>
        

      </section>
    );
  };
}
export default LandingPage;
