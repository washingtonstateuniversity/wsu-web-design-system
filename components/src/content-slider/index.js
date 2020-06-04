import React, {Component} from 'react';
import Swiper from 'swiper';

import './content-slider.scss';

class ContentSlider extends Component {
	componentDidMount(){
		var mySwiper = new Swiper ('.wsu-c-slider', {
			// Optional parameters
			direction: 'vertical',
			loop: true,
		
			// If we need pagination
			pagination: {
			  el: '.swiper-pagination',
			},
		
			// Navigation arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			  el: '.swiper-scrollbar',
			},
		});	
	}

	render() {
		return (
			<div className="wsu-c-slider">
				<div className="wsu-c-slider-slide">
					<img className="wsu-c-slider-slide_background" src="https://source.unsplash.com/random" alt="#" data-object-fit="" />
				</div>
				<div className="wsu-c-slider-slide">
					<img className="wsu-c-slider-slide_background" src="https://source.unsplash.com/random" alt="#" data-object-fit="" />
				</div>
				<div className="wsu-c-slider-slide">
					<img className="wsu-c-slider-slide_background" src="https://source.unsplash.com/random" alt="#" data-object-fit="" />
				</div>
				<div className="wsu-c-slider-slide">
					<img className="wsu-c-slider-slide_background" src="https://source.unsplash.com/random" alt="#" data-object-fit="" />
				</div>
			</div>
		);
	}
}

export default ContentSlider;
