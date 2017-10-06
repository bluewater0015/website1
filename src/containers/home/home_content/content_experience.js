import './content_experience.css';
import React,{ Component } from 'react';
import experienceImg from './images/experience.png';
import experienceboxImg from './images/experience_box.png';

class ContentExperience extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="experience_container center">
				<div className="experience_content">
					<div className="col-6 center left experienceimg_box">
						<div className="experienceImg">
							<img alt="" src={ experienceImg } />
						</div>
					</div>
					<div className="col-6 left center experiencemessage_box">
						<div>
							<p className="area">沉浸式体验 占地仅1.8m</p>
							<p className="margin-top exper_describe">
								星糖minktv，作为无人零售的最优单品，迷你KTV毋庸置疑处于2017年最大的风口之一。
								虽然无人值守终端一直存在，ATM机、自动贩售机、投币式电话亭等等，
								但新一波风口诞生在人力资本大幅上升和移动支付普及的背景下。
								虽然无人值守终端一直存在，ATM机、自动贩售机、投币式电话亭等等，
								但新一波风口诞生在人力资本大幅上升和移动支付普及的背景下。
							</p>
							<p className="experienceboxImg margin-top">
								<img alt="" src={ experienceboxImg } />
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ContentExperience;


