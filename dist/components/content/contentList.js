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
    function ContentList() {
        return _super.call(this, "<div class=\"content__box\">\n            <ul class=\"content__box__div\"></ul>\n          </div>") || this;
    }
    ContentList.prototype.addChild = function (child) {
        var ul = this.element.querySelector('.content__box__div');
        child.attachTo(ul);
    };
    return ContentList;
}(BaseComponent));
export { ContentList };
