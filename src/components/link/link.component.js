import React from 'react';
import { ModalContext } from '../modal/modal.context';
import Modal from '../modal/modal.class';
/**
 * Renders LinkComponent for the main application.
 * Generally, It is invoked using renderComponent().
 */
class LinkComponent extends React.Component {
	/**
	 * @param {object} props Properties to render LinkComponent.
	 */
	constructor ( props ) {
		super( props );

		// This binding is necessary to make `this` work in the callback.
		this.openModal = Modal.openModal.bind( this );
	}
	/**
	 * Returns markup for rendering LinkComponent.
	 * @return {JSX.Element | null} Null or Interface for the React.createElement.
	 */
	render = () => {
		let markup = null;
		if ( this.props.text ) {
			markup = <a
				data-testid='LinkComponent'
				onClick={ () => this.openModal( this.props.onClickModal, this ) }
				href={ this.props.url ?? '#' }
				target='_blank'
				rel='noreferrer'
				className='p-2 underline text-sky-700 hover:text-sky-600'>
				{ this.props.text } { this.props.children }
			</a>;
		}
		return markup;
	};
}

LinkComponent.contextType = ModalContext;

export default LinkComponent;
