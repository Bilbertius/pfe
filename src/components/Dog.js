import React from 'react';
import PetApiService from '../services/pet-api-service';
import './Animal.css';

export default class Cat extends React.Component {
	state = {
		adoptedDogs: [],
		dog: {},
		error: null,
		isAdopted: false,
		
	};
	
	componentDidMount() {
		PetApiService.getDog().then(res => {
			this.setState({
				dog: res.dog
			})
		})
	}
	
	handleAdopt = (e) =>{
		e.preventDefault();
		
		PetApiService.adoptDog().then(res => {
			this.setState({
				adoptedDogs: [...this.state.adoptedDogs, res.adopted]
			})
		})
		PetApiService.getDog().then(res => {
			this.setState({
				dog: res.dog
			})
		})
	}
	
	
	render() {
		const {age, breed, description, name, gender, story, imageURL } = this.state.dog;
		return (
			<div className="dog">
			
			<div>
				<h3>{name}</h3>
				<p>This {age} year old {gender} {breed} cat who was {story} and {description} could be yours. </p>
				<img src={imageURL} alt="Doggy"/>
				{!this.props.disable && <button onClick={this.handleAdopt}>Adopt</button>}
			</div>
				<ul className="animal">Previously adopted : {this.state.adoptedDogs.map(dog => <li key={dog.name}>{dog.name}</li>)}</ul>
			</div>
		)
	}
}