import { BaseComponent } from './../../pageComponent.js';
export class ContentList extends BaseComponent {
    constructor() {
        super(`<div class="content__box">
            <ul class="content__box__div"></ul>
          </div>`);
    }
    addChild(child) {
        const ul = this.element.querySelector('.content__box__div');
        child.attachTo(ul);
    }
    removeAllChildNode() {
        const ul = this.element.querySelector('.content__box__div');
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
}
