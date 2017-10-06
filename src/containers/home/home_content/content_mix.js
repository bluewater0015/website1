
import './content_mix.css';
import React,{ Component } from 'react';
import experienceImg from './images/experience.png';
import microphoneImg from './images/microphone.png';

class ContentMix extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="mix_container center">
				<div className="mix_content">
					<div className="col-6 center left miximg_box">
						<div className="mixImg">
							<img alt="" src={ experienceImg } />
						</div>
					</div>
					<div className="col-6 left center mixmessage_box">
						<div>
							<p className="area">混音美化效果，媲美专业歌手</p>
							<p className="margin-top exper_describe">
								星糖minktv，作为无人零售的最优单品，迷你KTV毋庸置疑处于2017年最大的风口之一。
								虽然无人值守终端一直存在，ATM机、自动贩售机、投币式电话亭等等，
								但新一波风口诞生在人力资本大幅上升和移动支付普及的背景下。
								虽然无人值守终端一直存在，ATM机、自动贩售机、投币式电话亭等等，
								但新一波风口诞生在人力资本大幅上升和移动支付普及的背景下。
							</p>
							<p className="mixboxImg margin-top">
								<img alt="" src={ microphoneImg } />
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ContentMix;


