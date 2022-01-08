import { render, screen } from '@testing-library/react';
import App from '../../../app';

describe( 'BoxComponent', () => {
	it( 'renders without props and without children', () => {
		const layoutConfig = {
			'Content': {
				'type': 'BoxComponent'
			}
		};

		render( <App layout={ layoutConfig } /> );

		const boxElement = screen.getByTestId( 'BoxComponent' );

		expect( boxElement ).toHaveStyle( 'borderWidth: 1px' );
		expect( boxElement ).toBeInTheDocument();
	} );

	it( 'renders with props and without children', () => {
		const layoutConfig = {
			'Content': {
				'type': 'BoxComponent',
				'props': {
					'borderSize': '2px'
				}
			}
		};

		render( <App layout={ layoutConfig } /> );

		const boxElement = screen.getByTestId( 'BoxComponent' );

		expect( boxElement ).toHaveStyle( `borderWidth: ${ layoutConfig.Content.props.borderSize }` );
		expect( boxElement ).toBeInTheDocument();
	} );

	it( 'renders with props and with H1Component as children', () => {
		const layoutConfig = {
			'Content': {
				'type': 'BoxComponent',
				'props': {
					'borderSize': '4px'
				}
			},
			'Children': {
				'Headline': {
					'Content': {
						'type': 'H1Component',
						'props': {
							'text': 'Lorem Ipsum Dolor Sit Amet'
						}
					}
				}
			}
		};

		render( <App layout={ layoutConfig } /> );

		const boxElement = screen.getByTestId( 'BoxComponent' );
		const h1Element = screen.getByTestId( 'H1Component' );

		expect( boxElement ).toHaveStyle( `borderWidth: ${ layoutConfig.Content.props.borderSize }` );
		expect( boxElement ).toBeInTheDocument();
		expect( h1Element ).toBeInTheDocument();
	} );
} );
