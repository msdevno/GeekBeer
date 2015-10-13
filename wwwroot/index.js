'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _knockout = require('knockout');

var _knockout2 = _interopRequireDefault(_knockout);

var _hubs = require('hubs');

var _hubs2 = _interopRequireDefault(_hubs);

require('Messenger');

var Index = (function () {
	function Index() {
		_classCallCheck(this, Index);

		var self = this;
		this.timeline = _knockout2['default'].observableArray();

		this.beers = [{ name: 'Bitburger', image: 'IMG_0001.png' }, { name: 'Famosa', image: 'IMG_0002.png' }, { name: 'Hoegaarden', image: 'IMG_0003.png' }, { name: 'Alaskan Amber', image: 'IMG_0004.png' }, { name: 'Mannys Pale Ale', image: 'IMG_0005.png' }, { name: 'San Miguel', image: 'IMG_0006.png' }, { name: 'Spitfire', image: 'IMG_0007.png' }, { name: 'Coors Light', image: 'IMG_0008.png' }, { name: 'Jacobsen Extra - Carlsberg', image: 'IMG_0009.png' }, { name: 'Samuel Adams', image: 'IMG_0010.png' }, { name: 'Aass Lite', image: 'IMG_0011.png' }, { name: 'Estrella', image: 'IMG_0012.png' }, { name: 'Brooklyn Lager', image: 'IMG_0013.png' }, { name: 'Innis & Gunn', image: 'IMG_0014.png' }];

		this.selectedBeer = _knockout2['default'].observable();

		Messenger.global.subscribeTo("entryAdded", function (entry) {
			return self.timeline.unshift(entry);
		});

		_hubs2['default'].timelineHub.server.getAll().done(function (result) {
			result.forEach(function (entry) {
				self.timeline.push(entry);
			});
		});
	}

	_createClass(Index, [{
		key: 'checkIn',
		value: function checkIn() {
			_hubs2['default'].timelineHub.server.checkIn(this.selectedBeer().name, this.selectedBeer().image);
		}
	}]);

	return Index;
})();

