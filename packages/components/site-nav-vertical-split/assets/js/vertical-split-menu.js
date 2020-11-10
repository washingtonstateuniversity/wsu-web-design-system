
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
		this.navCloseClass           = nav.hasOwnProperty('navCloseClass') ? nav.navCloseClass : false;
		this.navOpenClass            = nav.hasOwnProperty('navOpenClass') ? nav.navOpenClass : false;
		this.navClosedClass          = nav.hasOwnProperty('navClosedClass') ? nav.navClosedClass : false;
		this.navOpenedClass         = nav.hasOwnProperty('navOpenedClass') ? nav.navOpenedClass : false;
	}

	initNav() {

		if ( this.navWrapperSelector ) {

			this.navWrapper = this.navWrapperSelector ? document.querySelector( this.navWrapperSelector ) : false;
			this.nav = this.navSelector ? this.navWrapper.querySelector( this.navSelector ) : false;

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

					menuItem.classList.add('wsu-u-is-category');

					menuLink.addEventListener( 'click', event => {
						
						this.toggleCategory( event, menuItem );

					});

				}

				
			} );

		}

	}

	bindGlobalClickEvents( event ) {

		try {

			// Open nav
			if ( event.target.classList.contains( this.navCloseClass ) ) {

				this.closeNav();
				
			} else if ( event.target.classList.contains( this.navOpenClass ) ) {

				this.openNav();
				
			}

		} catch(err) {

			console.log( event );
			console.log(err);

		}
		
	}

	toggleMenu( menuItem ) {

		let menuItemWrapper = menuItem.parentElement;
		let expanded = menuItemWrapper.getAttribute('aria-expanded');
		let menuItemButton = menuItem.querySelector( this.menuItemsToggleSelector );

		if ( 'false' == expanded ) {

			menuItemWrapper.classList.add( this.menuItemsOpenClass );
			menuItemWrapper.setAttribute( 'aria-expanded', 'true' );
			menuItemButton.setAttribute( 'aria-label', 'Close Submenu' );

		} else {
			menuItemWrapper.setAttribute( 'aria-expanded', 'false' );
			this.menuOpenTimer = setTimeout( () => { menuItemWrapper.classList.remove( this.menuItemsOpenClass ); }, 300 );
			menuItemButton.setAttribute( 'aria-label', 'Open Submenu' );
		}

	}

	toggleCategory( event, menuItem ) {

		event.preventDefault();

		this.toggleMenu( menuItem );

	}

	closeNav() {

		this.navWrapper.classList.add( this.navClosedClass );

	}

	openNav() {
		this.navWrapper.classList.remove( this.navClosedClass );
		this.navWrapper.classList.add( this.navOpennedClass );
	}

	
}

export default VerticalSplitMenu;