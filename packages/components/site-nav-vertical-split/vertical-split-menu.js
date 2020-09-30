class VerticalSplitMenu {

	constructor( ) {

		this.navContainerClass = 'wsu-s-nav-container';
		this.navWrapperClass = 'wsu-s-nav-vertical-split__wrapper';
		this.navClass = 'wsu-s-nav-vertical-split';
		this.menuToggleClass = 'wsu-s-nav-vertical-split__menu-toggle';
		this.menuItemWrapperClass = 'wsu-s-nav-vertical-split__menu-item-wrapper';
		this.openNavClass = 'wsu-s-nav-vertical--open';
		this.closeNavClass = 'wsu-s-nav-vertical--close';
		this.startClosedClass = 'wsu-s-nav-vertical-split--start-closed';
		this.closedClass = 'wsu-s-nav-vertical-split--closed';
		this.navOpenClass = 'wsu-s-nav-vertical-split--open';

		this.bindEvents();

		this.init();
	}


	init() {

		this.initCloseNav();

	}

	initCloseNav() {

		let nav = this.getNav();

		if ( nav ) {

			if ( nav.classList.contains( this.startClosedClass ) ) {

				nav.classList.remove( this.startClosedClass );

				this.closeNav( nav );

			} 

		}
	}

	bindEvents() {

		document.addEventListener(
			'click', 
			this.clickEvent.bind( this ),
			false
		);

	}

	clickEvent( event ) {

		console.log( event );

		try {

			// Open nav
			if ( this.isChildOfClass( this.openNavClass, event.target ) ) {

				this.openNav();

			// Close nav
			} else if ( this.isChildOfClass( this.closeNavClass, event.target ) ) {

				this.closeNav();

			// Toggle menu
			} else if ( this.isChildOfClass( this.menuToggleClass, event.target ) ) {

				let menuItem = event.target.parentElement;
				this.toggleMenu( menuItem );

			}

		} catch(err) {

			console.log( event );
			console.log(err);

		}

	} 



	toggleMenu( menuItem ) {

		let menuItemWrapper = menuItem.parentElement;

		let isExpanded = menuItemWrapper.getAttribute( 'aria-expanded' );

		if ( 'true' === isExpanded ) {

			this.closeMenu( menuItemWrapper );

		} else {

			this.openMenu( menuItemWrapper );

		}

	}

	openMenu( menu ) {

		menu.setAttribute( 'aria-expanded', 'true' );

	}

	closeMenu( menu ) {

		menu.setAttribute( 'aria-expanded', 'false' );

	}

	toggleNav() {

		let nav = this.getNav();

		if ( nav.classList.contains( this.closedClass ) ) {

			this.openNav( nav );

		} else {

			this.closeNav( nav );

		}

	}

	closeNav( nav = false ) {

		nav = ( ! nav ) ? this.getNav() : nav;

		nav.classList.add( this.closedClass );
		nav.classList.remove( this.navOpenClass );

	}

	openNav( nav = false ) {

		nav = ( ! nav ) ? this.getNav() : nav;

		nav.classList.remove( this.closedClass );
		nav.classList.add( this.navOpenClass );

	}

	getNav() {

		return document.querySelector( '.' + this.navWrapperClass );

	}

	isChildOfClass( className, child ) {

		// Sanity check
		if ( ! child ) {

			return false;

		}

		// Check to see if current element has the class
		if ( child.classList.contains( className ) ) {

			return true;

		}

		// Get the parent element
		var parent = child.parentElement;

		// Loop through all parent elements looking for the class
		while ( parent != null ) {

			if ( parent.classList.contains( className ) ) {

				return true;

			}

			parent = parent.parentElement;
		}
		return false;

	}

}

export default VerticalSplitMenu;