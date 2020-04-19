import React from 'react';
import PetApiService from '../../services/pet-api-service';
import './AdoptionPage.css';
import Cat from '../../components/Cat.js';
import Dog from '../../components/Dog.js';
import Users from '../../components/Users';

class AdoptionPage extends React.Component {
	state={
		user: '',
		userSubmit: false,
		disable: true,
		userLine: [],
		currentAdopter: ''
	}
	
	componentDidMount() {

		PetApiService.listUsers().then(res => {
			this.setState({
				userLine: res.userLine
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
				user === this.state.user ?
					this.setState({disable: false, currentAdopter: this.state.user})
					:
					this.setState({currentAdopter: user});
			},4000 * i)
		})
		
	}

render() {
	console.log(this.state.userLine);
	return (
		
		<div className="adoption-page">
			<Users line={this.state.userLine}/>
			{this.state.userSubmit &&
			<div className="adoption-display">
				<Cat disable={this.state.disable}/>
				<Dog disable={this.state.disable}/>
			</div>}
			
			<h2>{this.state.currentAdopter}</h2>
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