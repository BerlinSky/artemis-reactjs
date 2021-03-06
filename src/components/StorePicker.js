import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	constructor() {
		super();
		this.gotoStore = this.gotoStore.bind(this);
	}

	gotoStore(event) {
		event.preventDefault();

		console.log("You cahnged the URL");

		console.log(this.storeInput.value);

		const storeId = this.storeInput.value;
		this.context.router.transitionTo(`/store/${storeId}`);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.gotoStore}>
				<h2>Please Enter a Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} 
					ref={(input) => {this.storeInput = input}}/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
} 

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;