"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Messenger = (function () {
	function Messenger() {
		_classCallCheck(this, Messenger);

		this.subscribers = [];
	}

	_createClass(Messenger, [{
		key: "publish",
		value: function publish(topic, message) {
			if (this.subscribers.hasOwnProperty(topic)) {
				this.subscribers[topic].subscribers.forEach(function (item) {
					item(message);
				});
			}
		}
	}, {
		key: "subscribeTo",
		value: function subscribeTo(topic, subscriber) {
			var subscribersByTopic;

			if (this.subscribers.hasOwnProperty(topic)) {
				subscribersByTopic = this.subscribers[topic];
			} else {
				subscribersByTopic = { subscribers: [] };
				this.subscribers[topic] = subscribersByTopic;
			}

			subscribersByTopic.subscribers.push(subscriber);
		}
	}]);

	return Messenger;
})();

Messenger.global = new Messenger();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1lc3Nlbmdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTSxTQUFTO0FBQ0gsVUFETixTQUFTLEdBQ0E7d0JBRFQsU0FBUzs7QUFFYixNQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztFQUN0Qjs7Y0FISSxTQUFTOztTQUtQLGlCQUFDLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDdkIsT0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUMzQyxRQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUU7QUFDM0QsU0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2QsQ0FBQyxDQUFDO0lBQ0g7R0FDRDs7O1NBRVUscUJBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUM5QixPQUFJLGtCQUFrQixDQUFDOztBQUV2QixPQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzNDLHNCQUFrQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsTUFBTTtBQUNOLHNCQUFrQixHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLFFBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsa0JBQWtCLENBQUM7SUFDN0M7O0FBRUQscUJBQWtCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztHQUNoRDs7O1FBeEJJLFNBQVM7OztBQTJCZixTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1lc3NlbmdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcblx0fVxuXG5cdHB1Ymxpc2godG9waWMsIG1lc3NhZ2UpIHtcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVycy5oYXNPd25Qcm9wZXJ0eSh0b3BpYykpIHtcblx0XHRcdHRoaXMuc3Vic2NyaWJlcnNbdG9waWNdLnN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0aXRlbShtZXNzYWdlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHN1YnNjcmliZVRvKHRvcGljLCBzdWJzY3JpYmVyKSB7XG5cdFx0dmFyIHN1YnNjcmliZXJzQnlUb3BpYztcblxuXHRcdGlmICh0aGlzLnN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KHRvcGljKSkge1xuXHRcdFx0c3Vic2NyaWJlcnNCeVRvcGljID0gdGhpcy5zdWJzY3JpYmVyc1t0b3BpY107XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1YnNjcmliZXJzQnlUb3BpYyA9IHsgc3Vic2NyaWJlcnM6IFtdIH07XG5cdFx0XHR0aGlzLnN1YnNjcmliZXJzW3RvcGljXSA9IHN1YnNjcmliZXJzQnlUb3BpYztcblx0XHR9XG5cblx0XHRzdWJzY3JpYmVyc0J5VG9waWMuc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKTtcblx0fVxufVxuXG5NZXNzZW5nZXIuZ2xvYmFsID0gbmV3IE1lc3NlbmdlcigpOyJdfQ==