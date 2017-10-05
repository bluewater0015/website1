import './content_happy.css';
import happyImg from './images/happy.png';
import React,{ Component } from 'react';
class ContentHappy extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="happy_container">
				<div className="happy_content col-12">
					<p className="minute_happy center">5分钟欢唱的小快乐</p>
					<p className="amusement_taste center">星糖miniktv提供"演唱+舞台"结合的现场娱乐体验</p>
					<p className="young_style center">年轻化风格的外形设计以及炫酷的灯光系统</p>
				</div>
				<div className="img_container center">
					<div className="happy_img col-12">
						<img alt="暂时没有图片" src={ happyImg } />
					</div>
				</div>
			</div>
		)
	}
}

export default ContentHappy;


