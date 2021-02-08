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
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content() {
        var _this = _super.call(this, "<section>\n              <div class=\"content\">\n              </div>\n          </section>") || this;
        _this.content = _this.element.querySelector('.content');
        return _this;
    }
    Content.prototype.addChild = function (child) {
        child.attachTo(this.content);
    };
    return Content;
}(BaseComponent));
export { Content };
