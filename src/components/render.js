import { createElement } from 'react';
import ModalComponent from './modal/modal.component';
import H1Component from './h1/h1.component';
import H2Component from './h2/h2.component';
import ParagraphComponent from './paragraph/paragraph.component';
import ListComponent from './list/list.component';
import ButtonComponent from './button/button.component';
import LinkComponent from './link/link.component';
import BoxComponent from './box/box.component';

const componentMap = {
	'ModalComponent': ModalComponent,
	'H1Component': H1Component,
	'H2Component': H2Component,
	'ParagraphComponent': ParagraphComponent,
	'ListComponent': ListComponent,
	'ButtonComponent': ButtonComponent,
	'LinkComponent': LinkComponent,
	'BoxComponent': BoxComponent
};
/**
 * Invokes React.createElement to render Component in the app using valid JSON data.
 * @param  {object} layoutConfig Config from JSON file.
 * @param  {string} key          Id to render an element.
 * @return {JSX.Element | void}  Void or Interface for the React.createElement
 */
const createComponent = ( layoutConfig, key ) => {
	let children;

	if ( 'undefined' === typeof layoutConfig ) {
		return;
	}

	if ( 'undefined' === typeof layoutConfig.Content.type ) {
		return;
	}

	if ( ! componentMap.hasOwnProperty( layoutConfig.Content.type ) ) {
		return;
	}

	if ( 'undefined' !== typeof layoutConfig.Children ) {
		children = Object.entries( layoutConfig.Children ).map( ( c ) => {
			return createComponent( c[1], c[0] );
		} );
	}

	return createElement(
		componentMap[ layoutConfig.Content.type ],
		Object.assign( { id: key, key }, layoutConfig.Content.props ?? {} ),
		children ?? null
	);
};
/**
 * Invokes createComponent().
 * @param  {object} layoutConfig Config from JSON file.
 * @return {JSX.Element | void}  Void or Interface for the React.createElement
 */
const renderComponent = ( layoutConfig ) => {
	return createComponent( layoutConfig, 'Root' );
};

export default renderComponent;
