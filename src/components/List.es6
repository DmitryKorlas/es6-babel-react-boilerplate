import React from 'react';
class List extends React.Component{
	render() {
		var items = this.props.items.map((record, index) => {
			return <li key={index}>{record.value}</li>
		});
		return <ul>{items}</ul>
	}
}

export default List;
