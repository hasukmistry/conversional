import { render, screen } from '@testing-library/react';
import App from '../../../app';

describe( 'H2Component', () => {
	it( 'renders with props and without children', () => {
		const layoutConfig = {
			'Content': {
				'type': 'H2Component',
				'props': {
					'text': 'Lorem Ipsum Dolor Sit Amet'
				}
			}
		};

		render( <App layout={ layoutConfig } /> );

		const h2Element = screen.getByTestId( 'H2Component' );

		expect( h2Element ).toHaveTextContent( layoutConfig.Content.props.text );
		expect( h2Element ).toBeInTheDocument();
	} );
} );
