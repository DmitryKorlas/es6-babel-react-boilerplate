import React from 'react';
import MainLayout from './components/MainLayout';

document.addEventListener("DOMContentLoaded", (event) => {
	React.render(<MainLayout />, document.querySelector('#app'));
});
