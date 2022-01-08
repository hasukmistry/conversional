import { render, screen } from '@testing-library/react';
import App from '../../../app';

describe( 'ParagraphComponent', () => {
	it( 'renders with props and without children', () => {
		const layoutConfig = {
			'Content': {
				'type': 'ParagraphComponent',
				'props': {
					'text': 'Lorem Ipsum Dolor Sit Amet'
				}
			}
		};

		render( <App layout={ layoutConfig } /> );

		const paragraphElement = screen.getByTestId( 'ParagraphComponent' );

		expect( paragraphElement ).toHaveTextContent( layoutConfig.Content.props.text );
		expect( paragraphElement ).toBeInTheDocument();
	} );
} );
