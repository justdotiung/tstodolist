import { BaseComponent } from './../../pageComponent.js';
export class ContentItem extends BaseComponent {
  constructor(content: string) {
    super(`<div class="content__item"><span></span></div>`);

    const span = this.element.querySelector('span') as HTMLSpanElement;

    span.textContent = content;
  }
}
