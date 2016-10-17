import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	render() {
		const { detail } = this.props;
		return (
			<li className="menu-fish">
				<img src={detail.image} alt={detail.name} />
				<h3 className="fish-name">
					{detail.name}
					<span className="price">
						{formatPrice(detail.price)}
					</span>
				</h3>
				<p>{detail.desc}</p>
				<button>Add To Order</button>
			</li>
		)
	}
}

export default Fish;