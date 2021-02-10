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
import { BaseComponent } from './../../pageComponent.js';
var ContentList = /** @class */ (function (_super) {
    __extends(ContentList, _super);
    function ContentList(title) {
        var _this = _super.call(this, "<div class=\"content__box\">\n            <div class=\"content__box__title\"><span></span></div>\n            <div class=\"content__box__body\">\n              <div class=\"content__box__div\"></div>\n            </div>\n          </div>\n    ") || this;
        _this._ui = false;
        var titleP = _this.element.querySelector('span');
        titleP.textContent = title;
        return _this;
    }
    Object.defineProperty(ContentList.prototype, "ui", {
        get: function () {
            return this._ui;
        },
        set: function (b) {
            this._ui = b;
        },
        enumerable: false,
        configurable: true
    });
    ContentList.prototype.addChild = function (child) {
        var ul = this.element.querySelector('.content__box__div');
        child.attachTo(ul);
    };
    return ContentList;
}(BaseComponent));
export { ContentList };
