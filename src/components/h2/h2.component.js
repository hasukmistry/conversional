import React from 'react';
/**
 * Renders H2Component for the main application.
 * Generally, It is invoked using renderComponent().
 */
class H2Component extends React.Component {
	/**
	 * Returns markup for rendering H2Component.
	 * @return {JSX.Element | null} Null or Interface for the React.createElement.
	 */
	render = () => {
		let markup = null;
		if ( this.props.text ) {
			markup = <h2 data-testid='H2Component' className='py-1 text-2xl'>{ this.props.text } { this.props.children }</h2>;
		}
		return markup;
	};
}

export default H2Component;
