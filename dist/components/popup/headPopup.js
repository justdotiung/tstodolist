import { BaseComponent } from '../../pageComponent.js';
export class HeadPopup extends BaseComponent {
    constructor() {
        super(`<div class="head__popup">
            <div>
              <div class="head__popup__content">
              <input class="head__popup__input" type="text" placeholder="write some todo..."  >
              <button class="head__popup__add">+</button>
              <button class="head__popup__close">x</button>
              </div>
              <span class="popup__error"></span>
            </div>
          </div>`);
        const addBtn = this.element.querySelector('.head__popup__add');
        const errorSpan = this.element.querySelector('.popup__error');
        this.input = this.element.querySelector('.head__popup__input');
        this.input.onfocus = () => {
            errorSpan.classList.remove('error');
            this.input.placeholder = '';
        };
        this.input.onblur = () => {
            this.input.placeholder = 'write some todo...';
        };
        addBtn.onclick = () => {
            try {
                this.onClick && this.onClick();
                this.removeFrom(this.element.parentElement);
                this.input.value = '';
                errorSpan.classList.remove('error');
            }
            catch (e) {
                errorSpan.classList.add('error');
                errorSpan.textContent = e.message;
            }
        };
        const closeBtn = this.element.querySelector('.head__popup__close');
        closeBtn.onclick = () => {
            this.removeFrom(this.element.parentElement);
        };
    }
    get value() {
        this.input.value;
        return this.input.value;
    }
    set value(text) {
        this.input.value = text;
    }
    setOnClick(listener) {
        this.onClick = listener;
    }
}
