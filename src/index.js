import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss';
import App from './app';
import reportWebVitals from './reportWebVitals';

const layout = process.env.REACT_APP_LAYOUT ?? 'data.json';
const layoutFile = `${layout.replace( /['"]+/g, '' )}`;
const layoutConfig = require( `../layouts/${layoutFile}` );

const MOUNT_NODE = document.getElementById( 'root' );

ReactDOM.render(
	<React.StrictMode>
		<App layout={ layoutConfig }/>
	</React.StrictMode>,
	MOUNT_NODE
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
