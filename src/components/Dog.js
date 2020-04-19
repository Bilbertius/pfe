import React from 'react';
import PetApiService from '../services/pet-api-service';
import './Animal.css';

export default class Dog extends React.Component {
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
				dog: res.newDog,
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
				<p>This {age} year old {gender} {breed} dog who was {story}  could be yours. </p>
				<div className="image-container">
					<img src={imageURL} alt={description}/>
				</div>
				{!this.props.disable && <button onClick={this.handleAdopt}>Adopt</button>}
			</div>
				{this.state.adoptedDogs.length > 0 &&<ul className="animal">Previously adopted : {this.state.adoptedDogs.map(dog => <li key={dog.name}>{dog.name}</li>)}</ul>}
			</div>
		)
	}
}