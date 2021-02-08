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
        var _this = _super.call(this, "<div class=\"head__popup\">\n            <div>\n              <div class=\"head__popup__content\">\n              <input class=\"head__popup__input\" type=\"text\" placeholder=\"write some todo...\"  >\n              <button class=\"head__popup__add\">+</button>\n              <button class=\"head__popup__close\">x</button>\n              </div>\n            </div>\n          </div>") || this;
        _this.input = _this.element.querySelector('.head__popup__input');
        _this.input.onfocus = function () {
            _this.input.placeholder = '';
        };
        _this.input.onblur = function () {
            _this.input.placeholder = 'write some todo...';
        };
        var addBtn = _this.element.querySelector('.head__popup__add');
        addBtn.onclick = function () {
            _this.removeFrom(_this.element.parentElement);
            _this.onClick && _this.onClick();
        };
        var closeBtn = _this.element.querySelector('.head__popup__close');
        closeBtn.onclick = function () {
            _this.removeFrom(_this.element.parentElement);
        };
        return _this;
    }
    Object.defineProperty(HeadPopup.prototype, "value", {
        get: function () {
            this.input.value;
            return this.input.value;
        },
        enumerable: false,
        configurable: true
    });
    HeadPopup.prototype.setOnClick = function (listener) {
        this.onClick = listener;
    };
    return HeadPopup;
}(BaseComponent));
export { HeadPopup };
