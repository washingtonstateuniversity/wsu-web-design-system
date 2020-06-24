// External Deps
import React, { Component } from 'react';

const getContainerClasses = ( baseClass, classes  ) => {

	if ( Array.isArray( classes ) ) {

		classes.push( baseClass );

		return classes.join(' ');

	} else {

		return baseClass + ' ' + classes;

	}

} 

class GlobalContainer extends Component {

	render() {
		return (
			<div className={ getContainerClasses( 'wsu-g-container', this.props.className ) }>
				{this.props.children}
			</div>
		);
	}

	static defaultProps = {
		className: [],
	}
}

class SiteContainer extends Component {

	render() {
		return (
			<div className={ getContainerClasses( 'wsu-s-container', this.props.className ) }>
				{this.props.children}
			</div>
		);
	}

	static defaultProps = {
		className: [],
	}
}

class ContentContainer extends Component {

	render() {

		let classes = ( Array.isArray( this.props.className) )
		return (
			<div className={ getContainerClasses( 'wsu-c-container', this.props.className ) } >
				{this.props.children}
			</div>
		);
	}

	static defaultProps = {
		className: [],
	}
}

export { 
	GlobalContainer,
	SiteContainer,
	ContentContainer
};