import { BaseComponent } from '../../pageComponent.js';

export class HeadPopup extends BaseComponent {
  constructor() {
    super(`<div class="head__popup">
            <div class="head__popup__content">
              <input type="text" />
            </div>
          </div>`);
  }
}
