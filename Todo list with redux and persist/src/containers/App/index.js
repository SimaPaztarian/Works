import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-id-swiper/lib/styles/css/swiper.css';
import { Provider } from 'react-redux'
import { store } from '../../boot/redux'
import Todo2Screen from '../Todo/Todo2Screen'
// import Register from '../Register/Register'
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
                <h1>React Component</h1>
                <Todo2Screen/>
            </Provider>
		);
	}
}

export default App;
