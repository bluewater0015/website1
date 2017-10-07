
import './join_form.css';
import React,{ Component } from 'react';

class JoinForm extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="form_container">
				<div className="form">
					<div className="col-9 form_content left">
						<div className="content flex">
							<div className="star_box center red_color">
								<span className="star">*</span>
							</div>
							<div className="name_box center">
								<label className="name">姓名</label>
							</div>
							<div className="flex-start sign_box">
								:
							</div>
							<div className="username_box center">
								<input className="username" placeholder="请填写姓名" />
							</div>
						</div>
					</div>
					<div className="col-3 form_tips left">
						<p></p>
					</div>
				</div>
			</div>
		)
	}
}

export default JoinForm;


