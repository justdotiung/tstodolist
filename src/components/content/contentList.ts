import { BaseComponent } from './../../pageComponent.js';
export class ContentList extends BaseComponent {
  constructor() {
    super(`<div class="content__box">
            <ul class="content__box__div"></ul>
          </div>`);
  }

  addChild(child: BaseComponent): void {
    const ul = this.element.querySelector('.content__box__div') as HTMLUListElement;
    child.attachTo(ul);
  }
}
