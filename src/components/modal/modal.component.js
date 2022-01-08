import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { ModalContext } from './modal.context';
import Modal from './modal.class';
/**
 * Renders ModalComponent for the main application.
 * Generally, It is invoked using renderComponent().
 */
class ModalComponent extends React.Component {
	/**
	 * @param {object} props Properties to render ModalComponent.
	 */
	constructor ( props ) {
		super( props );

		// This binding is necessary to make `this` work in the callback.
		this.createModal = Modal.createModal.bind( this );
		this.closeModal = Modal.closeModal.bind( this );
	}
	/**
	 * Invoked immediately after a component is mounted (inserted into the tree).
	 * @return {void}
	 */
	componentDidMount = () => {
		this.createModal( this.props.id, this, this.props.isOpen );

		this.componentDidUpdate();
	};
	/**
	 * Invoked immediately before a component is unmounted and destroyed.
	 * @return {void}
	 */
	componentWillUnmount = () => {
		this.closeModal( this.props.id, this );
	};
	/**
	 * Invoked immediately after updating occurs, Operates DOM when the component has been updated.
	 * @return {void}
	 */
	componentDidUpdate = ( prevProps, prevState, snapshot ) => {
		const currentContext = this.context[ this.props.id ];

		const width = 'undefined' !== typeof this.props.width ? this.props.width : '500px';
		const height = 'undefined' !== typeof this.props.height ? this.props.height : '500px';

		const modal =
			<div
				data-testid='ModalComponent'
				data-isopen={ currentContext.isModalOpen }
				className='relative top-20 mx-auto p-5 border shadow-lg rounded-md bg-white'
				style={{ height: height, width: width }}
			>
				{ this.props.children }
				<div className='py-3'>
					<button
						data-testid='ModalCloseButton'
						id='ok-btn'
						className='px-6 py-1 bg-sky-700 text-white text-base font-medium rounded-md hover:bg-sky-600 focus:outline-none'
						onClick={ () => this.closeModal( currentContext.modalID, this ) }
					>
						OK
					</button>
				</div>
			</div>
		;
		ReactDOM.render( modal, document.getElementById( currentContext.modalID ) );
	};
	render = () => null;
}

ModalComponent.contextType = ModalContext;

ModalComponent.propTypes = {
	id: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	width: PropTypes.string,
	height: PropTypes.string,
	children: PropTypes.oneOfType( [
		PropTypes.array,
		PropTypes.instanceOf( null ),
	] )
};

export default ModalComponent;
