var XX= 22;
import React from 'react';
import List from './List';
import Card from './Card';

require('../assets/components/_mainLayout.scss');
const ALL_ITEMS = `By default, Babel ships with a set of ES2015 syntax transformers.
	 These allow you to use new syntax, right now without waiting for browser support.`
	.split(' ')
	.map((token) => {
		return {value: token}
	});

class MainLayout extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedItem: null
		};
	}

	getListItems() {
		return ALL_ITEMS;
	}

	handleSelect(item) {
		this.setState({selectedItem: item});
	}

	render() {

		var items = this.getListItems();
		var list = <List items={items} onSelect={this.handleSelect.bind(this)}></List>;
		var selectedItem = this.state.selectedItem;
		var cardContent =  selectedItem ? 'selected: '+ selectedItem.value: 'select an item';

		return (
			<div className='mainLayout'>
				<header><h1>Application page</h1></header>
				<main>
					<p>This simple app demonstrates a way of code organizing, build tools, test tools, demos</p>
					<section>
						{list}
						<div>&lt;List/&gt; module written in ES6 style</div>
					</section>
					<section>
						<Card>{cardContent}</Card>
						<div>&lt;Card/&gt; module written in CommonJS style</div>
					</section>
				</main>
			</div>
		);
	}

}

export default MainLayout;