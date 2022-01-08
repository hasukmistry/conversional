import React from 'react';
import { ModalContext } from '../modal/modal.context';
import Modal from '../modal/modal.class';
/**
 * Renders ButtonComponent for the main application.
 * Generally, It is invoked using renderComponent().
 */
class ButtonComponent extends React.Component {
	/**
	 * @param {object} props Properties to render ButtonComponent.
	 */
	constructor ( props ) {
		super( props );

		// This binding is necessary to make `this` work in the callback.
		this.openModal = Modal.openModal.bind( this );
	}
	/**
	 * Returns markup for rendering ButtonComponent.
	 * @return {JSX.Element | null} Null or Interface for the React.createElement.
	 */
	render = () => {
		let markup = null;
		if ( this.props.text ) {
			markup = <button
				data-testid='ButtonComponent'
				onClick={ () => this.openModal( this.props.onClickModal, this ) }
				className='p-2 bg-sky-700 hover:bg-sky-600 focus:outline-none text-white rounded transition ease-in-out'>
				{ this.props.text } { this.props.children }
			</button>;
		}
		return markup;
	};
}

ButtonComponent.contextType = ModalContext;

export default ButtonComponent;
