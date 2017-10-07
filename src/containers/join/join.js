
import React,{ Component } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import JoinPartner from './join_form/join_partner';
import JoinForm from './join_form/join_form';
class Join extends Component {
	render(){
		return(
			<div className="join_container">
				<Header />
				<JoinPartner />
				<JoinForm />
				<Footer />
			</div>
		)
	}
}

export default Join;