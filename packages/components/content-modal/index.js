// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Component Deps
import './style.scss';
import {WsuIcon} from '../';

// Component Starts
class ContentModal extends Component {

	componentDidMount(){ 
		if (this.props.isOpen) {
			document.addEventListener('keyup', this.handleEscape.bind(this));
		}
	}

	handleEscape(event) {
		const escapeKeyCode = 27;

		if (event.keyCode == escapeKeyCode) {
			this.props.closeModal();
		}
	}

	render() {
		const classes = classnames(
			'wsu-c-modal__wrapper', 
			{
				'wsu-c-modal__wrapper--is-fullscreen': this.props.isFullScreen,
				'wsu-c-modal__wrapper--is-open': this.props.isOpen,
				'wsu-c-modal__wrapper--is-notched': this.props.isNotched,
			}
		)

		return (
			<>
				<div 
					role="dialog"
					id={this.props.name}
					aria-label={this.props.ariaLabel}
					aria-modal="true"
					className={classes}
				>
						<button className="wsu-c-modal__close-button" onClick={this.props.closeModal}>Close <WsuIcon name="x-close" /></button>
						{this.props.children}
				</div>
				<div className="wsu-c-modal__overlay" onClick={this.props.closeModal}></div>
			</>
		);
	}
}

ContentModal.propTypes = {
	name: PropTypes.string.isRequired,
	ariaLabel: PropTypes.string.isRequired,
	isFullScreen: PropTypes.bool,
	isOpen: PropTypes.bool,
	isNotched: PropTypes.bool
}

ContentModal.defaultProps = {
	name: '', // Unique name to handle the modal
	ariaLabel: '', // Provides the user with a recognizable name of the object.
	isFullScreen: false, // Makes modal full screen
	isOpen: false, // Opens the modal
	isNotched: false // Adds EM notch
}

export default ContentModal;

