import { BaseComponent } from '../../pageComponent.js';

type onClickListener = () => void;

export class HeadPopup extends BaseComponent {
  private input: HTMLInputElement;
  private onClick: onClickListener | undefined;
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

    this.input = this.element.querySelector('.head__popup__input') as HTMLInputElement;
    this.input.onfocus = () => {
      this.input.placeholder = '';
    };
    this.input.onblur = () => {
      this.input.placeholder = 'write some todo...';
    };

    const addBtn = this.element.querySelector('.head__popup__add') as HTMLButtonElement;
    const errorSpan = this.element.querySelector('.popup__error') as HTMLElement;

    addBtn.onclick = () => {
      try {
        this.onClick && this.onClick();
        this.removeFrom(this.element.parentElement as HTMLElement);
        this.input.value = '';
        errorSpan.classList.remove('error');
      } catch (e) {
        errorSpan.classList.add('error');
        errorSpan.textContent = e.message;
      }
    };

    const closeBtn = this.element.querySelector('.head__popup__close') as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.removeFrom(this.element.parentElement as HTMLElement);
    };
  }

  get value(): string {
    this.input.value;
    return this.input.value;
  }

  setOnClick(listener: onClickListener): void {
    this.onClick = listener;
  }
}
