import React from 'react';
import PetApiService from '../services/pet-api-service';
import './Animal.css';

function Dog(props) {
	/*
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
	*/
	
	const {age, breed, description, name, gender, story, imageURL} = props.dog;
	
	return (
		<div className="dog">
			<div>
				<h3>{name}</h3>
				<p>This {age} year old {gender} {breed} dog could be yours. How {name} came to us: {story}. </p>
				<div className="image-container">
					<img src={imageURL} alt={description}/>
				</div>
				{!props.disable && <button onClick={props.onAdopt}>Adopt</button>}
				{/*</div>
					{this.state.adoptedDogs.length > 0 &&<ul className="animal">Previously adopted : {this.state.adoptedDogs.map(dog => <li key={dog.name}>{dog.name}</li>)}</ul>}
			*/}</div>
		</div>
	);
}



export default Dog;
