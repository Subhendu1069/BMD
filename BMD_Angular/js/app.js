(function(){
	var app	= angular.module('BMD',['ng-fusioncharts']);

	app.controller('BMDController',function(){
		this.card = value;
		
	});
	var value = [
	{
		name: 'Total Issues',
		count: '50',
		onl: '20',
		edp: '10',
		NC: '20',
		compareval:'20',
	},
	{
		name: 'Open Issues',
		count: '20',
		onl: '10',
		edp: '5',
		NC: '5',
		compareval:'15',
	},
	{
		name: 'Ticket Raised',
		count: '30',
		onl: '20',
		edp: '10',
		NC: '0',
		compareval:'0',
	},
	{
		name: 'Resolved Issues',
		count: '0',
		onl: '0',
		edp: '0',
		NC: '0',
		compareval:'15',
	}
	]

})();