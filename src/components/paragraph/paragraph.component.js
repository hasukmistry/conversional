import React from 'react';
/**
 * Renders ParagraphComponent for the main application.
 * Generally, It is invoked using renderComponent().
 */
class ParagraphComponent extends React.Component {
	/**
	 * Returns markup for rendering ParagraphComponent.
	 * @return {JSX.Element | null} Null or Interface for the React.createElement.
	 */
	render = () => {
		let markup = null;
		if ( this.props.text ) {
			markup = <p data-testid='ParagraphComponent' className='py-1'>{ this.props.text } { this.props.children }</p>;
		}
		return markup;
	};
}

export default ParagraphComponent;
