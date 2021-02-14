import { BaseComponent } from '../../pageComponent.js';
export class Header extends BaseComponent {
    constructor(list) {
        super(`<header>
            <div class="header__content">
						  <div class="logo">TODO</div>
            </div>
				</header>`);
        list && list.attachTo(this.element.querySelector('.header__content'));
    }
}
