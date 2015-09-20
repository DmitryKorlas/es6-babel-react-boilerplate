// Module in es6 style
import React from 'react';
require('../assets/components/_list.scss');
class List extends React.Component {
	handleItemClick(record) {
		this.props.onSelect(record);
	}

	render() {
		var items = this.props.items.map((record, index) => {
			return <li key={index} onClick={this.handleItemClick.bind(this, record)}>{record.value}</li>
		});
		return <ul className='list'>{items}</ul>
	}
}

export default List;
