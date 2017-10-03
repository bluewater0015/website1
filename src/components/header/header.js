
import './header.css';
import logoImg from './images/logo.png';
import React,{ Component } from 'react';

class Header extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="header_container flex">
				<div className="header_logo">
					<img src={ logoImg } />
				</div>
				<div className="header_nav flex1 flex-end">
					<ul className="nav_list flex">
						<li className="nav_item">
							<a className="item default_style" href="javascript: void(0)">首页</a>
							<div className="active"></div>
						</li>
						<li className="nav_item">
							<a className="item" href="javascript: void(0)">关于星糖</a>
						</li>
						<li className="nav_item">
							<a className="item" href="javascript: void(0)">加盟合伙</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Header;


