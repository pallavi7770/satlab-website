import React from 'react';

import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import './App.css';

function App() {
    return (
        <div className="App">
	        <Router>
	            <Nav />
	            <Switch>
	           		<Route path="/" exact component={Home}/>
	           		<Route path="/gallery" component={Gallery}/>
	           		<Route path="/contact" component={Contact}/>
	           	</Switch>
	            <Footer />
	        </Router>
        </div>
    );
}

export default App;