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
        var _this = _super.call(this, "<div class=\"content__box\">\n            <div class=\"content__box__title\"><span></span></div>\n            <div class=\"content__box__body\">\n              <ul>\n                <li><span>today1</span></li>\n                <li><span>today2</span></li>\n                <li><span>today3</span></li>\n              </ul>\n            </div>\n          </div>\n    ") || this;
        var titleP = _this.element.querySelector('span');
        titleP.textContent = title;
        return _this;
    }
    return ContentList;
}(BaseComponent));
export { ContentList };
