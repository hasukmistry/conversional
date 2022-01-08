import { render, screen } from '@testing-library/react';
import App from '../../../app';

describe( 'LinkComponent', () => {
	it( 'renders with props and without children', () => {
		const layoutConfig = {
			'Content': {
				'type': 'LinkComponent',
				'props': {
					'url': 'https://www.lipsum.com/',
					'text': 'Lorem ipsum dolor sit amet.'
				}
			}
		};

		render( <App layout={ layoutConfig } /> );

		const linkElement = screen.getByTestId( 'LinkComponent' );

		expect( linkElement ).toHaveTextContent( layoutConfig.Content.props.text );
		expect( linkElement ).toHaveAttribute( 'href', layoutConfig.Content.props.url );
		expect( linkElement ).toBeInTheDocument();
	} );
} );
