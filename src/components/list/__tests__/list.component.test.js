import { render, screen } from '@testing-library/react';
import App from '../../../app';

describe( 'ListComponent', () => {
	it( 'renders with props and without children', () => {
		const layoutConfig = {
			'Content': {
				'type': 'ListComponent',
				'props': {
					'li': [
						'Lorem',
						'Ipsum',
						'dolor, sit amet!',
					]
				}
			}
		};

		render( <App layout={ layoutConfig } /> );

		const listElement = screen.getByTestId( 'ListComponent' );

		expect( listElement ).toContainHTML( `<li class="leading-8">${ layoutConfig.Content.props.li[0] }</li>` );
		expect( listElement ).toContainHTML( `<li class="leading-8">${ layoutConfig.Content.props.li[1] }</li>` );
		expect( listElement ).toContainHTML( `<li class="leading-8">${ layoutConfig.Content.props.li[2] }</li>` );
		expect( listElement ).toBeInTheDocument();
	} );
} );
