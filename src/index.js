import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ListItem(props){
	return (
		<li className="listItem">{props.value}</li>
	);
}

class List extends React.Component {
	constructor() {
		super();
		this.state = {
			items: ['Chicken', 'Salsa', "Wine"],
			empty: false,
		};
	}

	renderItem(i) {
		return (
			<ListItem
				value={this.state.items[i]}
			/>
		);
	}

	render() {
		const empty = this.state.empty;
		let status;
		status = empty ? "Add items to get started!" : "Keep adding!";

		return (
			<div>
				<div className="status">{status}</div>
				<ul>
					{this.renderItem(0)}
					{this.renderItem(1)}
					{this.renderItem(2)}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<List />,
	document.getElementById('root')
);
