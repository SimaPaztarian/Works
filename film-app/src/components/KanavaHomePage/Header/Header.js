import React, { Component } from 'react';
import '../Header/Header.css';

export default class Header extends Component {
	render() {
		return (
			<header className="app-header">
				<div className="video-container" />
				<div className="container">
					<div className="icon-row">
						<div className="right-icons">
							<img src="/assets/images/icons/battery.svg" alt="" />
							<img src="/assets/images/icons/wifi.svg" alt="" />
							<img src="/assets/images/icons/cellular.svg" alt="" />
						</div>
						<div className="time">
							<span>12:</span>
							<span>14</span>
						</div>
					</div>
					<div className="icon-row">
						<div className="sec-row-icons">
							<img src="/assets/images/icons/burger_menu_icon.svg" alt="" />
						</div>
						<div className="sec-row-icons">
							<img src="/assets/images/icons/search_icon.svg" alt="" />
						</div>
					</div>
					<div className="player-icon">
						<img src="/assets/images/icons/video_player_icon.svg" alt="" />
					</div>
				</div>
				<div className="container" style={{paddingBottom:'20px'}}>
					<div className="header-content">
						<h1>قتل در قطار سریع السیر شرق</h1>
						<div className="issue">
							<span>189 نظر</span>
							<div>
								<img src="/assets/images/icons/stars_icons.svg" alt="" />
							</div>
						</div>
						<div className="seri-btn">
							<a href="#">اکشن</a>
							<a href="#" style={{marginRight:'25px'}}>ترسناک</a>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
