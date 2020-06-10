// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Deps
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import './content-slider.scss';
import { Repeater } from '@wsuwebteam/build-tools/js/wsu-bt-helpers';

class ContentSlider extends Component {
	componentDidMount() {
		// Init swiper
		this.swiperInstance = new Swiper('.wsu-c-slider > .swiper-container', {
			slidesPerView: 1,
			slidesPerColumn: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				type: this.props.paginationType,
				clickable: true,
			},
			preloadImages: false,
			lazy: true,
			watchSlidesVisibility: true,
			keyboard: {
				enabled: true
			},
			autoplay: {
				enabled: this.props.autoplayEnabled,
				delay: this.props.autoplayDelay,
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
					slidesPerColumn: 1,
					spaceBetween: 20,
				},
				1360: {
					slidesPerView: this.props.slidesPerView,
					slidesPerColumn: 1,
					spaceBetween: this.props.spaceBetween,
				}
			},
			on: {
				lazyImageReady: function () {
					this.update();
				}
			}
		});
	}
	
	componentDidUpdate() {
		if (!this.props.autoplayEnabled) { 
			this.swiperInstance.autoplay.stop(); 
		} else {
			this.swiperInstance.autoplay.start(); 
		}
		
		this.swiperInstance.params.slidesPerView = this.props.slidesPerView;
		this.swiperInstance.params.spaceBetween = this.props.spaceBetween;
		this.swiperInstance.params.autoplay.delay = this.props.autoplayDelay;
		
		this.swiperInstance.update();
	}

	render() {
		return (
			<div className="wsu-c-slider">
				<div className="swiper-container">
					<div className="swiper-wrapper">
						<Repeater numTimes={12}>
							<div className="swiper-slide">
								<a href="#" className="wsu-c-slider_slide-container">
									<div className="wsu-c-slider_image-container">
										<div className="swiper-lazy-preloader"></div>
										<img className="wsu-c-slider_image swiper-lazy" data-src="https://source.unsplash.com/WLUHO9A_xik/1920x1280" src="https://source.unsplash.com/WLUHO9A_xik/208x117" alt="#" style={{objectPosition: "50% 50%"}} />
									</div>
									<div className="wsu-c-slider_content-container">
										<h3 className="wsu-c-slider_title">Regents announce completion of comprehensive review of the president</h3>
										<p></p>
										<div className="wsu-c-slider_footer-wrapper">
											<div className="wsu-c-slider_date">Published on 6/8/20</div>
											<div className="wsu-c-slider_byline">By <a href="#" className="wsu-c-link_default">Jane Smith</a></div>
										</div>
									</div>
								</a>
							</div>
						</Repeater>
					</div>
				</div>

				{/* If we need pagination */}
				<div className="swiper-pagination"></div>

				{/* If we need navigation buttons */}
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>

				{/* If we need scrollbar */}
				<div className="swiper-scrollbar"></div>
			</div>
		);
	}
}

ContentSlider.propTypes = {
	slidesPerView: PropTypes.number,
	spaceBetween: PropTypes.number,
	autoplayEnabled: PropTypes.bool,
	autoplayDelay: PropTypes.number,
	paginationType: PropTypes.string

};

ContentSlider.defaultProps = {
	slidesPerView: 4,
	spaceBetween: 20,
	autoplayEnabled: true,
	autoplayDelay: 3000,
	paginationType: 'bullets'
}

export default ContentSlider;