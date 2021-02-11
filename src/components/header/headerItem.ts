import { BaseComponent } from '../../pageComponent.js';

export class ListItem extends BaseComponent {
  onClick: EventListener | undefined;
  constructor(private _text: string) {
    super(`<li class="header__list__item"><button><p>월</p></button></li>`);

    const button = this.element.querySelector('button') as HTMLButtonElement;
    // button.textContent = _text;
    button.onclick = (e: Event) => {
      this.onClick && this.onClick(e);
    };
  }

  setClickHandler(handler: EventListener): void {
    this.onClick = handler;
  }

  get title(): string {
    return this._text;
  }

  set title(text: string) {
    this._text = text;
  }
}
