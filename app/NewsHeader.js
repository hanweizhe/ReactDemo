import React from "react";
import imageLogo from "./y18.gif";
import "./NewsHeader.css";
export default class NewsHeader extends React.Component{
	
	getLogo(){
		return (
			<div className="newsHeader-logo">
				<a href="#">
					<img src={imageLogo}/>
				</a>
			</div>
		);
	}
	getTitle(){
		return(
			<div className="newsHeader-title">
				<a className="newsHeader-textLink" href="http://google.com"></a>
			</div>
		)
	}
	getNav(){
		var navLists=[
			{
				name:"new",
				url:"newest"
			},
			{
			   name: 'comments',
			   url: 'newcomments'
			},
			{
			   name: 'show',
			   url: 'show'
			},
			{
			   name: 'ask',
			   url: 'ask'
			},
			{
			   name: 'jobs',
			   url: 'jobs'
			},
			{
			   name: 'submit',
			   url: 'submit'
			}
		];
		return(
			<div className="NewsHeader-nav">
				{
					navLists.map(function(navlist){
						return (
							<a key={navlist.url} className="newsHeader-navLink newsHeader-textLink" href={"https://news.ycombinator.com/"+navlist.url}>
								{navlist.name}
							</a>
						)
					})
				}
			</div>
		)
	}
	getLogin() {
	 return (
	     <div className="newsHeader-login">
	       <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?goto=news">login</a>
	     </div>
	     );
	}
	render(){
		return (
			<div className="newsHeader">
				{this.getLogo()}
				{this.getTitle()}
				{this.getNav()}
				{this.getLogin()}
			</div>
		);
	}
}