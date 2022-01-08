import React from 'react';
import PropTypes from 'prop-types';
/**
 * Renders ListComponent for the main application.
 * Generally, It is invoked using renderComponent().
 */
class ListComponent extends React.Component {
	/**
	 * Returns markup for rendering ListComponent.
	 * @return {JSX.Element} Interface for the React.createElement.
	 */
	render = () => {
		let markup = null;
		if ( this.props.li ) {
			const listItems = this.props.li.map( ( text, i ) => {
				return <li key={ i } className='leading-8'>{ text }</li>;
			} );
			markup = <ul data-testid='ListComponent' className='list-disc list-inside'>{ listItems }</ul>;
		}
		return (
			<div className='py-1'>
				{ markup }
				{ this.props.children }
			</div>
		);
	};
}

ListComponent.propTypes = {
	li: PropTypes.array.isRequired,
	children: PropTypes.oneOfType( [
		PropTypes.array,
		PropTypes.instanceOf( null ),
	] )
};

export default ListComponent;
