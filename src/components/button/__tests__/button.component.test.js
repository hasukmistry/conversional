import { render, screen } from '@testing-library/react';
import App from '../../../app';

describe( 'ButtonComponent', () => {
	it( 'renders with props and without children', () => {
		const layoutConfig = {
			'Content': {
				'type': 'ButtonComponent',
				'props': {
					'text': 'Lorem Ipsum'
				}
			}
		};

		render( <App layout={ layoutConfig } /> );

		const buttonElement = screen.getByTestId( 'ButtonComponent' );

		expect( buttonElement ).toHaveTextContent( layoutConfig.Content.props.text );
		expect( buttonElement ).toBeInTheDocument();
	} );
} );
