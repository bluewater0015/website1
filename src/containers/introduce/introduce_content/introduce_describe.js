
import './introduce_describe.css';
import React,{ Component } from 'react';
import introduceImg from './images/introduce.png';
class Introduce_Describe extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="describe_container">
				<div>
					<img alt="" src={ introduceImg } />
				</div>
				<div className="center describe_content">
					<div className="content">
						<p className="center margin-top text-indent">
							星糖minktv的创始团队是百度出身的连续创业团队，
							2017年成立，由顶级美元VC投资。
						</p>
						<p className="center margin-top text-indent">
							星糖minktv，作为无人零售的最优单品，迷你KTV毋庸置疑处于2017年最大的风口之一。
							虽然无人值守终端一直存在，ATM机、自动贩售机、投币式电话亭等等，
							但新一波风口诞生在人力资本大幅上升和移动支付普及的背景下。
							虽然无人值守终端一直存在，ATM机、自动贩售机、投币式电话亭等等，
							但新一波风口诞生在人力资本大幅上升和移动支付普及的背景下。
						</p>
						<p className="center margin-top margin-bottom text-indent">
							星糖minktv，作为无人零售的最优单品，迷你KTV毋庸置疑处于2017年最大的风口之一。
							虽然无人值守终端一直存在，ATM机、自动贩售机、投币式电话亭等等，
							但新一波风口诞生在人力资本大幅上升和移动支付普及的背景下。
							虽然无人值守终端一直存在，ATM机、自动贩售机、投币式电话亭等等，
							但新一波风口诞生在人力资本大幅上升和移动支付普及的背景下。
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Introduce_Describe;


