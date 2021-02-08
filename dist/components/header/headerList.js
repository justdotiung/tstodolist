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
        var _this = _super.call(this, "<ul class=\"header__list\"></ul>") || this;
        if (!Array.isArray(item))
            item.attachTo(_this.element);
        else
            item.forEach(function (v) { return v.attachTo(_this.element); });
        return _this;
    }
    return HeaderList;
}(BaseComponent));
export { HeaderList };
