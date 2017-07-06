import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ListItem(props){
	return (
		<li className="listItem">{props.value}</li>
	);
}

function List(props){
		const empty = props.empty;
		let status;
		status = empty ? "Add items to get started!" : "Keep adding!";

		return (
			<div>
				<div className="status">{status}</div>
				<ul>
					{props.items.map((item, i) => <ListItem value={item} key={i} />)}
				</ul>
			</div>
		);
}

class AddItem extends React.Component {
	render() {
		return (
			<div>
				<input id="itemInput" type="text"></input>
				<button className="addItemButton" onClick={this.addItem}>Add Item</button>
			</div>
		);
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			items: ['Chicken', 'Salsa', "Wine"],
			empty: false,
		};
	}
	render() {
		return (
			<div>
				<List empty={this.state.empty} items={this.state.items}/>
				<AddItem />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
