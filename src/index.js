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
		console.log("Add item ", this.props.items);
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
				<AddItem items={this.state.items}/>
			</div>
		);
	}
}

class Cards extends React.Component {
	constructor() {
		super();
		this.state = {
			blue: true,
		}
	}

	changeState() {
		this.setState({'blue': !this.state.blue});
	}

	renderBlue() {
		return (
			<div className="card__blue">
				<h1>Card is blue!</h1>
				<p>Click to make green</p>
				<button onClick={this.changeState.bind(this)}>Click Me!</button>
			</div>
		);
	}

	renderGreen() {
		return (
			<div className="card__green">
				<h1>Card is green!</h1>
				<p>Click to make blue</p>
				<button onClick={this.changeState.bind(this)}>Click Me!</button>
			</div>
		);
	}

	render() {
		if(this.state.blue){
			return this.renderBlue();
		} else {
			return this.renderGreen();
		}
	}
}

ReactDOM.render(
	<Cards />,
	document.getElementById('root')
);
