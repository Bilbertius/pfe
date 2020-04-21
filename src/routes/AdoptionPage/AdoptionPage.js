import React from 'react';
import PetApiService from '../../services/pet-api-service';
import './AdoptionPage.css';
import { Link } from 'react-router-dom';
import Cat from '../../components/Cat';
import Dog from '../../components/Dog';
import Users from '../../components/Users';

class AdoptionPage extends React.Component {
	state = {
		user: '',
		adopterWait: null,
		userSubmit: false,
		selected: false,
		disable: true,
		userLine: [],
		currentAdopter: '',
		dog: {},
		cat: {},
		adoptedList: []
	}
	
	componentDidMount() {
		
		PetApiService.listUsers().then(res => {
			this.setState({
				userLine: res.userLine,
				currentAdopter: res.adopter,
				adopterWait: res.userLine.length
			})
		})
		
		PetApiService.getDog().then(res => {
			this.setState({
				dog: res.dog
			})
		})
		PetApiService.getCat().then(res => {
			this.setState({
				cat: res.cat
			})
		})
	}
	
	
	handleChange = e => {
		e.preventDefault();
		this.setState({
			user: e.target.value
		})
	}
	
	handleSubmit = e => {
		this.setState({
			userSubmit: true,
			userLine: [...this.state.userLine, this.state.user]
		})
		
		setTimeout(this.adoptionCycle, 5000);
	}
	
	adoptionCycle = () => {
		
		this.state.userLine.forEach((user, i) => {
			setTimeout(() => {
				if (user === this.state.user) {
					this.setState({
						disable: false,
						currentAdopter: this.state.user,
					})
				} else {
				
					this.setState({
						adopterWait: this.state.adopterWait - 1,
						currentAdopter : user
					});
					let rdn = new Date().getMilliseconds();
					rdn % 2 ? this.handleAdoptCat() : this.handleAdoptDog();
					
				}
			}, 7000 * i)
			
		})
		
	}
	
	
	handleAdoptCat = () => {
		
		
		PetApiService.adoptCat().then(res => {
			if (this.state.adoptedList.length > 0) {
				this.setState({
					cat: res.cat,
					adoptedList: [...this.state.adoptedList, res.adopted]
				})
			} else {
				this.setState({
					cat: res.cat,
					adoptedList: [res.adopted]
				})
			}
		})
		if (this.state.currentAdopter === this.state.user) {
			this.setState({
				disable: true,
				selected: true
			})
		}
	}

	
	
	handleAdoptDog = () => {
	
		
		PetApiService.adoptDog().then(res => {
			if (this.state.adoptedList.length) {
				this.setState({
					dog: res.dog,
				
					adoptedList: [...this.state.adoptedList, res.adopted]
				})
			} else {
				this.setState({
					dog: res.dog,
				
					adoptedList: [res.adopted]
				})
			}
		})
		if (this.state.currentAdopter === this.state.user) {
			this.setState({
				disable: true,
				selected: true
			})
		}
		
	}
	
	
	render() {
		const {user, adopterWait, userSubmit, selected, disable, userLine, currentAdopter, dog, cat, adoptedList} = this.state;
		return (
			
			<div className="adoption-page">
				{userSubmit && <Users className='user-line' line={userLine}/>}
				{userSubmit &&
				<div className="adoption-display">
					<Cat cat={cat} onAdopt={this.handleAdoptCat} disable={disable}/>
					<h3>Recent adoptions: </h3>
					<ul className='adopted-list'>
						{this.state.adoptedList && adoptedList.map((pet, i) => (
							<li key={i}>{userLine[i]} adopted {pet.name} </li>
						))}
					</ul>
					<Dog dog={dog} onAdopt={this.handleAdoptDog} disable={disable}/>
				</div>}
				
				{disable  && <div className='wait-message'><p>Please be patient, only {adopterWait} ahead of you!</p></div>}
				{selected &&
					<div className='adoption-message'>
						<p>Congratulations {user}! You have successfully adopted your new best friend {adoptedList[adoptedList.length - 1].name}</p>
						<img src={adoptedList[adoptedList.length - 1].imgURL} alt="Your new pet"/>
						<Link to="/">Exit</Link>
					</div>}
				{!userSubmit &&
				<div>
					<form id='username-form' onSubmit={this.handleSubmit}>
						<label htmlFor="username">Please enter your name to begin</label>
						<input type='text' name="username" onChange={this.handleChange} value={user}/>
						<button type='submit'>begin</button>
					</form>
				</div>}
			</div>
		)
	}
}

export default AdoptionPage;
