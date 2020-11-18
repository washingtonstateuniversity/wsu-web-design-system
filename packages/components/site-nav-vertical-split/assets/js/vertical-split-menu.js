
class VerticalSplitMenu {


	constructor( nav ) {
		this.navWrapperSelector      = nav.hasOwnProperty('navWrapperSelector') ? nav.navWrapperSelector : false;
		this.navSelector             = nav.hasOwnProperty('navSelector') ? nav.navSelector : false;
		this.menuItemsSelector       = nav.hasOwnProperty('menuItemsSelector') ? nav.menuItemsSelector : false;
		this.menuItemsToggleSelector = nav.hasOwnProperty('menuItemsToggleSelector') ? nav.menuItemsToggleSelector : false;
		this.menuItemsLinkSelector   = nav.hasOwnProperty('menuItemsLinkSelector') ? nav.menuItemsLinkSelector : false;
		this.menuStartClosedSelector = nav.hasOwnProperty('menuStartClosedSelector') ? nav.menuStartClosedSelector : false;
		this.menuItemsOpenClass      = nav.hasOwnProperty('menuItemsOpenClass') ? nav.menuItemsOpenClass : false;
		this.menuOpenTimer           = false;
		this.navTimer                = false;
		this.animationDuration       = nav.hasOwnProperty('animationDuration') ? nav.animationDuration : 300;
		this.animationTimer          = false;
		this.navCloseClass           = nav.hasOwnProperty('navCloseClass') ? nav.navCloseClass : false;
		this.navOpenClass            = nav.hasOwnProperty('navOpenClass') ? nav.navOpenClass : false;
		this.navToggleClass          = nav.hasOwnProperty('navToggleClass') ? nav.navToggleClass : false;
		this.navClosedClass          = nav.hasOwnProperty('navClosedClass') ? nav.navClosedClass : false;
		this.navOpenedClass          = nav.hasOwnProperty('navOpenedClass') ? nav.navOpenedClass : false;
		this.autoCloseAt             = nav.hasOwnProperty('autoCloseAt ') ? nav.autoCloseAt : 1259;
	}

	initNav() {

		if ( this.navWrapperSelector ) {

			this.navWrapper = this.navWrapperSelector ? document.querySelector( this.navWrapperSelector ) : false;
			this.nav = this.navSelector ? this.navWrapper.querySelector( this.navSelector ) : false;

			this.checkShouldClose();

			if ( this.navWrapper ) {

				this.menuItems = this.menuItemsSelector ? this.navWrapper.querySelectorAll( this.menuItemsSelector ) : false; 

				this.initMenuItems();

			}

		}

		// Add global click events
		document.addEventListener(
			'click', 
			this.bindGlobalClickEvents.bind( this ),
			false
		);
		
	}

	initMenuItems() {

		if ( this.menuItems ) {

			this.menuItems.forEach( menuItem => {

				let menuToggle = this.menuItemsToggleSelector ? menuItem.querySelector( this.menuItemsToggleSelector ) : false;
				let menuLink = this.menuItemsLinkSelector ? menuItem.querySelector( this.menuItemsLinkSelector ) : false;

				if ( menuToggle ) {

					menuToggle.addEventListener( 'click', event => {
						
						this.toggleMenu( menuItem );

					})

				}

				if ( menuLink && menuLink.hasAttribute('href') && '#' ==  menuLink.getAttribute('href') ) {

					menuItem.classList.add('wsu-s-nav-vertical-split__menu-item--is-category');

					menuLink.addEventListener( 'click', event => {
						
						this.toggleCategory( event, menuItem );

					});

				}

				
			} );

		}

	}


	checkShouldClose() {
		
		let windowWidth = window.innerWidth;

		if ( windowWidth < ( this.autoCloseAt + 30 ) ) {

			this.closeNav();

		}
	}

