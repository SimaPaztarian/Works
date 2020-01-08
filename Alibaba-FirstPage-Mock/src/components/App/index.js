import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import Header from '../AlibabaHomePage/Header/Header';
import Main from '../AlibabaHomePage/Main/Main';
import Footer from '../AlibabaHomePage/Footer/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Main />
				<Footer/>
			</div>
		);
	}
}

export default App;
