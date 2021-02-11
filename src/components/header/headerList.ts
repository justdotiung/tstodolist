import { BaseComponent } from '../../pageComponent.js';
import { ListItem } from './headerItem.js';

type OnClickHandler = () => void;

export class HeaderList extends BaseComponent {
  private onPrev: OnClickHandler | undefined;
  private onNext: OnClickHandler | undefined;
  constructor(item: ListItem | Array<ListItem>) {
    super(`<div>
            <p>2021.02</p>
            <div class="header__diary">
              <button class="diary__prev"> < </button>
              <ul class="header__list"></ul>
              <button class="diary__next"> > </button>
            </div>
          </div>`);

    const ul = this.element.querySelector('.header__list') as HTMLUListElement;
    if (!Array.isArray(item)) item.attachTo(ul);
    else item.forEach((v) => v.attachTo(ul));

    const prevBtn = this.element.querySelector('.diary__prev') as HTMLButtonElement;
    const nextBtn = this.element.querySelector('.diary__next') as HTMLButtonElement;

    prevBtn.addEventListener('click', () => {
      this.onPrev && this.onPrev();
    });

    nextBtn.addEventListener('click', () => {
      this.onNext && this.onNext();
    });
  }

  setOnPrevListener(listener: OnClickHandler): void {
    this.onPrev = listener;
  }

  setOnNextListener(listener: OnClickHandler): void {
    this.onNext = listener;
  }
}
