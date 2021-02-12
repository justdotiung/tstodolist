import { BaseComponent } from './../../pageComponent.js';
export class ContentItem extends BaseComponent {
  constructor(content: string) {
    super(`<div class="content__item">
            <span></span>
            <input type="checkbox" >
            <input type="text">
            <button>edit</button>
            <button>remove</button>
          </div>`);

    const span = this.element.querySelector('span') as HTMLSpanElement;

    span.textContent = content;
  }
}
