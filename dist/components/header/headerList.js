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
import Week from '../../utils/date.js';
var HeaderList = /** @class */ (function (_super) {
    __extends(HeaderList, _super);
    function HeaderList(items) {
        var _this = _super.call(this, "<div>\n            <p class=\"header__year\"></p>\n            <div class=\"header__diary\">\n              <button class=\"diary__prev\"> < </button>\n              <ul class=\"header__list\"></ul>\n              <button class=\"diary__next\"> > </button>\n            </div>\n          </div>") || this;
        _this.items = items;
        _this.idx = -1;
        var ul = _this.element.querySelector('.header__list');
        // let idx: number;
        _this.items.forEach(function (item, i) {
            if (item.data.date === Week.getDate()) {
                item.click = true;
                item.addHighlight();
                _this.idx = i;
            }
            item.attachTo(ul);
        });
        ul.addEventListener('click', function (e) {
            _this.onListClick(e.target, _this.idx);
        });
        _this._yearAndMonth = _this.element.querySelector('.header__year');
        _this._yearAndMonth.textContent = Week.getYear().toString() + "." + Week.getMonth().toString();
        var prevBtn = _this.element.querySelector('.diary__prev');
        var nextBtn = _this.element.querySelector('.diary__next');
        prevBtn.addEventListener('click', function () {
            _this.setOnDate(Week.getPrevWeek());
            _this.onPrev && _this.onPrev();
        });
        nextBtn.addEventListener('click', function () {
            _this.setOnDate(Week.getNextWeek());
            _this.onNext && _this.onNext();
        });
        return _this;
    }
    HeaderList.prototype.setOnPrevListener = function (listener) {
        this.onPrev = listener;
    };
    HeaderList.prototype.setOnNextListener = function (listener) {
        this.onNext = listener;
    };
    HeaderList.prototype.setOnDate = function (week) {
        var _this = this;
        week.forEach(function (nextDay, i) {
            _this.items[i].changeDate(nextDay.date);
            _this.items[i].changeDay(nextDay.day);
            _this.items[i].data = nextDay;
            if (_this.items[i].click)
                _this.changeYearAndMonth(nextDay);
        });
    };
    HeaderList.prototype.onListClick = function (target, idx) {
        var _this = this;
        if (idx === -1)
            throw new Error("Invalid number: " + idx);
        this.items[idx].click = false;
        if (target.tagName === 'BUTTON' || target.tagName === 'SPAN') {
            this.items.forEach(function (item, i) {
                !item.click && item.removeHighlight();
                if (item.click) {
                    _this.idx = i;
                    _this.changeYearAndMonth(item.data);
                }
                item.click = false;
            });
        }
        this.items[idx].click = true;
    };
    HeaderList.prototype.changeYearAndMonth = function (day) {
        this._yearAndMonth.textContent = day.year.toString() + "." + day.month.toString();
    };
    return HeaderList;
}(BaseComponent));
export { HeaderList };
