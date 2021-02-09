import { BaseComponent } from '../../pageComponent.js';

export class ListItem extends BaseComponent {
  onClick: EventListener | undefined;
  constructor(private text: string) {
    super(`<li class="header__list__item"><button></button></li>`);

    const button = this.element.querySelector('button') as HTMLButtonElement;
    button.textContent = text;
    button.onclick = (e: Event) => {
      this.onClick && this.onClick(e);
    };
  }

  setClickHandler(handler: EventListener): void {
    this.onClick = handler;
  }

  get title(): string {
    return this.text;
  }
  // onClickHandler(e: Event): void {
  //   this.onClick && this.onClick(e);
  // }
}
