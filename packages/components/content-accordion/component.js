class WsuAccordions {

	constructor( accordionClass ) {
		this.accordionClass = accordionClass;
		this.accordions = [];

		this.init();
	}

	init() {

		if ( this.accordionClass ) {

			this.registerAccordions( this.accordionClass );

		}

	}

	registerAccordions( selector ) {

		// Check for unregistered accordions
		let accordions = document.querySelectorAll( selector + ':not(.wsu-c-accordion--js-enabled)' );

		if ( accordions.length ) {

			// Add to class property in case we need to access it later
			this.accordions.push( accordions );

			// Loop through all found accordions and bind events
			accordions.forEach( item => {

				// This is how we know it's been activated
				item.classList.add('wsu-c-accordion--js-enabled');

				// Add click event
				item.querySelector('.wsu-c-accordion__title').addEventListener('click', event => {
					this.toggle( event.target );
				});
			});

		}

	}

	toggle( item ) {

		let parent = item.parentElement;

		if ( parent.classList.contains('wsu-c-accordion--active') ) {

			parent.classList.remove('wsu-c-accordion--active');

		} else {

			parent.classList.add('wsu-c-accordion--active');

		}
	} 

}

export default WsuAccordions;