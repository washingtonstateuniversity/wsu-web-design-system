class VerticalSplitMenu {

	constructor( ) {

		this.navContainerClass = 'wsu-s-nav-container';
		this.navWrapperClass = 'wsu-s-nav-vertical-split__wrapper';
		this.navClass = 'wsu-s-nav-vertical-split';
		this.menuToggleClass = 'wsu-s-nav-vertical-split__menu-toggle';
		this.menuItemWrapperClass = 'wsu-s-nav-vertical-split__menu-item-wrapper';
		this.openNavClass = 'wsu-s-nav-vertical--open';
		this.closeNavClass = 'wsu-s-nav-vertical--close';
		this.toggleNavClass = 'wsu-s-nav-vertical--toggle';
		this.startClosedClass = 'wsu-s-nav-vertical-split--start-closed';
		this.closedClass = 'wsu-s-nav-vertical-split--closed';
		this.navOpenClass = 'wsu-s-nav-vertical-split--open';
		this.animatedTimer = false;

		this.bindEvents();

		this.init();
	}


	init() {

		this.initCloseNav();

	}

	initCloseNav() {

		let nav = this.getNav();

		if ( nav ) {

			// Check if contains start closed or if the window is tablet width
			if ( nav.classList.contains( this.startClosedClass ) ) {

				nav.classList.remove( this.startClosedClass );

				this.closeNav( nav );

			}

			this.shouldBeOpen( nav );

		}
	}

	shouldBeOpen( nav = false ) {

		nav = ( ! nav ) ? this.getNav() : nav;

		if ( nav ) {

			if (  1260 > window.innerWidth ) {


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

		window.addEventListener(
			'resize', 
			this.resizeEvent.bind( this ),
			false
		);

		document.addEventListener(
			'keydown', 
			this.keydownEvent.bind( this ),
			false
		);

	}

	resizeEvent( event ) {

		try {

			this.shouldBeOpen();

		} catch(err) {

			console.log( event );
			console.log(err);

		}

	}


	clickEvent( event ) {

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

			} else if ( this.isChildOfClass( this.toggleNavClass, event.target ) ) {

				this.toggleNav();

			}

		} catch(err) {

			console.log( event );
			console.log(err);

		}

	}

	keydownEvent( event ) {

		try {

			let key = e.keyCode || e.charCode;

			if ( 27 == key && event.target.closest( '.wsu-s-nav-vertical-split' ) ) {

				this.closeNav();
			}

		} catch(err) {

			console.log( event );
			console.log(err);

		}

	}

	keydownEvent( event ) {

		try {

			let key = event.keyCode || event.charCode;

			if ( 27 == key && event.target.closest( '.wsu-s-nav-vertical-split' ) ) {

				this.closeNav();
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

		nav.classList.add( 'wsu-a-animated' );

		nav.classList.add( this.closedClass );
		nav.classList.remove( this.navOpenClass );

		clearTimeout(this.animatedTimer);

		this.animatedTimer = setTimeout( () => { nav.classList.remove( 'wsu-a-animated' ); }, 300 );

	}

	openNav( nav = false ) {

		nav = ( ! nav ) ? this.getNav() : nav;

		nav.classList.add( 'wsu-a-animated' );

		nav.classList.remove( this.closedClass );
		nav.classList.add( this.navOpenClass );

		clearTimeout(this.animatedTimer);

		this.animatedTimer = setTimeout( () => { nav.classList.remove( 'wsu-a-animated' ); }, 300 );

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