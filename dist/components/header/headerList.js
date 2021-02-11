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
var HeaderList = /** @class */ (function (_super) {
    __extends(HeaderList, _super);
    function HeaderList(item) {
        var _this = _super.call(this, "<div>\n            <p>2021.02</p>\n            <div class=\"header__diary\">\n              <button class=\"diary__prev\"> < </button>\n              <ul class=\"header__list\"></ul>\n              <button class=\"diary__next\"> > </button>\n            </div>\n          </div>") || this;
        var ul = _this.element.querySelector('.header__list');
        if (!Array.isArray(item))
            item.attachTo(ul);
        else
            item.forEach(function (v) { return v.attachTo(ul); });
        var prevBtn = _this.element.querySelector('.diary__prev');
        var nextBtn = _this.element.querySelector('.diary__next');
        prevBtn.addEventListener('click', function () {
            _this.onPrev && _this.onPrev();
        });
        nextBtn.addEventListener('click', function () {
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
    return HeaderList;
}(BaseComponent));
export { HeaderList };
