import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CountUp from 'react-countup';

import './content-stat.scss';

class ContentStat extends Component {
	render() {
		const classes = classnames(
			'wsu-c-stat__wrapper', 
			{
				'wsu-c-stat__wrapper--align-left': this.props.alignLeft,
				'wsu-c-stat__wrapper--align-right': this.props.alignRight,
				'wsu-c-stat__wrapper--is-dark': this.props.isDark,
			}
		)

		return (
			<div className={classes}>
				{this.props.label && <div className="wsu-c-stat__label">{this.props.label}</div>}
				<CountUp end={this.props.value}  duration={this.props.duration} prefix={this.props.prefix && '<span class="wsu-c-stat__prefix">' + this.props.prefix + '</span>'} suffix={this.props.suffix && '<span class="wsu-c-stat__suffix">' + this.props.suffix + '</span>'} separator={this.props.separator} className="wsu-c-stat__value" />
				{this.props.description && <p className="wsu-c-stat__description">{this.props.description}</p>}
			</div>
		);
	}
}

ContentStat.propTypes = {
	value: PropTypes.number,
	label: PropTypes.string,
	description: PropTypes.string,
	prefix: PropTypes.string,
	suffix: PropTypes.string,
	separator: PropTypes.string,
	duration: PropTypes.number
}

ContentStat.defaultProps = {
	value: 0,
	label: '',
	description: '',
	prefix: '',
	suffix: '',
	separator: ',',
	duration: 1.5
}

export default ContentStat;
