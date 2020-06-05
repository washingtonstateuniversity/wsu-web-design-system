// External Deps
import React, {Component} from 'react';
import propTypes from 'prop-types';

// Component Deps
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import './content-slider.scss';
import { Repeater } from '@wsuwebteam/build-tools/js/wsu-bt-helpers';

class ContentSlider extends Component {
	componentDidUpdate() {
		// Init swiper
		const swiper = new Swiper('.wsu-c-slider', {
			slidesPerView: this.props.slidesPerView,
			slidesPerColumn: 1,
			spaceBetween: 10,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				type: '<?php echo esc_js($pagination_type); ?>',
				clickable: true,
			},
			preloadImages: true,
			lazy: false,
			watchSlidesVisibility: false,
			keyboard: {
				enabled: true
			},
			autoplay: {
				enabled: true,
				delay: 3000,
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
					slidesPerColumn: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					slidesPerColumn: 1,
					spaceBetween: 40,
				}
			}
		});
	}

	render() {
		return (
			<div className="wsu-c-slider swiper-container">
				<div className="swiper-wrapper">
					<Repeater numTimes={12}>
						<div className="wsu-c-slider-slide swiper-slide">
							<h3>Lorem Ipsum</h3>
							<button>Learn More</button>
							<img className="wsu-c-slider-slide_background" src="https://source.unsplash.com/random" alt="#" data-object-fit="" />
						</div>
					</Repeater>
				</div>
			</div>
		);
	}
}

ContentSlider.propTypes = {
	slidesPerView: propTypes.number,
};

ContentSlider.defaultProps = {
	slidesPerView: 2,
}

export default ContentSlider;