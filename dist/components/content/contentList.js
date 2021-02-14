import { BaseComponent } from './../../pageComponent.js';
export class ContentList extends BaseComponent {
    constructor() {
        super(`<div class="body_content__div">
            <ul class="body_content__ul"></ul>
          </div>`);
    }
    addChild(child) {
        const ul = this.element.querySelector('.body_content__ul');
        child.attachTo(ul);
    }
    removeAllChildNode() {
        const ul = this.element.querySelector('.body_content__ul');
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
}
