
import './join_partner.css';
import React,{ Component } from 'react';
import partnerImg from './images/recruit.jpg';
class JoinPartner extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="partner_container">
				<img alt="" src={ partnerImg } />
			</div>
		)
	}
}

export default JoinPartner;


