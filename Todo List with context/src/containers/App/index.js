import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-id-swiper/lib/styles/css/swiper.css';
import TodoWithContext from '../Todo/TodoWithContext'
// import Register from '../Register/Register'
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';

class App extends Component {
	render() {
		return (
			<div>
				<TodoWithContext/>
			</div>
		);
	}
}

export default App;
