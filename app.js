require('./css/styles.css');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var MainView = require('./components/main-view');

var App = Backbone.View.extend({
	el: $('.app'),

	initialize: function() {
		this.pages = [
			{
				ref: 0,
				next: 1
			},
			{
				ref: 1,
				next: 2
			},
			{
				ref: 2,
				next: 3
			},
			{
				ref: 3,
				next: 4
			},
			{
				ref: 4,
				next: 5
			},
			{
				ref: 5,
				next: null
			}
		];
		this.stack = [this.pages[0]];
		this.animation = "slidein";
		this.render();
	},

	renderPreviousView: function() {
		if(this.stack.length > 1) {
			this.stack.pop();
		}
		this.animation = "slideout";
		this.render();
	},

	renderNextView: function(ref) {
		if(ref) {
			this.stack.push(this.pages[ref]);
		}
		this.animation = "slidein";
		this.render();
	},

	render: function() {
		ReactDOM.render(
			<MainView animation={this.animation}
					  currContent={this.stack[this.stack.length - 1]}
					  prevContent={this.stack[this.stack.length - 2]}
					  next={this.renderNextView.bind(this)}
					  back={this.renderPreviousView.bind(this)} />, this.el);
	}
});

$(function(){ new App() });


