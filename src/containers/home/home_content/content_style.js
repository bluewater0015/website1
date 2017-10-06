
import './content_style.css';
import React,{ Component } from 'react';
import scanImg from './images/scan-music.png';
import professionImg from './images/profession-effect.png';
import showImg from './images/show-experience.png';
import retroImg from './images/retro-style.png';
class ContentStyle extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="style_container center clearfix">
				<ul className="style_list">
					<li className="col-3 style_item style_border center">
						<div className="style_content">
							<p className="img_style scanimg_box center">
								<img src={ scanImg } alt="" />
							</p>
							<p className="text_style text_font center">微信扫码</p>
							<p className="text_top text_font center">小程序点歌</p>
						</div>
					</li>
					<li className="col-3 style_item style_border center">
						<div className="style_content">
							<p className="img_style center">
								<img src={ professionImg } alt="" />
							</p>
							<p className="text_style text_font center">专业级</p>
							<p className="text_top text_font center">混音效果</p>
						</div>
					</li>
					<li className="col-3 style_item style_border center">
						<div className="style_content">
							<p className="img_style center">
								<img src={ showImg } alt="" />
							</p>
							<p className="text_style text_font center">沉清式</p>
							<p className="text_top text_font center">现场体验</p>
						</div>
					</li>
					<li className="col-3 style_item center">
						<div className="style_content">
							<p className="img_style center">
								<img src={ retroImg } alt="" />
							</p>
							<p className="text_style text_font center">复古美式</p>
							<p className="text_top text_font center">设计风格</p>
						</div>
					</li>
				</ul>
			</div>
		)
	}
}

export default ContentStyle;


