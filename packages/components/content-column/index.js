// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class ContentColumnWrapper extends Component {

	getWrapperClasses() {

		let classes = ['wsu-c-column__wrapper'];

		if ( this.props.layout && 'default' !== this.props.layout ) {
			classes.push( 'wsu-c-columns--' + this.props.layout );
		}

		if ( this.props.backgroundColor && 'default' !== this.props.backgroundColor ) {
			classes.push( 'wsu-u-background--' + this.props.backgroundColor );
		}

		if ( this.props.marginBefore && 'default' !== this.props.marginBefore ) {
			classes.push( 'wsu-u-margin-before-' + this.props.marginBefore );
		}

		if ( this.props.marginAfter && 'default' !== this.props.marginAfter ) {
			classes.push( 'wsu-u-margin-after-' + this.props.marginAfter );
		}

		if ( this.props.paddingAfter && 'default' !== this.props.paddingAfter ) {
			classes.push( 'wsu-u-padding-after-' + this.props.paddingAfter );
		}

		if ( this.props.paddingBefore && 'default' !== this.props.paddingBefore ) {
			classes.push( 'wsu-u-padding-before-' + this.props.paddingBefore );
		}

		return classes;

	}

	render() {

		let classes = this.getWrapperClasses();

		return (
			<div className={ classes.join(' ') }>
				{this.props.children}
			</div>
		);
	}


}

ContentColumnWrapper.defaultProps = {
	layout: 'default',
	backgroundColor: '',
}

class ContentColumn extends Component {

	getWrapperClasses() {

		let classes = ['wsu-c-column'];

		if ( this.props.backgroundColor && 'default' !== this.props.backgroundColor ) {
			classes.push( 'wsu-u-background--' + this.props.backgroundColor );
		}

		if ( this.props.marginBefore && 'default' !== this.props.marginBefore ) {
			classes.push( 'wsu-u-margin-before--' + this.props.marginBefore );
		}

		if ( this.props.marginAfter && 'default' !== this.props.marginAfter ) {
			classes.push( 'wsu-u-margin-after--' + this.props.marginAfter );
		}

		if ( this.props.paddingAfter && 'default' !== this.props.paddingAfter ) {
			classes.push( 'wsu-u-padding-after--' + this.props.paddingAfter );
		}

		if ( this.props.paddingBefore && 'default' !== this.props.paddingBefore ) {
			classes.push( 'wsu-u-padding-before--' + this.props.paddingBefore );
		}

		return classes;

	}

	render() {

		let classes = this.getWrapperClasses();

		return (
			<div className={ classes.join(' ') }>
				{this.props.children}
			</div>
		);
	}
}

ContentColumn.defaultProps = {
	backgroundColor: '',
	marginBefore: '',
	marginAfter: '',
	paddingBefore: '',
	paddingAfter: '',
}

export { 
	ContentColumn,
	ContentColumnWrapper
};