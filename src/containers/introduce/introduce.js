
import './introduce.css';
import React,{ Component } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Introduce_Describe from './introduce_content/introduce_describe';
class Introduce extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="introduce_container">
				<Header />
				<Introduce_Describe />
				<Footer />
			</div>
		)
	}
}
export default Introduce;