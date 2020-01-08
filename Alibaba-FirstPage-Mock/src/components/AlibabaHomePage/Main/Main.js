import React, { Component } from 'react';
import './Main.css';
import { Carousel } from 'antd';
import PanelItem from './PanelItem/PanelItem';
import DomesticFlight from './PanelItem/Items/DomesticFlight';

export default class Main extends Component {
	state = {
		current: ''
	};
	onChangeCurrent = (elem) => {
		this.setState({
			current: elem
		});
	};
	render() {
		return (
			<div style={{ paddingTop: '65px' }}>
				<section className="searchPanel">
					<div className="searchPanel-cover" />
					<div className="container">
						<ul className="search-panel-item-box">
							<PanelItem
								src="/assets/images/icon5.svg"
								onClick={() => this.onChangeCurrent('domesticFlight')}
								active={this.state.current === 'domesticFlight'}
								txt="پرواز داخلی"
							/>
							<PanelItem
								src="/assets/images/icon6.svg"
								onClick={() => this.onChangeCurrent('internationalFlight')}
								active={this.state.current === 'internationalFlight'}
								txt="پرواز خارجی"
							/>
							<PanelItem
								src="/assets/images/icon7.svg"
								onClick={() => this.onChangeCurrent('train')}
								active={this.state.current === 'train'}
								txt="قطار"
							/>
							<PanelItem
								src="/assets/images/icon8.svg"
								onClick={() => this.onChangeCurrent('bus')}
								active={this.state.current === 'bus'}
								txt="اتوبوس"
							/>
							<PanelItem
								src="/assets/images/icon9.svg"
								onClick={() => this.onChangeCurrent('tour')}
								active={this.state.current === 'tour'}
								txt="تور"
							/>
							<PanelItem
								src="/assets/images/icon10.svg"
								onClick={() => this.onChangeCurrent('hotel')}
								active={this.state.current === 'hotel'}
								txt="هتل"
							/>
						</ul>
						<DomesticFlight />
					</div>
					<div className="main-carousel">
						<div className="container">
							<Carousel autoplay>
								<div>
									<img className="main-carousel-img" src="/assets/images/c1.jpg" alt="" />
								</div>
								<div>
									<img className="main-carousel-img" src="/assets/images/c2.jpg" alt="" />
								</div>
								<div>
									<img className="main-carousel-img" src="/assets/images/c3.jpg" alt="" />
								</div>
								<div>
									<img className="main-carousel-img" src="/assets/images/c4.jpg" alt="" />
								</div>
							</Carousel>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
