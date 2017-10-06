
import './header.css';
import logoImg from './images/logo.png';
import React,{ Component } from 'react';

class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			isNav: true,
			isIcon: false,
			isShowIconModel: false
		}
	}
	componentDidMount(){
		this.showEvent();
		//window.addEventListener('resize',this.onWindowResize);
	}
	showEvent(){
		if( document.documentElement.clientWidth > 768 ){
			this.setState({
				isNav: true,
				isIcon: false,
			})
		}else{
			this.setState({
				isNav: false,
				isIcon: true
			})
		}	
	}
	render(){
		return(
			<div className="header_container flex">
				<div className="header_logo col-6 flex1">
					<img src={ logoImg } />
				</div>
				{
					this.state.isNav ? this.headerNav() : ''
				}
				{
					this.state.isIcon ? this.headerIcon() : ''
				}
				{
					this.state.isShowIconModel ? this.ShowIconModel() : ''
				}
			</div>
		)
	}
	clickIconEvent(){
		this.setState({
			isShowIconModel: !this.state.isShowIconModel
		})
	}
	ShowIconModel(){
		return(
			<div className="iconModel col12">
				<ul className="iconModel_list">
					<li className="iconModel_item">首页</li>
					<li className="iconModel_item">关于星糖</li>
					<li className="iconModel_item">加盟合伙</li>
				</ul>
			</div>
		)
	}
	headerNav(){
		return (
			<div className="header_nav flex-end col-6">
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
		)
	}
	headerIcon(){
		return (
			<div className="col-6 flex-end" onClick={ this.clickIconEvent.bind(this) }>
				<div className="header_icon">
					<p className="icon"></p>
					<p className="icon"></p>
					<p className="icon"></p>
				</div>
			</div>
		)
	}
}

export default Header;


