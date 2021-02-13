import { BaseComponent } from '../../pageComponent.js';
export class Header extends BaseComponent {
    constructor(list) {
        super(`<header>
						<h1 class="header__title">Todo...</h1>
				</header>`);
        list && list.attachTo(this.element);
    }
}
