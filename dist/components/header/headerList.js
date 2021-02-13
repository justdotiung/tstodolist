import { BaseComponent } from '../../pageComponent.js';
import Week from '../../utils/date.js';
export class HeaderList extends BaseComponent {
    constructor(items) {
        super(`<div>
            <p class="header__year"></p>
            <div class="header__diary">
              <button class="diary__prev"> < </button>
              <ul class="header__list"></ul>
              <button class="diary__next"> > </button>
            </div>
          </div>`);
        this.items = items;
        this.idx = -1;
        const ul = this.element.querySelector('.header__list');
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
            this.onListClick(e.target, this.idx);
        });
        this._yearAndMonth = this.element.querySelector('.header__year');
        this._yearAndMonth.textContent = `${Week.getYear().toString()}.${Week.getMonth().toString()}`;
        const prevBtn = this.element.querySelector('.diary__prev');
        const nextBtn = this.element.querySelector('.diary__next');
        prevBtn.addEventListener('click', () => {
            this.setOnDate(Week.getPrevWeek());
            this.onPrev && this.onPrev();
        });
        nextBtn.addEventListener('click', () => {
            this.setOnDate(Week.getNextWeek());
            this.onNext && this.onNext();
        });
    }
    setOnPrevListener(listener) {
        this.onPrev = listener;
    }
    setOnNextListener(listener) {
        this.onNext = listener;
    }
    setOnDate(week) {
        week.forEach((data, i) => {
            this.items[i].changeDate(data.date);
            this.items[i].changeDay(data.day);
            this.items[i].data = data;
            if (this.items[i].click) {
                this.changeYearAndMonth(data);
            }
        });
    }
    onListClick(target, idx) {
        if (idx === -1)
            throw new Error(`Invalid number: ${idx}`);
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
        if (this.idx === idx) {
            this.items[this.idx].addHighlight();
        }
    }
    changeYearAndMonth(day) {
        this._yearAndMonth.textContent = `${day.year.toString()}.${day.month.toString()}`;
    }
}
