export class BaseComponent {
    constructor(innerHtml) {
        if (!/^</.test(innerHtml))
            throw new Error(`${innerHtml} is not html tag`);
        const template = document.createElement('template');
        template.innerHTML = innerHtml;
        this.element = template.content.firstElementChild;
    }
    attachTo(parent) {
        parent.appendChild(this.element);
    }
    removeFrom(parent) {
        if (parent !== this.element.parentElement) {
            throw new Error('not same parent node');
        }
        else {
            parent.removeChild(this.element);
        }
    }
}
