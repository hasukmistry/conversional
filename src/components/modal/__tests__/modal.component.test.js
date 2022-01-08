import { render, fireEvent, screen } from '@testing-library/react';
import App from '../../../app';

describe( 'ModalComponent', () => {
	it( 'renders with props and with H1Component as children', () => {
		const layoutConfig = {
			'Content': {
				'type': 'ModalComponent',
				'props': {
					'isOpen': true,
					'width': '500px',
					'height': '400px'
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

		const modalElement = screen.getByTestId( 'ModalComponent' );
		const modalCloseButton = screen.getByTestId( 'ModalCloseButton' );
		const h1Element = screen.getByTestId( 'H1Component' );

		expect( modalElement ).toHaveStyle( `height: ${ layoutConfig.Content.props.height }` );
		expect( modalElement ).toHaveStyle( `width: ${ layoutConfig.Content.props.width }` );
		expect( modalElement ).toHaveAttribute( 'data-isopen', `${ layoutConfig.Content.props.isOpen }` );

		expect( modalElement ).toBeInTheDocument();
		expect( modalCloseButton ).toBeInTheDocument();
		expect( h1Element ).toBeInTheDocument();

		// Click close modal button.
		fireEvent.click( modalCloseButton );

		const refreshedModalElement = screen.getByTestId( 'ModalComponent' );
		expect( refreshedModalElement ).toHaveAttribute( 'data-isopen', `${ ! layoutConfig.Content.props.isOpen }` );
		expect( refreshedModalElement ).toBeInTheDocument();
	} );
} );
