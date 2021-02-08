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
    BaseComponent.prototype.removeFrom = function (parent) {
        if (parent !== this.element.parentElement) {
            throw new Error('not same parent node');
        }
        else {
            parent.removeChild(this.element);
        }
    };
    return BaseComponent;
}());
export { BaseComponent };
