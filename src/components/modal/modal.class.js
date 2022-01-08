class Modal {
	/**
	 * Creates markup for modal overlay in the DOM.
	 * @param {string}  modalID         ID to render modal overlay.
	 * @param {object}  targetComponent Reference component.
	 * @param {boolean} isModalOpen     Represents modal state, Either true or false.
	 * @return {void}
	 */
	static createModal = ( modalID, targetComponent, isModalOpen ) => {
		if ( 'string' !== typeof modalID ) {
			return;
		}

		targetComponent.context[ modalID ] = {
			isModalOpen: isModalOpen,
			modalID: modalID
		};

		let overlay = document.getElementById( modalID );

		if ( !overlay ) {
			overlay = document.createElement( 'div' );
			overlay.id = modalID;
			overlay.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full';
			document.body.appendChild( overlay );
		}

		if ( isModalOpen ) {
			overlay.classList.remove( 'hidden' );
		} else {
			overlay.classList.add( 'hidden' );
		}
	};
	/**
	 * Toggles modal state from opened to closed in the DOM.
	 * @param {string}  modalID         ID to render modal overlay.
	 * @param {object}  targetComponent Reference component.
	 * @return {void}
	 */
	static closeModal = ( modalID, targetComponent ) => {
		if ( 'string' !== typeof modalID ) {
			return;
		}

		targetComponent.context[ modalID ] = {
			isModalOpen: false,
			modalID: modalID
		};

		const overlay = document.getElementById( modalID );

		if ( overlay ) {
			overlay.classList.add( 'hidden' );
		}

		targetComponent.forceUpdate();
	};
	/**
	 * Toggles modal state from closed to open in the DOM.
	 * @param {string}  modalID         ID to render modal overlay.
	 * @param {object}  targetComponent Reference component.
	 * @return {void}
	 */
	static openModal = ( modalID, targetComponent ) => {
		if ( 'string' !== typeof modalID ) {
			return;
		}

		targetComponent.context[ modalID ] = {
			isModalOpen: true,
			modalID: modalID
		};

		const overlay = document.getElementById( modalID );

		if ( overlay ) {
			overlay.classList.remove( 'hidden' );
		}
	};
}

export default Modal;
