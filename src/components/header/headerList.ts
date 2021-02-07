import { BaseComponent } from '../../pageComponent.js';
import { ListItem } from './headerItem.js';

export class HeaderList extends BaseComponent {
  constructor(item: ListItem | Array<ListItem>) {
    super(`<ul class="header__list"></ul>`);
    if (!Array.isArray(item)) this.addChild(item);
    else item.forEach((v) => this.addChild(v));
  }
}
