import React, { Component } from 'react';
import '../Main/Main.css';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import SliderItem from './Slider/SliderItem';
import FeatureItem from './FeatureItem/FeatureItem';

export default class Main extends Component {
	state = {
		movie: [
			{
				id: 0,
				img: '/assets/images/Thumb.png',
				name: 'مهتاب',
				issue: 312
			},
			{
				id: 1,
				img: '/assets/images/Thumb 1.png',
				name: 'جنگ ستارگان',
				issue: 295
			},
			{
				id: 2,
				img: '/assets/images/Thumb 2.png',
				name: 'DeepWater Horizon',
				issue: 312
			},
			{
				id: 3,
				img: '/assets/images/Thumb 3.png',
				name: 'The Shape Of Water',
				issue: 295
			},
			{
				id: 4,
				img: '/assets/images/Thumb 4.png',
				name: 'Un Beau Soleil Interieur',
				issue: 312
			},
			{
				id: 5,
				img: '/assets/images/Thumb 5.png',
				name: 'LOGAN',
				issue: 295
			},
			{
				id: 6,
				img: '/assets/images/Thumb 6.png',
				name: 'DUNKRIK',
				issue: 312
			},
			{
				id: 7,
				img: '/assets/images/Thumb 7.png',
				name: 'REMEMORY',
				issue: 295
			}
		]
	};
	render() {
		return (
			<main className="container">
				<div className="main-row">
					<div className="title">
						<h1>فیلم های بر روی تئاتر</h1>
						<p>دیدن همه</p>
					</div>
					<div style={{ margin: '25px 0' }}>
						<CarouselProvider naturalSlideWidth={70} naturalSlideHeight={100} totalSlides={8}>
							<Slider>
								{this.state.movie.map((item) => {
									return (
										<SliderItem
											key={item.id}
											index={item.id}
											src={item.img}
											name={item.name}
											issue={item.issue + 'نظر'}
										/>
									);
								})}
							</Slider>
						</CarouselProvider>
					</div>
				</div>
				<div className="main-row">
					<div className="title">
						<h1>به زودی</h1>
						<p>دیدن همه</p>
					</div>
					<span className="second-title" style={{ marginTop: '15px' }}>
						فردا
					</span>
					<div className="feature-content">
						{this.state.movie.slice(0, 3).map((item) => {
							return <FeatureItem key={item.id} src={item.img} txt={item.name} />;
						})}
					</div>
				</div>
				<div className="main-row" style={{ marginTop: '20px' }}>
					<span className="second-title">خرداد 16</span>
					<div className="feature-content">
						{this.state.movie.slice(4, 7).map((item) => {
							return <FeatureItem key={item.id} src={item.img} txt={item.name} />;
						})}
					</div>
				</div>
				<div className="main-row main-footer">
					<span className="second-title">دیدن بیشتر</span>
					<div className="line" />
				</div>
			</main>
		);
	}
}
