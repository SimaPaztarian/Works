import React, { Component } from 'react';
import '../../Main.css';
import { Radio } from 'antd';

export default class DomesticFlight extends Component {
	state = {
		value: 1
	};

	onChange = (e) => {
		this.setState({
			value: e.target.value
		});
	};
	render() {
		return (
			<div className="items-panel">
				<Radio.Group onChange={this.onChange} value={this.state.value}>
					<Radio value={1}>یک طرفه</Radio>
					<Radio value={2}>رفت و برگشت</Radio>
				</Radio.Group>
				<div className="input-pair">
					<div className="multi-select">
						<div className="location-icon">
							<img src="/assets/images/icon17.svg" alt="" />
						</div>
						<div className="multiselect-tags">
							<input type="text" name="" id="" placeholder="مبدا" className="multiselect-tags-input" />
						</div>
						<button className="switch-btn">
							<img src="/assets/images/icon15.svg" alt="" />
						</button>
						<div className="location-icon location-icon2">
							<img src="/assets/images/icon17.svg" alt="" />
						</div>
						<div
							className="multiselect-tags"
							style={{ borderBottom: '1px solid #e1e1e1', borderRadius: ' 0 0 4px 4px' }}
						>
							<input type="text" name="" id="" placeholder="مقصد" className="multiselect-tags-input" />
						</div>
					</div>
				</div>
				<div className="input-pair">
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<div className="datepicker-input">
							<span className="datepicker-icon">
								<img src="/assets/images/icon16.svg" alt="" />
							</span>
							<input type="text" placeholder="رفت" />
						</div>
						<div className="datepicker-input" style={{ borderRadius: '4px 0 0 4px', borderRight: '0' }}>
							<span className="datepicker-icon" style={{ backgroundColor: '#f2f2f2' }}>
								<img src="/assets/images/icon16.svg" alt="" />
							</span>
							<input type="text" placeholder="برگشت" style={{ backgroundColor: '#f2f2f2' }} />
						</div>
					</div>
				</div>
				<div className="input-pair">
					<div style={{ position: 'relative' }}>
						<div className="location-icon">
							<img src="/assets/images/icon4.svg" alt="" />
						</div>
						<div
							className="multiselect-tags"
							style={{ borderRadius: '4px', borderBottom: '1px solid #e1e1e1' }}
						>
							<input className="multiselect-tags-input" type="text" placeholder="1 مسافر" />
						</div>
					</div>
				</div>
				<div className="input-pair">
					<button className="search-btn">جستجو</button>
				</div>
			</div>
		);
	}
}
