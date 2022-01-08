import React from 'react';
import PropTypes from 'prop-types';
/**
 * Renders H1Component for the main application.
 * Generally, It is invoked using renderComponent().
 */
class H1Component extends React.Component {
	/**
	 * Returns markup for rendering H1Component.
	 * @return {JSX.Element | null} Null or Interface for the React.createElement.
	 */
	render = () => {
		let markup = null;
		if ( this.props.text ) {
			markup = <h1 data-testid='H1Component' className='py-1 text-4xl'>{ this.props.text } { this.props.children }</h1>;
		}
		return markup;
	};
}

H1Component.propTypes = {
	text: PropTypes.string.isRequired,
	children: PropTypes.oneOfType( [
		PropTypes.array,
		PropTypes.instanceOf( null ),
	] )
};

export default H1Component;
