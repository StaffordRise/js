import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Greet(props) {

	let phrase = "World";

	return(
		<h1>Hello {props.phrase}! My name is {props.name}</h1>
		)
}

ReactDOM.render(<Greet phrase="World" name="Staff"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
