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
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem(text) {
        var _this = _super.call(this, "<li class=\"header__list__item\"><button></button></li>") || this;
        _this.text = text;
        var button = _this.element.querySelector('button');
        button.textContent = text;
        button.onclick = function (e) {
            _this.onClick && _this.onClick(e);
        };
        return _this;
    }
    ListItem.prototype.setClickHandler = function (handler) {
        this.onClick = handler;
    };
    return ListItem;
}(BaseComponent));
export { ListItem };
