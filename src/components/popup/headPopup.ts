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
    addBtn.onclick = () => {
      this.removeFrom(this.element.parentElement as HTMLElement);
      this.onClick && this.onClick();
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
