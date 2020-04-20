import React from 'react';


export default class Users extends React.Component {
	
	constructor(props) {
		super(props)
			this.state = {
				users : []
			}
	}
	
	
	componentDidMount() {
		this.setState({
			users: [...this.props.line]
		})
	}
	
	
	
	render() {
		
		return (
			<div className="user-list">
				<h3>Users:</h3>
					<ul>
						{this.state.users.map(user => (
							<li key={user}>{user}</li>
						))}
					</ul>
			</div>
		)
	}
	
}