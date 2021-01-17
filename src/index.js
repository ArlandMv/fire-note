import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//tutorial's way es5
//const firebase = require('firebase/app');
//require('firebase/firestore');

//es6
import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//firebase.analytics();

firebase.initializeApp({
	apiKey: 'AIzaSyAVeb6LQSFyY0tU1dsQY-r84R-r4SLOQtE',
	authDomain: 'fire-note-2021.firebaseapp.com',
	projectId: 'fire-note-2021',
	storageBucket: 'fire-note-2021.appspot.com',
	messagingSenderId: '996517787578',
	appId: '1:996517787578:web:3cdd35349f16f992bb0f83',
	measurementId: 'G-MWZ2W620TY',
});

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
