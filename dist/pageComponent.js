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
var BaseComponent = /** @class */ (function () {
    function BaseComponent(innerHtml) {
        if (!/^</.test(innerHtml))
            throw new Error(innerHtml + " is not html tag");
        var template = document.createElement('template');
        template.innerHTML = innerHtml;
        this.element = template.content.firstElementChild;
    }
    BaseComponent.prototype.attachTo = function (parent) {
        parent.appendChild(this.element);
    };
    BaseComponent.prototype.addChild = function (child) {
        this.element.appendChild(child.element);
    };
    return BaseComponent;
}());
export { BaseComponent };
var PageComponent = /** @class */ (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent() {
        return _super.call(this, "<div></div>") || this;
    }
    return PageComponent;
}(BaseComponent));
export { PageComponent };
