// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import wsu_wds from '@wsuwebteam/build-tools/js/wsu-bt-wds';

// Component Deps
import './content-modal.scss';
import Icon from '../content-icon';

// Component Starts
class ContentModal extends Component {

	constructor(){
		super();

		console.log('constructor');

		
		wsu_wds.modal = {
			toggleModal: this.toggleModal()
		};

		console.log(wsu_wds);
	}

	getModal(modalName) {
		const modal = document.querySelectorAll(modalName);
		return modal;
	}

	openModal() {

		console.log('openModal working');

		return 'test';


		// this.getModal(modalName);

		// console.log(modal);
		// modal.setAttribute('class', this.params['priority_nav_list_item_list_class_name']);
	}

	closeModal(modalName) {
		return null;
	}

	toggleModal(modalName) {

		console.log('toggle that modal');
		// if toggle is open
		// if ()
			// close
		// if closed 
			// open
	}

	componentDidMount() {
		console.log('componentDidMount');
		// wsu_wds.modal = {
		// 	openModal: this.openModal(),
		// 	closeModal: this.closeModal(),
		// 	toggleModal: this.toggleModal()
		// };
		
		// console.log(wsu_wds);

		const element = '';

		// if element with attribute exists
			// Add event listener
			// element.addEventListener('onClick', this.toggle_modal.bind(this));
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
						<button className="wsu-c-modal__close-button">Close <Icon name="x-close" /></button>
						{this.props.children}
				</div>
				<div className="wsu-c-modal__overlay"></div>
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

