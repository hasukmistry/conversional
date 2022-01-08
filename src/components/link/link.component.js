import React from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from '../modal/modal.context';
import Modal from '../modal/modal.class';
import LinkPropTypes from './link.proptypes.class';
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

LinkComponent.propTypes = {
	text: PropTypes.string.isRequired,
	url: LinkPropTypes.url,
	onClickModal: PropTypes.string, // Valid modal id to open a popup.
	children: PropTypes.oneOfType( [
		PropTypes.array,
		PropTypes.instanceOf( null ),
	] )
};

export default LinkComponent;
