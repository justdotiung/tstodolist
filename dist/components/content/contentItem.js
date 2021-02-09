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
var ContentItem = /** @class */ (function (_super) {
    __extends(ContentItem, _super);
    function ContentItem(content) {
        var _this = _super.call(this, "<li><span></span></li>") || this;
        var span = _this.element.querySelector('span');
        span.textContent = content;
        return _this;
    }
    return ContentItem;
}(BaseComponent));
export { ContentItem };
