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
			}
		)

		return (
			<div className={classes}>
				<div className="wsu-c-stat__label">{this.props.label}</div>
				<CountUp end={this.props.value} prefix={this.props.prefix} suffix={this.props.suffix} separator={this.props.separator} className="wsu-c-stat__value" />
				<p className="wsu-c-stat__description">{this.props.description}</p>
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
}

ContentStat.defaultProps = {
	value: 0,
	label: '',
	description: '',
	prefix: '',
	suffix: '',
	separator: ',',
}

export default ContentStat;
