import { BaseComponent } from '../../pageComponent.js';
import { ListItem } from './headerItem.js';

export class HeaderList extends BaseComponent {
  constructor(item: ListItem | Array<ListItem>) {
    super(`<ul class="header__list"></ul>`);
    if (!Array.isArray(item)) item.attachTo(this.element);
    else item.forEach((v) => v.attachTo(this.element));
  }
}
