import React from 'react';
import PropTypes from 'prop-types';
/**
 * Renders BoxComponent for the main application.
 * Generally, It is invoked using renderComponent().
 */
class BoxComponent extends React.Component {
	/**
	 * Returns markup for rendering BoxComponent.
	 * @return {JSX.Element} Interface for the React.createElement.
	 */
	render = () => {
		const borderSize = 'undefined' !== typeof this.props.borderSize ? this.props.borderSize : '1px';

		return (
			<div data-testid='BoxComponent' className='border-solid border-stone-600 p-4' style={{ borderWidth: borderSize }}>
				{ this.props.children }
			</div>
		);
	};
}

BoxComponent.propTypes = {
	borderSize: PropTypes.string,
	children: PropTypes.oneOfType( [
		PropTypes.array,
		PropTypes.instanceOf( null ),
	] )
};

export default BoxComponent;
