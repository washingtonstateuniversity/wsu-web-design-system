import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { prefersReducedMotion } from '@wsuwebteam/build-tools/js/helpers/prefersReducedMotion';
import CountUp from 'react-countup';
import './style.scss';

class ContentStat extends Component {
	render() {
		const classes = classnames(
			'wsu-c-stat__wrapper', 
			{
				'wsu-c-stat__wrapper--align-left': this.props.alignment == 'align-left',
				'wsu-c-stat__wrapper--align-right': this.props.alignment == 'align-right',
				'wsu-c-stat__wrapper--is-dark': this.props.isDark,
			}
		)

		if (prefersReducedMotion) {
			return (
				<div className={classes}>
					{this.props.label && <div className="wsu-c-stat__label">{this.props.label}</div>}
					<CountUp start={this.props.value} end={this.props.value} duration={this.props.duration} prefix={this.props.prefix && '<span class="wsu-c-stat__prefix">' + this.props.prefix + '</span>'} suffix={this.props.suffix && '<span class="wsu-c-stat__suffix">' + this.props.suffix + '</span>'} separator={this.props.separator} className="wsu-c-stat__value" />
					{this.props.description && <div className="wsu-c-stat__description">{this.props.description}</div>}
				</div>
			)
		} else {
			return (
				<div className={classes}>
					{this.props.label && <div className="wsu-c-stat__label">{this.props.label}</div>}
					<CountUp end={this.props.value} duration={this.props.duration} prefix={this.props.prefix && '<span class="wsu-c-stat__prefix">' + this.props.prefix + '</span>'} suffix={this.props.suffix && '<span class="wsu-c-stat__suffix">' + this.props.suffix + '</span>'} separator={this.props.separator} className="wsu-c-stat__value" />
					{this.props.description && <div className="wsu-c-stat__description">{this.props.description}</div>}
				</div>
			)
		}
	}
}

ContentStat.propTypes = {
	value: PropTypes.number,
	label: PropTypes.string,
	description: PropTypes.string,
	prefix: PropTypes.string,
	suffix: PropTypes.string,
	separator: PropTypes.string,
	duration: PropTypes.number,
	alignment: PropTypes.string,
	isDark: PropTypes.bool
}

ContentStat.defaultProps = {
	value: 0,
	label: '',
	description: '',
	prefix: '',
	suffix: '',
	separator: ',',
	duration: 1.5,
	alignment: 'default',
	isDark: false,
}

export default ContentStat;
