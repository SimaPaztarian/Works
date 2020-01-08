import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import Header from '../KanavaHomePage/Header/Header';
import Main from '../KanavaHomePage/Main/Main';
import "bootstrap/dist/css/bootstrap.min.css";
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-id-swiper/lib/styles/css/swiper.css';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Main/>
			</div>
		);
	}
}

export default App;
