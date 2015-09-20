define((require, exports, module) => {

	var React = require('react');
	require('../assets/components/_card.scss');

	class Card extends React.Component{
		render() {

			return (
				<div className='card'>
					{this.props.children}
				</div>
			);
		}
	}

	module.exports = Card;
});