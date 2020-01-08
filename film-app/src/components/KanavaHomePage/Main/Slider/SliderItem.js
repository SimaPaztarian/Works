import React, { Component } from 'react';
import '../Main.css';
import { Slide } from 'pure-react-carousel';

export default class SliderItem extends Component {
	render() {
		return (
			<Slide index={this.props.index}>
				<img src={this.props.src} className="slider-item" alt="" />
				<div className="slider-detail">
					<p>{this.props.name}</p>
					<div className="slider-issue">
						<span>{this.props.issue}</span>
						<img src="/assets/images/icons/stars_deactivate_icons.svg" alt="" />
					</div>
				</div>
			</Slide>
		);
	}
}
