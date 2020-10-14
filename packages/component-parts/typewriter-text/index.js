import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUtilityClasses } from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

// Component Deps
import Typed from 'typed.js';
import './style.scss'

class TypewriterText extends Component {
	componentDidMount() {
		const { strings } = this.props;

		this.typedInstance = new Typed('.wsu-c-typewriter__type', {
			strings: strings,
			typeSpeed: 40
		});
	}

	componentWillUnmount() {
		this.typedInstance.destroy();
	}

	render() {
		let classes = getUtilityClasses(
			[
				{ key:'isOutlined', prefix:'wsu-c-typewriter-text--', isBool: true, value:'is-outlined' },
			],
			this.props,
			'wsu-c-typewriter-text'
		)
	
		return (
			<div className={ classes }>
				<span className="wsu-c-typewriter__type"></span>
			</div>
		);
	}
}

TypewriterText.propTypes = {
	strings: PropTypes.array,
	isOutlined: PropTypes.bool
}

TypewriterText.defaultProps = {
	strings: ['Add your own typewriter text!'],
	isOutlined: false
}

export default TypewriterText;