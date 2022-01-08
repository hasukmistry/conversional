class PropTypes {
	/**
	 * Checks if given string is a valid url or not.
	 * @param  {string}  txt Non-Empty string to validate.
	 * @return {boolean} Returns true when give string is valid url.
	 */
	static isValidUrl = ( txt ) => {
		let url;

		try {
			url = new URL( txt );
		} catch ( e ) {
			return false;
		}

		// Only http and https are supported.
		return 'http:' === url.protocol || 'https:' === url.protocol;
	};
	/**
	 * Custom validator to check url. Returns an error object if the validation fails
	 * @param  {array}  props         Represents available properties.
	 * @param  {string} propName      Represents key for current property.
	 * @param  {string} componentName Represents current component name.
	 * @return {Error | void}  Returns void or an error object when invalid.
	 */
	static url = ( props, propName, componentName ) => {
		if ( ! this.isValidUrl( props[ propName ] ) ) {
			return new Error(
				`Invalid prop ${propName} supplied to ${componentName}. Given url is invalid, Validation failed.`
			);
		}
	};
}

export default PropTypes;
