import { BaseComponent } from '../../pageComponent.js';
import Week, { WeekData } from '../../utils/date.js';
import { ListItem } from './headerItem.js';

type OnClickHandler = () => void;

export class HeaderList extends BaseComponent {
  private onPrev: OnClickHandler | undefined;
  private onNext: OnClickHandler | undefined;
  private _yearAndMonth: HTMLElement;
  private idx = -1;

  constructor(private items: Array<ListItem>) {
    super(`<div>
            <p class="header__year"></p>
            <div class="header__diary">
              <button class="diary__prev"> < </button>
              <ul class="header__list"></ul>
              <button class="diary__next"> > </button>
            </div>
          </div>`);

    const ul = this.element.querySelector('.header__list') as HTMLUListElement;
    // let idx: number;
    this.items.forEach((item, i) => {
      if (item.data.date === Week.getDate()) {
        item.click = true;
        item.addHighlight();
        this.idx = i;
      }
      item.attachTo(ul);
    });

    ul.addEventListener('click', (e) => {
      this.onListClick(e.target as HTMLElement, this.idx);
    });

    this._yearAndMonth = this.element.querySelector('.header__year') as HTMLParagraphElement;
    this._yearAndMonth.textContent = `${Week.getYear().toString()}.${Week.getMonth().toString()}`;

    const prevBtn = this.element.querySelector('.diary__prev') as HTMLButtonElement;
    const nextBtn = this.element.querySelector('.diary__next') as HTMLButtonElement;

    prevBtn.addEventListener('click', () => {
      this.setOnDate(Week.getPrevWeek());
      this.onPrev && this.onPrev();
    });

    nextBtn.addEventListener('click', () => {
      this.setOnDate(Week.getNextWeek());
      this.onNext && this.onNext();
    });
  }

  setOnPrevListener(listener: OnClickHandler): void {
    this.onPrev = listener;
  }

  setOnNextListener(listener: OnClickHandler): void {
    this.onNext = listener;
  }

  private setOnDate(week: Array<WeekData>): void {
    week.forEach((data, i) => {
      this.items[i].changeDate(data.date);
      this.items[i].changeDay(data.day);
      this.items[i].data = data;

      if (this.items[i].click) {
        this.changeYearAndMonth(data);
      }
    });
  }

  private onListClick(target: HTMLElement, idx: number): void {
    if (idx === -1) throw new Error(`Invalid number: ${idx}`);
    this.items[idx].click = false;
    if (target.tagName === 'BUTTON' || target.tagName === 'SPAN') {
      this.items.forEach((item, i) => {
        !item.click && item.removeHighlight();
        if (item.click) {
          this.idx = i;
          this.changeYearAndMonth(item.data);
        }
        item.click = false;
      });
    }
    this.items[this.idx].click = true;
  }

  private changeYearAndMonth(day: WeekData): void {
    this._yearAndMonth.textContent = `${day.year.toString()}.${day.month.toString()}`;
  }
}
