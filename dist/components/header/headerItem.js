var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseComponent } from '../../pageComponent.js';
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem(_day) {
        var _this = _super.call(this, "<li class=\"header__list__item\">\n            <button>\n              <span class=\"header__list__item__date\"></span>\n              <span class=\"header__list__item__day\"></span>\n            </button>\n          </li>") || this;
        _this._day = _day;
        _this._click = false;
        var button = _this.element.querySelector('button');
        _this._dateTag = _this.element.querySelector('.header__list__item__date');
        _this._dayTag = _this.element.querySelector('.header__list__item__day');
        _this._dateTag.textContent = _this._day.date.toString();
        _this._dayTag.textContent = "(" + _this.convertNumberToString(_this._day.day) + ")";
        button.onclick = function (e) {
            _this._click = true;
            _this.addHighlight();
            _this.onClick && _this.onClick(e);
        };
        return _this;
    }
    Object.defineProperty(ListItem.prototype, "click", {
        get: function () {
            return this._click;
        },
        set: function (click) {
            this._click = click;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "data", {
        get: function () {
            return this._day;
        },
        set: function (data) {
            this._day = data;
        },
        enumerable: false,
        configurable: true
    });
    ListItem.prototype.changeDate = function (n) {
        this._dateTag.textContent = n.toString();
    };
    ListItem.prototype.changeDay = function (day) {
        this._dayTag.textContent = "(" + this.convertNumberToString(day) + ")";
    };
    ListItem.prototype.setClickHandler = function (handler) {
        this.onClick = handler;
    };
    ListItem.prototype.removeHighlight = function () {
        var button = this.element.querySelector('button');
        button.classList.remove('highlight');
    };
    ListItem.prototype.addHighlight = function () {
        var button = this.element.querySelector('button');
        button.classList.add('highlight');
    };
    ListItem.prototype.convertNumberToString = function (number) {
        switch (number) {
            case 0:
                return '일';
            case 1:
                return '월';
            case 2:
                return '화';
            case 3:
                return '수';
            case 4:
                return '목';
            case 5:
                return '금';
            case 6:
                return '토';
            default:
                throw new Error("not convert number " + number);
        }
    };
    return ListItem;
}(BaseComponent));
export { ListItem };
