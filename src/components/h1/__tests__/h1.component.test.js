import { render, screen } from '@testing-library/react';
import App from '../../../app';

describe( 'H1Component', () => {
	it( 'renders with props and without children', () => {
		const layoutConfig = {
			'Content': {
				'type': 'H1Component',
				'props': {
					'text': 'Lorem Ipsum Dolor Sit Amet'
				}
			}
		};

		render( <App layout={ layoutConfig } /> );

		const h1Element = screen.getByTestId( 'H1Component' );

		expect( h1Element ).toHaveTextContent( layoutConfig.Content.props.text );
		expect( h1Element ).toBeInTheDocument();
	} );
} );
