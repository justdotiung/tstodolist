import { BaseComponent } from './../../pageComponent.js';
export class ContentItem extends BaseComponent {
  constructor(content: string) {
    super(`<li><span></span></li>`);

    const span = this.element.querySelector('span') as HTMLSpanElement;

    span.textContent = content;
  }
}