	bindGlobalClickEvents( event ) {

		try {


			// Open nav
			if ( this.hasClass( event.target, this.navCloseClass ) ) {

				this.closeNav();
				
			} else if ( this.hasClass( event.target, this.navOpenClass ) ) {

				this.openNav();
				
			} else if ( this.hasClass( event.target, this.navToggleClass ) ) {

				if ( this.navWrapper.classList.contains( this.navClosedClass ) ) {

					this.openNav();

				} else if ( this.navWrapper.classList.contains( this.navOpenedClass ) ) {

					this.closeNav();

				} else {

					this.openNav();

				}

			}

		} catch(err) {

			console.log( event );
			console.log(err);

		}
		
	}

	toggleMenu( menuItem, action = false ) {

		let menuItemWrapper = menuItem.parentElement;
		let expanded = menuItemWrapper.getAttribute('aria-expanded');
		let menuItemButton = menuItem.querySelector( this.menuItemsToggleSelector );

		if ( 'false' == expanded && 'close' != action ) {
			//this.closeSiblingMenus( menuItemWrapper );
			menuItemWrapper.classList.add( this.menuItemsOpenClass );
			menuItemWrapper.setAttribute( 'aria-expanded', 'true' );
			menuItemButton.setAttribute( 'aria-label', 'Close Submenu' );

		} else {
			menuItemWrapper.setAttribute( 'aria-expanded', 'false' );
			clearTimeout( this.menuOpenTimer );
			this.menuOpenTimer = setTimeout( () => { menuItemWrapper.classList.remove( this.menuItemsOpenClass ); }, 300 );
			menuItemButton.setAttribute( 'aria-label', 'Open Submenu' );
		}

	}


	toggleCategory( event, menuItem ) {

		event.preventDefault();

		this.toggleMenu( menuItem );

	}

	closeNav() {

		this.isOpen = false;
		this.navWrapper.classList.add( 'wsu-a-animated' );
		this.navWrapper.classList.add( this.navClosedClass );
		this.navWrapper.classList.remove( this.navOpenedClass );
		clearTimeout( this.animationTimer );
		this.animationTimer = setTimeout( () => { this.navWrapper.classList.remove( 'wsu-a-animated' );  }, this.animationDuration );
	}

	openNav() {
		this.isOpen = true;
		this.navWrapper.classList.add( 'wsu-a-animated' );
		this.navWrapper.classList.remove( this.navClosedClass );
		this.navWrapper.classList.add( this.navOpenedClass );
		clearTimeout( this.animationTimer );
		this.animationTimer = setTimeout( () => { this.navWrapper.classList.remove( 'wsu-a-animated' );  }, this.animationDuration );
	}


	/*closeSiblingMenus( menuItemWrapper ) {

		let siblings = [];

		let i = 0;

		let nextSibling = menuItemWrapper.nextElementSibling;
		let prevSibling = menuItemWrapper.previousElementSibling;

		while( nextSibling && i < 200 ) {

			if ( nextSibling.hasAttribute('aria-expanded') && 'true' == nextSibling.getAttribute('aria-expanded') ) {

				siblings.push( nextSibling );

			}

			nextSibling = nextSibling.nextElementSibling;

			i++;

		}

		i = 0;

		while( prevSibling && i < 200 ) {

			if ( prevSibling.hasAttribute('aria-expanded') && 'true' == prevSibling.getAttribute('aria-expanded') ) {

				console.log( prevSibling );

				siblings.push( prevSibling );

			}

			prevSibling = prevSibling.previousElementSibling;

			i++;

		}

		console.log( siblings );

		siblings.forEach( menuItemWrapper => { 

			let menuItem = menuItemWrapper.querySelector( this.menuItemsSelector );

			if ( menuItem ) {

				this.toggleMenu( menuItem, 'close' );

			}

		} );

	} */


	hasClass( element, className ) {

		if ( ! element || ! className ) {

			return false;

		}

		if ( element.classList.contains( className ) ) {

			return true;

		} else if ( element.parentElement && element.parentElement.classList.contains( className ) ) {

			return true;

		}

		return false;

	}

	
}

export default VerticalSplitMenu;