(0, _jquery2['default'])(function () {
	var instance = new Index();
	_knockout2['default'].applyBindings(instance);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3NCQUFjLFFBQVE7Ozs7d0JBQ1AsVUFBVTs7OztvQkFDUixNQUFNOzs7O1FBQ2hCLFdBQVc7O0lBRVosS0FBSztBQUVDLFVBRk4sS0FBSyxHQUVJO3dCQUZULEtBQUs7O0FBR1QsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLE1BQUksQ0FBQyxRQUFRLEdBQUcsc0JBQUcsZUFBZSxFQUFFLENBQUM7O0FBRXJDLE1BQUksQ0FBQyxLQUFLLEdBQUcsQ0FDWixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQyxFQUMxQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQyxFQUN2QyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQyxFQUMzQyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQyxFQUM5QyxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFDLEVBQ2hELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFDLEVBQzNDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFDLEVBQ3pDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFDLEVBQzVDLEVBQUMsSUFBSSxFQUFFLDRCQUE0QixFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUMsRUFDM0QsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUMsRUFDN0MsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUMsRUFDMUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUMsRUFDekMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQyxFQUMvQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQyxDQUM3QyxDQUFDOztBQUVGLE1BQUksQ0FBQyxZQUFZLEdBQUcsc0JBQUcsVUFBVSxFQUFFLENBQUM7O0FBRXBDLFdBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxVQUFBLEtBQUs7VUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7R0FBQSxDQUFDLENBQUM7O0FBRWxGLG9CQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQy9DLFNBQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLLEVBQUk7QUFDdkIsUUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0dBQ0gsQ0FBQyxDQUFDO0VBQ0g7O2NBaENJLEtBQUs7O1NBa0NILG1CQUFHO0FBQ1QscUJBQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDckY7OztRQXBDSSxLQUFLOzs7QUF3Q1gseUJBQUUsWUFBVztBQUNaLEtBQUksUUFBUSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFDM0IsdUJBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQzNCLENBQUMsQ0FBQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBrbyBmcm9tICdrbm9ja291dCc7XG5pbXBvcnQgaHVicyBmcm9tICdodWJzJztcbmltcG9ydCAnTWVzc2VuZ2VyJztcblxuY2xhc3MgSW5kZXhcbntcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1x0XHRcblx0XHR0aGlzLnRpbWVsaW5lID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG5cdFx0XG5cdFx0dGhpcy5iZWVycyA9IFtcblx0XHRcdHtuYW1lOiAnQml0YnVyZ2VyJywgaW1hZ2U6ICdJTUdfMDAwMS5wbmcnfSxcblx0XHRcdHtuYW1lOiAnRmFtb3NhJywgaW1hZ2U6ICdJTUdfMDAwMi5wbmcnfSxcblx0XHRcdHtuYW1lOiAnSG9lZ2FhcmRlbicsIGltYWdlOiAnSU1HXzAwMDMucG5nJ30sXG5cdFx0XHR7bmFtZTogJ0FsYXNrYW4gQW1iZXInLCBpbWFnZTogJ0lNR18wMDA0LnBuZyd9LFxuXHRcdFx0e25hbWU6ICdNYW5ueXMgUGFsZSBBbGUnLCBpbWFnZTogJ0lNR18wMDA1LnBuZyd9LFxuXHRcdFx0e25hbWU6ICdTYW4gTWlndWVsJywgaW1hZ2U6ICdJTUdfMDAwNi5wbmcnfSxcblx0XHRcdHtuYW1lOiAnU3BpdGZpcmUnLCBpbWFnZTogJ0lNR18wMDA3LnBuZyd9LFxuXHRcdFx0e25hbWU6ICdDb29ycyBMaWdodCcsIGltYWdlOiAnSU1HXzAwMDgucG5nJ30sXG5cdFx0XHR7bmFtZTogJ0phY29ic2VuIEV4dHJhIC0gQ2FybHNiZXJnJywgaW1hZ2U6ICdJTUdfMDAwOS5wbmcnfSxcblx0XHRcdHtuYW1lOiAnU2FtdWVsIEFkYW1zJywgaW1hZ2U6ICdJTUdfMDAxMC5wbmcnfSxcblx0XHRcdHtuYW1lOiAnQWFzcyBMaXRlJywgaW1hZ2U6ICdJTUdfMDAxMS5wbmcnfSxcblx0XHRcdHtuYW1lOiAnRXN0cmVsbGEnLCBpbWFnZTogJ0lNR18wMDEyLnBuZyd9LFxuXHRcdFx0e25hbWU6ICdCcm9va2x5biBMYWdlcicsIGltYWdlOiAnSU1HXzAwMTMucG5nJ30sXG5cdFx0XHR7bmFtZTogJ0lubmlzICYgR3VubicsIGltYWdlOiAnSU1HXzAwMTQucG5nJ31cblx0XHRdO1xuXHRcdFxuXHRcdHRoaXMuc2VsZWN0ZWRCZWVyID0ga28ub2JzZXJ2YWJsZSgpO1xuXHRcdFxuXHRcdE1lc3Nlbmdlci5nbG9iYWwuc3Vic2NyaWJlVG8oXCJlbnRyeUFkZGVkXCIsIGVudHJ5ID0+IHNlbGYudGltZWxpbmUudW5zaGlmdChlbnRyeSkpO1xuXHRcdFxuXHRcdGh1YnMudGltZWxpbmVIdWIuc2VydmVyLmdldEFsbCgpLmRvbmUocmVzdWx0ID0+IHtcblx0XHRcdHJlc3VsdC5mb3JFYWNoKGVudHJ5ID0+IHtcblx0XHRcdFx0c2VsZi50aW1lbGluZS5wdXNoKGVudHJ5KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cdFxuXHRjaGVja0luKCkge1xuXHRcdGh1YnMudGltZWxpbmVIdWIuc2VydmVyLmNoZWNrSW4odGhpcy5zZWxlY3RlZEJlZXIoKS5uYW1lLCB0aGlzLnNlbGVjdGVkQmVlcigpLmltYWdlKTtcblx0fVxuXHRcbn1cblxuJChmdW5jdGlvbigpIHtcblx0dmFyIGluc3RhbmNlID0gbmV3IEluZGV4KCk7XG5cdGtvLmFwcGx5QmluZGluZ3MoaW5zdGFuY2UpO1xufSk7XG4iXX0=