
import './footer.css';
import React,{ Component } from 'react';

class Footer extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="footer_container center">
				<div className="footer">
					<div className="clearfix footer_message">
						<p className="contact_phone col-6 left clearfix">联系电话：400-7008-963 </p>
						<p className="mail col-6 left clearfix">邮箱：cooperation@starcandy.cn</p>
					</div>
					<div className="footer_address center">
						地址：北京市朝阳区三元桥第三置业大厦B座903
					</div>
					<div className="footer_company clearfix">
						<p className="">
							北京海浮帆科技有限公司|ICP主体备案号：京ICP备17023299号
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer;


