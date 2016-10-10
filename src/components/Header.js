import React from 'react';

const Header = (props) => {
	return (
		<header className="top">
			<h1>
				Catch
				<span className="ofThe">
					<span className="of">of</span>
					<span className="the">the</span>
				</span>
			  Day
			</h1>
			<h3 className="tagline">{ props.tagline }</h3>
		</header>
	)
}
// class Header extends React.Component {
// 	render() {
// 	}
// } 

export default Header;