import React from 'react';
import List from './components/List';

var items = `By default, Babel ships with a set of ES2015 syntax transformers.
	These allow you to use new syntax, right now without waiting for browser support.`
		.split(' ')
		.map((token) =>  {return {value: token}});

document.addEventListener("DOMContentLoaded", (event) => {
	React.render(<List items={items}></List>, document.querySelector('#app'));
});

