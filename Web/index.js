import $ from 'jquery';
import ko from 'knockout';
import hubs from 'hubs';
import 'Messenger';

class Index
{
	constructor() {
		var self = this;		
		this.timeline = ko.observableArray();
		
		this.beers = [
			{name: 'Bitburger', image: 'IMG_0001.png'},
			{name: 'Famosa', image: 'IMG_0002.png'},
			{name: 'Hoegaarden', image: 'IMG_0003.png'},
			{name: 'Alaskan Amber', image: 'IMG_0004.png'},
			{name: 'Mannys Pale Ale', image: 'IMG_0005.png'},
			{name: 'San Miguel', image: 'IMG_0006.png'},
			{name: 'Spitfire', image: 'IMG_0007.png'},
			{name: 'Coors Light', image: 'IMG_0008.png'},
			{name: 'Jacobsen Extra - Carlsberg', image: 'IMG_0009.png'},
			{name: 'Samuel Adams', image: 'IMG_0010.png'},
			{name: 'Aass Lite', image: 'IMG_0011.png'},
			{name: 'Estrella', image: 'IMG_0012.png'},
			{name: 'Brooklyn Lager', image: 'IMG_0013.png'},
			{name: 'Innis & Gunn', image: 'IMG_0014.png'}
		];
		
		this.selectedBeer = ko.observable();
		
		Messenger.global.subscribeTo("entryAdded", entry => self.timeline.unshift(entry));
		
		hubs.timelineHub.server.getAll().done(result => {
			result.forEach(entry => {
				self.timeline.push(entry);
			});
		});
	}
	
	checkIn() {
		hubs.timelineHub.server.checkIn(this.selectedBeer().name, this.selectedBeer().image);
	}
	
}

$(function() {
	var instance = new Index();
	ko.applyBindings(instance);
});
