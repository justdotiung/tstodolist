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
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(list) {
        var _this = _super.call(this, "<header>\n\t\t\t\t\t\t<h1 class=\"header__title\">Todo...</h1>\n\t\t\t\t</header>") || this;
        list && list.attachTo(_this.element);
        return _this;
    }
    return Header;
}(BaseComponent));
export { Header };
