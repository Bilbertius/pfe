import React from 'react';
import PetApiService from '../../services/pet-api-service';
import './AdoptionPage.css';
import Cat from '../../components/Cat';
import Dog from '../../components/Dog';
import Users from '../../components/Users';

class AdoptionPage extends React.Component {
	state={
		user: '',
		adopter: '',
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
				prevAdopter : res.adopter
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
			userLine: [ ...this.state.userLine, this.state.user]
		})

		setTimeout(this.adoptionCycle, 1000);
	}
	
	adoptionCycle = () => {
		
		this.state.userLine.forEach((user, i) => {
			setTimeout(() => {
				if(user === this.state.user) {
					this.setState({
						disable: false,
						currentAdopter: this.state.user,
					})
				} else {
					this.setState({currentAdopter: user});
					let rdn = new Date().getMilliseconds();
					
				}
				
				
			},4000 * i)
			
		})
		
	}
	
	
	
	
	handleAdoptCat = (e) =>{
		e.preventDefault();
		
		PetApiService.adoptCat().then(res => {
			this.setState({
				cat : res.cat,
				adopter: this.state.currentAdopter,
				adoptedCats: [...this.state.adoptedCats, res.adopted]
			})
		})
	}
	handleAdoptDog = (e) =>{
		e.preventDefault();
		
		PetApiService.adoptDog().then(res => {
			this.setState({
				dog: res.newDog,
				adopter: this.state.currentAdopter,
				adoptedDogs: [...this.state.adoptedDogs, res.adopted]
			})
		})
		
	}

render() {
	const { adoptedList } = this.state.adoptedList;
	return (
		
		<div className="adoption-page">
			<Users line={this.state.userLine}/>
			{this.state.userSubmit &&
			<div className="adoption-display">
				<Cat cat={this.state.cat} onAdopt={this.handleAdoptCat}   disable={this.state.disable}/>
				<ul>
				{adoptedList && adoptedList.map((pet, i) => (
					<li key={i}>{pet.name} adopted by {this.state.adopter}</li>
				))}
				</ul>
				<Dog dog={this.state.dog} onAdopt={this.handleAdoptDog}   disable={this.state.disable}/>
			</div>}
			
			{!this.state.selected &&<h2>Currently selecting: {this.state.currentAdopter}</h2>}
			{this.state.selected && <p>Congratulations. You have successfully picked your new best friend!!</p>}
			{!this.state.userSubmit &&
			<div>
				<form id='username-form' onSubmit={this.handleSubmit}>
					<label htmlFor="username">Please enter your name to begin</label>
					<input type='text' name="username" onChange={this.handleChange} value={this.state.user} />
					<button type='submit'>begin</button>
				</form>
				</div>}
		</div>
	)
}


}
export default AdoptionPage;
