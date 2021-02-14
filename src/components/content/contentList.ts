import { BaseComponent } from './../../pageComponent.js';
export class ContentList extends BaseComponent {
  constructor() {
    super(`<div class="body_content__div">
            <ul class="body_content__ul"></ul>
          </div>`);
  }

  addChild(child: BaseComponent): void {
    const ul = this.element.querySelector('.body_content__ul') as HTMLUListElement;
    child.attachTo(ul);
  }

  removeAllChildNode(): void {
    const ul = this.element.querySelector('.body_content__ul') as HTMLUListElement;
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
}
