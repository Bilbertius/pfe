import React from 'react';
import {Link } from 'react-router-dom';
import PetApiService from '../../services/pet-api-service';
import './LandingPage.css';
import SearchPets from '../../images/searchpets.png';


class LandingPage extends React.Component {    

   async handleSubmit(e) {
        e.preventDefault();
        const { name } = e.target;

        const newUser = {
          name: name.value,
        };

        localStorage.setItem('petful-user', JSON.stringify(newUser));
        await PetApiService.createUser(newUser);
 
      }
  
    
  render() {
    return (
      <section className='landing-page'>
    
          <p>Welcome to Petful where we pride ourselves as being the friendliest pet center in the world</p>
          <p>We have lovable pets for adoption. Search through our database and see which furry friend will touch your heart.</p>
          <span>
                    <img id='landing-img' src={SearchPets} alt="search for your new pet"/>
                </span>

        <form action='#' id='user-name' onSubmit={(e) => this.handleSubmit(e)}>
          <div className='form-group'>
           
            <input type='text' name='name' id='name' placeholder={'Insert name here'} required/>
          </div>
          <div className='form-group cta'>
              <button type='submit' className='submit-button'><Link to='/adoption'>Begin adoption</Link></button>
          </div>
        </form>
        

      </section>
    );
  };
}
export default LandingPage;