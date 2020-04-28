import React from 'react';
import PetApiService from '../services/pet-api-service';
import './Animal.css';

function Cat(props)  {
	/*state = {
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
				cat : res.cat,
				adoptedCats: [...this.state.adoptedCats, res.adopted]
			})
		})
		PetApiService.getCat().then(res => {
			this.setState({
				cat: res.cat
			})
		})
	}
	*/
	

		const {age, breed, description, name, gender, story, imageURL } = props.cat;
		return (
			<div className="cat">
			
			<div>
				<h3>{name}</h3>
				<p>This {age} year old {gender} {breed} cat could be yours. How {name} came to us: {story}. </p>
				<div className='image-container'>
					<img src={imageURL} alt={description}/>
				</div>
				{!props.disable && <button onClick={props.onAdopt}>Adopt</button>}
				{/*</div>
				{this.p.adoptedCats.length > 0 &&<ul className='animal'>Previously adopted : {this.state.adoptedCats.map(cat => <li key={cat.name}>{cat.name}</li>)}</ul>}
			*/}</div>
			</div>
		)
	
}

export default Cat;
