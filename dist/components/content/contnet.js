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
    function Content(component) {
        var _this = _super.call(this, "<section class=\"content__section\">\n              <div class=\"content\">\n                <div class=\"content__box__title\">\n                  <input type=\"text\" >\n                  <button>ADD</button>\n                </div>\n              </div>\n          </section>") || this;
        _this.component = component;
        component.attachTo(_this.element);
        // this.content = this.element.querySelector('.content') as HTMLElement;
        var button = _this.element.querySelector('button');
        button.addEventListener('click', function () {
            _this.onClick && _this.onClick();
        });
        return _this;
    }
    Content.prototype.getChildComponent = function () {
        return this.component;
    };
    Content.prototype.setOnClick = function (listener) {
        this.onClick = listener;
    };
    return Content;
}(BaseComponent));
export { Content };
