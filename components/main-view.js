var React = require('react');
var Content = require('./content');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var MainView = React.createClass({
	back() {
		this.props.back();
	},
	forward() {
		this.props.next(this.props.currContent.next);
	},
	render() {
		let prevContent = null;
		if(this.props.prevContent) {
			let prevContentRef = this.props.prevContent.ref;
			prevContent = ( <div key={'prev' + prevContentRef} className="content prev" onClick={this.back}>
								<Content id={prevContentRef} />
							</div>);
		}

		let currContentRef = this.props.currContent.ref;
		return (
			<div className="container">
				<ReactCSSTransitionGroup transitionName={this.props.animation} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
					{prevContent}
					<div key={'curr' + currContentRef} className="content curr" onClick={this.forward}>
						<Content id={currContentRef} />
					</div>
				</ReactCSSTransitionGroup>
			</div>

		);
	}
})

module.exports = MainView;