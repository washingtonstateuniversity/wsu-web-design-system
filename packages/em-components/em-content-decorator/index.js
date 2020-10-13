import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

const ContentDecorator = ( props ) => {

	let inlineStyles = [];

	let decoratorStyle = {
		top:props.positionTop,
		bottom:props.positionBottom,
		right:props.positionRight,
		left:props.positionLeft,
		width:props.width,
		height: props.height,
	}

	if ( '' != props.fontSize ) {
		decoratorStyle.fontSize = props.fontSize;
	}

	let textDecorators = [
		'text-white',
		'text-outline-gray',
		'text-outline-crimson',
	];

	let baseDecorators = [
		'crimson-bar',
		'crimson-bar-light',
		'angled-lines-gray',
		'angled-lines-crimson',
		'plus-gray',
		'plus-crimson',
		'text-white',
		'text-outline-gray',
		'text-outline-crimson',
		'overlay-crimson',
		'overlay-gray',
	];

	let cougarHeads = [
		'cougar-head-white',
		'cougar-head-crimson',
	]

	let wsuWatermarkVerticals = [
		'wsu-watermark-vertical-white',
		'wsu-watermark-vertical-crimson',
	]

	if ( baseDecorators.includes( props.type ) ) {

		return (
			<span 
				className={'wsu-c-em-decorator--' + props.type }
				style={ decoratorStyle }
				>
				{ true == textDecorators.includes( props.type ) && props.text }
			</span>
		)

	} else if ( cougarHeads.includes( props.type ) ) {

		return (
			<span 
				className={'wsu-c-em-decorator--' + props.type }
				style={ decoratorStyle }
				>
				<svg role="img" aria-labelledby="wsuLogoTitle wsuLogoDesc" className="wsu-g-header__logo-svg" enableBackground="new 0 0 70.2 69.6" version="1.1" viewBox="0 0 70.2 69.6" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
					<title id="wsuLogoTitle">WSU Cougar Head Logo</title>
					<path className="st0" d="m42.8 69.6s3.6-1.5 5.5-7.4c1 2.3 1.5 4.8 1.3 7.3-2.3 0.1-4.5 0.2-6.8 0.1zm14.9-11.8c-10.4 1.4-12.2-20.3-12.2-20.3s3.5 11.1 10.9 10.7c7.7-0.4 5.5-12.2 5.5-12.2s7.5 20.2-4.2 21.8zm-47.7-5c-3.3 1-6.6 1.8-10 2.4 0 0 5.9-4.5 10.3-18.3l4.3 3.9-0.8 2.6c1.1 1.5 1.9 3.1 2.5 4.9 1.6-3.6 1.5-7.7-0.3-11.2l-0.5 1.6-1.7-1.5-2.8-2.7c1.2-3.6 3-7 5.3-10.1l0.4 0.4 3.3 3.8-1 1.7c1.5 1.7 2.9 3.4 4.2 5.3 0.6-3.4 0.4-6.8-0.4-10.1l-1.5 1.4-3.6-4.2c4.5-4.7 10-8.2 16.2-10.3-0.4 0.4-0.7 0.8-1 1.3-2 2.9-4.1 8.1-2.4 16.4 0.3 1.3 0.7 3.2 1.1 5.1 0.9 3.8 1.9 8.2 2.2 10.9 0.7 5.7 0.1 9.4-1.8 11.4-1.3 1.4-3.5 2-6.4 1.9v-1.4c0-2.4-0.3-4.8-0.8-7.2l-0.8-2.7-1.2 2.6c-1.9 4.1-8.6 14.1-17.2 16.1 2.6-4.2 4.1-9 4.4-14zm25.4 16.4h-0.5-0.1-0.3c-0.5 0-0.8-0.1-1.2-0.1-0.7-0.1-1.6-0.2-2.6-0.4-6.4-1.1-12.9-1.7-19.4-2 6.2-3.6 10.4-9.9 12-12.5 0.2 1.3 0.3 2.5 0.3 3.8 0 0.8 0 1.6-0.1 2.2l-0.1 1.1 1.1 0.1c0.7 0.1 1.3 0.1 1.9 0.1 3.3 0 5.7-0.8 7.3-2.5 2.4-2.5 3.1-6.7 2.3-13.1-0.4-2.9-1.4-7.4-2.3-11.1-0.5-2-0.9-3.8-1.1-5-1.5-7.6 0.3-12.3 2.1-14.8 1.3-1.9 3.2-3.4 5.5-4.2h0.1l3.3-10.8h1.1l-2.3 10.3c0.7-0.1 1.2-0.2 1.7-0.3l3-9.5h1.1l-2 9.2c2.9-0.4 6.1-0.7 10.3-1 0.8 0.4 1.4 1.1 1.8 1.9l9.8-3 0.4 1.1-9.5 3.7c0.1 0.2 0.2 0.4 0.2 0.6l10.3-1.3 0.2 1.1-10 2c0 0.2 0.1 0.4 0.1 0.6l10.4 0.3v1.1l-10.2 0.4c0 1.2-0.2 2.4-0.5 3.6 0.6 2.1 0.7 4.3 0.3 6.5-1.7-3.9-3-5.1-3-5.1-1.4-0.7-2.9-1-4.5-1-2.5 0-4.8 1.1-6.4 2.9-2.3 2.6-3.5 6-3.3 9.5 0.2 2.4 0.7 5.1 1.4 8.6 0.7 3.6 1.6 8.1 2.3 13.5 0.6 4.1-0.1 7.3-1.8 9.7-1.6 2.1-4 3.4-6.5 3.8h-0.1-0.2-0.1-2.2zm10.4-51.5c-2.1-0.1-4.2 0.4-6 1.3-1.5 1-2.5 2.7-2.6 4.5-0.1 0.6-0.1 1.2 0 1.8 0.8-1.5 2-2.8 3.3-3.9 2.4-1.5 5.1-2.3 7.9-2.4h0.9 0.3c0.4 0 0.7-0.1 0.8-0.2 0-0.1-0.1-0.3-0.4-0.4-1.3-0.5-2.7-0.8-4.2-0.7z" />
				</svg>
			</span>
		)

	} else if ( wsuWatermarkVerticals.includes( props.type ) ) {

		return (
			<span 
				className={'wsu-c-em-decorator--' + props.type }
				style={ decoratorStyle }
				>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 579.216 843.63">
					<g id="Group_2299" dataName="Group 2299" transform="translate(-1291.499 -611.38)">
						<g id="Group_2296" dataName="Group 2296" transform="translate(1314.054 612.38)">
						<path id="Path_2954" dataName="Path 2954" d="M1767.228,612.38v15.375c-20.5,2.33-28.881,10.247-37.265,36.8l-85.249,273.913h-39.6l-71.274-227.328L1463.5,938.465h-39.6l-85.713-273.913c-8.386-26.552-14.906-34.469-35.87-36.8V612.38H1436.95v15.375c-33.538,2.33-39.594,10.247-31.675,36.8l56.365,178.881,57.3-180.278c-7.919-25.621-13.511-33.072-35.4-35.4V612.38H1618.16v15.375c-32.607,2.33-39.594,10.247-31.677,36.8l56.832,178.881,56.368-178.881c8.384-26.552,1.863-34.469-30.747-36.8V612.38Z" transform="translate(-1302.324 -612.38)" fill="none"  strokeMiterlimit="10" strokeWidth="2"/>
						</g>
						<g id="Group_2297" dataName="Group 2297" transform="translate(1292.715 854.118)">
						<path id="Path_2955" dataName="Path 2955" d="M1577.341,956.016c0,62.886-57.3,105.278-132.3,105.278-39.128,0-73.6-9.782-98.756-24.222l-7.455,17.235h-18.166l-27.951-102.484,14.442-4.657c27.484,54.969,77.327,88.973,135.092,88.973,41.46,0,74.532-24.224,74.066-57.3,0-40.06-41.46-52.639-95.03-67.081-54.5-15.836-113.2-34-113.2-99.688,0-55.9,52.639-90.839,115.993-90.839,41.46,0,70.341,9.785,89.906,21.895l6.522-14.906h18.168l25.619,92.236-13.973,4.193c-23.292-48.915-64.751-78.26-121.119-78.26-39.595,0-62.422,20.029-62.422,46.117,0,34.94,39.132,45.652,88.975,59.161C1513.522,867.509,1577.341,885.208,1577.341,956.016Z" transform="translate(-1292.715 -721.233)" fill="none"  strokeMiterlimit="10" strokeWidth="2"/>
						</g>
						<g id="Group_2298" dataName="Group 2298" transform="translate(1529.188 1120.938)">
						<path id="Path_2956" dataName="Path 2956" d="M1587.861,1146.968c47.516,0,81.056-26.554,81.056-80.123V893.553c0-31.211-7.453-34.469-40.993-36.8V841.38h111.8v15.374c-33.54,2.33-40.993,5.587-40.993,36.8v173.758c0,64.749-43.789,107.141-122.982,107.141-85.245,0-135.559-36.334-135.559-107.607V893.553c0-31.211-7.45-34.469-40.993-36.8V841.38H1545.47v15.374c-34.007,2.33-40.993,5.587-40.993,36.8v177.018C1504.477,1124.609,1542.21,1146.968,1587.861,1146.968Z" transform="translate(-1399.197 -841.38)" fill="none"  strokeMiterlimit="10" strokeWidth="2"/>
						</g>
					</g>
				</svg>
			</span>
		)

	} else if ( 'wsu-horizontal' == props.type ) {

	} else {

		return null;

	}

}

ContentDecorator.propTypes = {
	type           :PropTypes.string,
	positionTop    :PropTypes.string,
	positionBottom :PropTypes.string,
	positionRight  :PropTypes.string,
	positionLeft   :PropTypes.string,
	width          :PropTypes.string,
	height         :PropTypes.string,
	text           :PropTypes.string,
	fontSize       :PropTypes.string,
}

ContentDecorator.defaultProps = {
	type           :'crimson-bar',
	positionTop    :'auto',
	positionBottom :'auto',
	positionRight  :'auto',
	positionLeft   :'auto',
	width          :'auto',
	height         :'auto',
	text           :'',
	fontSize       :'1%',
}

export default ContentDecorator;