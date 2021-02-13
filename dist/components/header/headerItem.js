import { BaseComponent } from '../../pageComponent.js';
export class ListItem extends BaseComponent {
    constructor(_day) {
        super(`<li class="header__list__item">
            <button>
              <span class="header__list__item__date"></span>
              <span class="header__list__item__day"></span>
            </button>
          </li>`);
        this._day = _day;
        this._click = false;
        const button = this.element.querySelector('button');
        this._dateTag = this.element.querySelector('.header__list__item__date');
        this._dayTag = this.element.querySelector('.header__list__item__day');
        this._dateTag.textContent = this._day.date.toString();
        this._dayTag.textContent = `(${this.convertNumberToString(this._day.day)})`;
        button.onclick = (e) => {
            this._click = true;
            this.addHighlight();
            this.onClick && this.onClick(e);
        };
    }
    set click(click) {
        this._click = click;
    }
    get click() {
        return this._click;
    }
    set data(data) {
        this._day = data;
    }
    get data() {
        return this._day;
    }
    changeDate(n) {
        this._dateTag.textContent = n.toString();
    }
    changeDay(day) {
        this._dayTag.textContent = `(${this.convertNumberToString(day)})`;
    }
    setClickHandler(handler) {
        this.onClick = handler;
    }
    removeHighlight() {
        const button = this.element.querySelector('button');
        button.classList.remove('highlight');
    }
    addHighlight() {
        const button = this.element.querySelector('button');
        button.classList.add('highlight');
    }
    convertNumberToString(number) {
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
