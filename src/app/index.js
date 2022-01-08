import React from 'react';
import renderComponent from '../components/render';
import { ModalContext, ModalState } from '../components/modal/modal.context';
/**
 * Renders App component for the main application.
 */
class App extends React.Component {
	/**
	 * Returns markup for rendering App.
	 * @return {JSX.Element} Interface for the React.createElement.
	 */
	render = () => {
		return (
			<div id='app'>
				<div className='flex flex-col items-center justify-center mt-10 p-6'>
					<div className='py-20 md:w-1/2 lg:w-1/2'>
						<ModalContext.Provider value={ ModalState }>
							{ renderComponent( this.props.layout ) }
						</ModalContext.Provider>
					</div>
				</div>
			</div>
		);
	};
}

export default App;
