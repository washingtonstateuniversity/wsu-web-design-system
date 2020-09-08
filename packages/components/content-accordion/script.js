class ContentAccordionJs {

	constructor( accordionSelector = '.wsu-c-accordion', accordionTitleClass = 'wsu-c-accordion__title', accordionContentClass = '.wsu-c-accordion__content', excludeClass = 'wsu-c-accordion--no-js' ) {

		this.accordionSelector     = accordionSelector;
		this.accordionTitleClass   = accordionTitleClass;
		this.accordionContentClass = accordionContentClass;
		this.excludeClass         	= excludeClass;
		this.activeSelector        = 'wsu-c-accordion--open';
		this.animatedClass         = 'wsu-wsu-c-accordion--animated';
		this.bindEvents();

	}

	toggleAccordion( accordion ) {

		if ( accordion.classList.contains( this.activeSelector ) ) {

			this.closeAccordion( accordion );

		} else {

			this.openAccordion( accordion );

		}

	}

	openAccordion( accordion ) {

		accordion.classList.add( this.animatedClass );

		accordion.classList.add( this.activeSelector );

		let content = accordion.querySelector( this.accordionContentClass );

		content.style.maxHeight = content.scrollHeight + "px";

		accordion.classList.add( this.activeSelector );

		setTimeout( () => { accordion.classList.remove( this.animatedClass ) }, 200 );

	}

	closeAccordion( accordion ) {

		accordion.classList.add( this.animatedClass );

		let content = accordion.querySelector( this.accordionContentClass );

		content.style.maxHeight = null;

		setTimeout( () => { 
			accordion.classList.remove( this.activeSelector ); 
			accordion.classList.remove( this.animatedClass ) }, 
			200 
		);

	}

	bindEvents() {

		document.addEventListener( 
			'click',
			this.clickTitle.bind( this ), 
			false
		);

		document.addEventListener(
			'keydown', 
			this.enterTitle.bind( this ),
			false
		);

	}

	clickTitle( event ) {

		if ( event.target.classList.contains( this.accordionTitleClass ) ) {

			let accordion = event.target.closest( this.accordionSelector );

			this.toggleAccordion( accordion );

		}
	}

	enterTitle( event ) {

		if ( event.target.classList.contains( this.accordionTitleClass ) && event.keyCode == 13 ) {

			let accordion = event.target.closest( this.accordionSelector );

			this.toggleAccordion( accordion );

		}
	}


}

let wsuContentAccordions = new ContentAccordionJs();
