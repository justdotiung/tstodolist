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
var HeadPopup = /** @class */ (function (_super) {
    __extends(HeadPopup, _super);
    function HeadPopup() {
        return _super.call(this, "<div class=\"head__popup\">\n            <div class=\"head__popup__content\">\n              <input type=\"text\" />\n            </div>\n          </div>") || this;
    }
    return HeadPopup;
}(BaseComponent));
export { HeadPopup };
