
import './join_form.css';
import React,{ Component } from 'react';
import tipsImg from './images/tips.jpg';
import AddReceive from './address';
class JoinForm extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="form_container">
				<div className="form form_name">
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
							<div className="username_box center flex1">
								<input className="username" placeholder="请填写姓名" />
							</div>
						</div>
					</div>
					<div className="col-3 form_tips left flex">
						<div className="center">
							<p className="img_tips center">
								<img alt="" src={ tipsImg } />
							</p>
						</div>
						<div className="name_tips center">
							<p>1-10位字符</p>
						</div>
					</div>
				</div>
				<div className="form form_phone margin-top34">
					<div className="col-9 form_content left">
						<div className="content flex">
							<div className="star_box center red_color">
								<span className="star">*</span>
							</div>
							<div className="name_box center">
								<label className="name">手机号</label>
							</div>
							<div className="flex-start sign_box">
								:
							</div>
							<div className="username_box center flex1">
								<input className="username" placeholder="请填写手机号" />
							</div>
						</div>
					</div>
					<div className="col-3 form_tips left flex">
						<div className="center">
							<p className="img_tips center">
								<img alt="" src={ tipsImg } />
							</p>
						</div>
						<div className="name_tips center">
							<p>请填写正确的手机</p>
						</div>
					</div>
				</div>
				<AddReceive />
				<div className="form form_mail margin-top34">
					<div className="col-9 form_content left">
						<div className="content flex">
							<div className="star_box center red_color">
								<span className="star"></span>
							</div>
							<div className="name_box center">
								<label className="name">邮箱</label>
							</div>
							<div className="flex-start sign_box">
								:
							</div>
							<div className="username_box center flex1">
								<input className="username" placeholder="请填写邮箱" />
							</div>
						</div>
					</div>
					<div className="col-3 form_tips left flex">
						<div className="center">
							<p className="img_tips center">
								<img alt="" src={ tipsImg } />
							</p>
						</div>
						<div className="name_tips center">
							<p>请输入正确的邮箱</p>
						</div>
					</div>
				</div>
				<div className="form form_mark margin-top34">
					<div className="col-9 form_content mark_content left">
						<div className="content flex">
							<div className="star_box center red_color">
								<span className="star"></span>
							</div>
							<div className="name_box remark_box center">
								<label className="name">备注</label>
							</div>
							<div className="flex-start sign_box remark_sign">
								:
							</div>
							<div className="textarea_box center flex1">
								<textarea>
								</textarea>
							</div>
						</div>
					</div>
					<div className="col-3 form_tips left flex">
						<div className="center">
							<p className="img_tips center">
								<img alt="" src={ tipsImg } />
							</p>
						</div>
						<div className="name_tips center">
							<p>备注不能超过140字</p>
						</div>
					</div>
				</div>
				<div className="col-12 submit_box center margin-top58">
					<div className="submit center">
						提交
					</div>
				</div>
			</div>
		)
	}
}

export default JoinForm;


