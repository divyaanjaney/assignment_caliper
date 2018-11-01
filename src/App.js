import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import Search from './components/Search/Search';
import Card from './components/Card/Card';
import CardDetails from './components/CardDetails/CardDetails';
import './App.css'

class App extends Component {

	render() {
		return (
			<div>
				<div className='headerMargin'>
						<Header />
				</div>
				<div className='row'>
					<div className='col-md-1 col-padding'>
						<NavBar />
					</div>
					<div className='col-md-11 col-padding'>
						<Tabs />
						<Search />
						<Card />
						<CardDetails/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;