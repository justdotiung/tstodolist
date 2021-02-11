import { WeekData } from './../../utils/date.js';
import { BaseComponent } from '../../pageComponent.js';

export class ListItem extends BaseComponent {
  private onClick: EventListener | undefined;
  private _dayTag: HTMLElement;
  private _dateTag: HTMLElement;
  private _click = false;

  constructor(private _day: WeekData) {
    super(`<li class="header__list__item">
            <button>
              <span class="header__list__item__date"></span>
              <span class="header__list__item__day"></span>
            </button>
          </li>`);

    const button = this.element.querySelector('button') as HTMLButtonElement;
    this._dateTag = this.element.querySelector('.header__list__item__date') as HTMLSpanElement;
    this._dayTag = this.element.querySelector('.header__list__item__day') as HTMLSpanElement;

    this._dateTag.textContent = this._day.date.toString();
    this._dayTag.textContent = `(${this.convertNumberToString(this._day.day)})`;

    button.onclick = (e: Event) => {
      this._click = true;
      this.addHighlight();
      this.onClick && this.onClick(e);
    };
  }

  set click(click: boolean) {
    this._click = click;
  }

  get click(): boolean {
    return this._click;
  }

  set data(data: WeekData) {
    this._day = data;
  }

  get data(): WeekData {
    return this._day;
  }

  changeDate(n: number): void {
    this._dateTag.textContent = n.toString();
  }

  changeDay(day: number): void {
    this._dayTag.textContent = `(${this.convertNumberToString(day)})`;
  }

  setClickHandler(handler: EventListener): void {
    this.onClick = handler;
  }

  removeHighlight(): void {
    const button = this.element.querySelector('button') as HTMLButtonElement;
    button.classList.remove('highlight');
  }

  addHighlight(): void {
    const button = this.element.querySelector('button') as HTMLButtonElement;
    button.classList.add('highlight');
  }

  private convertNumberToString(number: number): string {
    switch (number) {
      case 0:
        return '일';
      case 1:
        return '월';
      case 2:
        return '화';
      case 3:
        return '수';
      case 4:
        return '목';
      case 5:
        return '금';
      case 6:
        return '토';
      default:
        throw new Error(`not convert number ${number}`);
    }
  }
}
