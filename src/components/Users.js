import React from 'react';


export default class Users extends React.Component {
	state = {
	
		users: [],
		currentAdopter: ''
	}
	
	render() {
		
		return (
			<div className="user-list">
			<h3>Users:</h3>
			<ul>
				{this.props.line.map(user => (
					<li key={user}>{user}</li>
				))}
			</ul>
			</div>
		)
	}
	
}