import React from 'react';
import Square from './Square';
export default class DivGeneration extends React.Component {
	render(){
		let squareList = [];
		const count = this.props.count;
		for(let i=0; i<count; i++){			
			const listItem = <li key={i}><Square /></li>;
            squareList.push(listItem);
		};
		return <ul className="list">{squareList}</ul>
	}
} 