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
	
	render() {
		const empty = this.state.empty;
		let status;
		status = empty ? "Add items to get started!" : "Keep adding!";

		return (
			<div>
				<div className="status">{status}</div>
				<ul>
					{this.state.items.map((item, i) => <ListItem value={item} />)}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<List />,
	document.getElementById('root')
);
