import React, { Component } from 'react';
import '../Main.css';

export default class FeatureItem extends Component {
	render() {
		return (
			<div className="feature-box">
				<img src={this.props.src} alt="" />
				<p>{this.props.txt}</p>
			</div>
		);
	}
}
