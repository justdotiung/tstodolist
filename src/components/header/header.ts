import { BaseComponent } from '../../pageComponent.js';
import { HeaderList } from './headerList.js';

export class Header extends BaseComponent {
  constructor(list?: HeaderList) {
    super(`<header>
						<h1 class="header__title">Todo List</h1>
				</header>`);

    list && this.addChild(list);
  }
}
