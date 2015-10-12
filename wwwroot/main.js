'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _knockout = require('knockout');

var _knockout2 = _interopRequireDefault(_knockout);

function namespace(name) {
    return function decorator(target) {
        console.log(target);
    };
}

var Something = (function () {
    function Something() {
        _classCallCheck(this, _Something);
    }

    _createClass(Something, [{
        key: 'sayHello',
        value: function sayHello() {
            console.log("Hello and then some - and more and even more - and then some");
        }
    }]);

    var _Something = Something;
    Something = namespace("Hello")(Something) || Something;
    return Something;
})();

var SomethingElse = (function (_Something2) {
    _inherits(SomethingElse, _Something2);

    function SomethingElse() {
        _classCallCheck(this, SomethingElse);

        _get(Object.getPrototypeOf(SomethingElse.prototype), 'constructor', this).apply(this, arguments);
    }

    return SomethingElse;
})(Something);

var somethingElseInstance = new Something();
somethingElseInstance.sayHello();

console.log(_knockout2['default']);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3NCQUFjLFFBQVE7Ozs7d0JBQ1AsVUFBVTs7OztBQUV6QixTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDckIsV0FBTyxTQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUU7QUFDOUIsZUFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN2QixDQUFBO0NBQ0o7O0lBR0ssU0FBUzthQUFULFNBQVM7Ozs7aUJBQVQsU0FBUzs7ZUFDSCxvQkFBRztBQUNQLG1CQUFPLENBQUMsR0FBRyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7U0FDL0U7OztxQkFIQyxTQUFTO0FBQVQsYUFBUyxHQURkLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FDYixTQUFTLEtBQVQsU0FBUztXQUFULFNBQVM7OztJQU1ULGFBQWE7Y0FBYixhQUFhOzthQUFiLGFBQWE7OEJBQWIsYUFBYTs7bUNBQWIsYUFBYTs7O1dBQWIsYUFBYTtHQUFTLFNBQVM7O0FBSXJDLElBQUkscUJBQXFCLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUM1QyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7QUFHakMsT0FBTyxDQUFDLEdBQUcsdUJBQUksQ0FBQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBrbyBmcm9tICdrbm9ja291dCc7XG5cbmZ1bmN0aW9uIG5hbWVzcGFjZShuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICB9XG59XG5cbkBuYW1lc3BhY2UoXCJIZWxsb1wiKVxuY2xhc3MgU29tZXRoaW5nIHtcbiAgICBzYXlIZWxsbygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsbyBhbmQgdGhlbiBzb21lIC0gYW5kIG1vcmUgYW5kIGV2ZW4gbW9yZSAtIGFuZCB0aGVuIHNvbWVcIik7XG4gICAgfVxufVxuXG5jbGFzcyBTb21ldGhpbmdFbHNlIGV4dGVuZHMgU29tZXRoaW5nIHtcblx0XG59XG5cbmxldCBzb21ldGhpbmdFbHNlSW5zdGFuY2UgPSBuZXcgU29tZXRoaW5nKCk7XG5zb21ldGhpbmdFbHNlSW5zdGFuY2Uuc2F5SGVsbG8oKTtcblxuXG5jb25zb2xlLmxvZyhrbyk7XG5cblxuIl19