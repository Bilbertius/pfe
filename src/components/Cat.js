import React from 'react';
import PetApiService from '../services/pet-api-service';
import './Animal.css';

export default class Cat extends React.Component {
	state = {
		adoptedCats: [],
		cat: {},
		error: null,
		isAdopted: false,
		
	};
	
	componentDidMount() {
		PetApiService.getCat().then(res => {
			this.setState({
				cat: res.cat
			})
		})
	}
	handleAdopt = (e) =>{
		e.preventDefault();
		
		PetApiService.adoptCat().then(res => {
			this.setState({
				cat: res.newCat,
				adoptedCats: [...this.state.adoptedCats, res.adopted]
			})
		})
	}
	
	render() {
		const {age, breed, description, name, gender, story, imageURL } = this.state.cat;
		return (
			<div className="cat">
			
			<div>
				<h3>{name}</h3>
				<p>This {age} year old {gender} {breed} cat who was {story} could be yours. </p>
				<img src={imageURL} alt={description}/>
				{!this.props.disable && <button onClick={this.handleAdopt}>Adopt</button>}
			</div>
				<ul className='animal'>Previously adopted : {this.state.adoptedCats.map(cat => <li key={cat.name}>{cat.name}</li>)}</ul>
			</div>
		)
	}
}