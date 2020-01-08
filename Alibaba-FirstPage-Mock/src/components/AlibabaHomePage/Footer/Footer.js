import React, { Component } from 'react';
import '../Footer/Footer.css';

export default class Footer extends Component {
	render() {
		return (
			<footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="footer-title">علی بابا</div>
					</div>
					<div className="row">
						<div className="footer-list">
							<ul className="lists">
								<li className="list-item">
									<a href="#">درباره ما</a>
								</li>
								<li className="list-item">
									<a href="#">تماس با ما</a>
								</li>
								<li className="list-item">
									<a href="#">چرا علی‌بابا</a>
								</li>
								<li className="list-item">
									<a href="#">باشگاه مشتریان</a>
								</li>
							</ul>
						</div>
						<div className="footer-list">
							<ul className="lists">
								<li className="list-item">
									<a href="#">درباره ما</a>
								</li>
								<li className="list-item">
									<a href="#">تماس با ما</a>
								</li>
								<li className="list-item">
									<a href="#">چرا علی‌بابا</a>
								</li>
								<li className="list-item">
									<a href="#">باشگاه مشتریان</a>
								</li>
								<li className="list-item">
									<a href="#">قوانین و مقررات</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="row" style={{ direction: 'rtl' }}>
						<div className="footer-title">اطلاعات تکمیلی</div>
						<ul className="lists" style={{ marginRight: '15px' }}>
							<li className="list-item">
								<a href="#">بلیط چارتر</a>
							</li>
							<li className="list-item">
								<a href="#">راهنمای خرید بلیط هواپیما(داخلی)</a>
							</li>
							<li className="list-item">
								<a href="#">راهنمای خرید بلیط هواپیما(خارجی)</a>
							</li>
							<li className="list-item">
								<a href="#">راهنمای خرید بلیط قطار</a>
							</li>
							<li className="list-item">
								<a href="#">راهنمای خرید بلیط اتوبوس</a>
							</li>
							<li className="list-item">
								<a href="#">راهنمای رزرو هتل خارجی</a>
							</li>
							<li className="list-item">
								<a href="#">راهنمای استرداد بلیط</a>
							</li>
							<li className="list-item">
								<a href="#">بلیط قطار</a>
							</li>
							<li className="list-item">
								<a href="#">خرید بلیط هواپیما خارجی</a>
							</li>
							<li className="list-item">
								<a href="#">اطلاعات فرودگا‌هی</a>
							</li>
							<li className="list-item">
								<a href="#">شیوه‌نامه حقوق مسافر</a>
							</li>
						</ul>
					</div>
					<div className="row">
						<div className="footer-title">اپلیکیشن علی بابا</div>
						<div className="app-download">
							<a href="#">
								<img src="/assets/images/icon11.svg" alt="" />
							</a>
							<a href="#">
								<img src="/assets/images/icon13.svg" alt="" />
							</a>
							<a href="#">
								<img src="/assets/images/icon12.svg" alt="" />
							</a>
						</div>
					</div>
					<div className="row">
						<div className="footer-content">
							<img className="footer-logo" src="/assets/images/icon14.svg" alt="" />
							<ul className="contact-info">
								<li className="address">قیطریه، بلوار اندرزگو، نبش کوچه‌ی بلوچ شمالی، پلاک ۴</li>
								<li className="phone" style={{ direction: 'rtl' }}>
									<span>تلفن پشتیبانی:</span>
									<span style={{ direction: 'ltr' }}>۰۲۱ - ۴۳۹۰۰۰۰۰</span>
								</li>
							</ul>
							<ul className="sign">
								<li>
									<img src="/assets/images/majazi.png" alt="" />
								</li>
								<li>
									<img src="/assets/images/majazi.png" alt="" />
								</li>
								<li>
									<img src="/assets/images/majazi.png" alt="" />
								</li>
								<li>
									<img src="/assets/images/icon18.svg" alt="" />
								</li>
								<li>
									<img src="/assets/images/icon19.svg" alt="" />
								</li>
								<li>
									<img src="/assets/images/keshvari.svg" alt="" />
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="copyright-socials">
					<div className="container">
						<div className="row">
							<div>
								<p className="copyright">
									<span>
										کلیه حقوق این سایت محفوظ و متعلق به آژانس هواپیمایی و جهانگردی علی بابا می‌باشد.
									</span>
									<span>(ورژن 4.95.0)</span>
								</p>
							</div>
							<div className='socials-container'>
								<ul className="socials">
									<li>
										<a href="#">
											<img src="/assets/images/aparat.svg" alt="" />
										</a>
									</li>
									<li>
										<a href="#">
											<img src="/assets/images/linkedin-in-brands.svg" alt="" />
										</a>
									</li>
									<li>
										<a href="#">
											<img src="/assets/images/instagram-brands.svg" alt="" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
