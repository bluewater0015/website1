//home.js
import './home.css';
import React,{ Component } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ContentHappy from './home_content/content_happy';
import ContentStyle from './home_content/content_style';
class Home extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="home_container">
				<Header />
				<ContentHappy />
				<ContentStyle />
				<Footer />
			</div>
		)
	}
}

export default Home;