import React from 'react';

export default class Square extends React.Component {
	render(){
		const randRGB = () => {
			const rand = () => { return Math.floor(Math.random()*255)};
			return 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')';
		};
		return <div className="square" style={{background: randRGB()}}></div>
	}
}