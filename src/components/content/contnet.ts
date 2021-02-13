import * as api from './../api/fooAPI.js';
import { BaseComponent } from '../../pageComponent.js';
import Week, { WeekData } from '../../utils/date.js';

type OnClick = (data: api.DBTodoData) => void;

export class Content<T extends BaseComponent> extends BaseComponent {
  private onClick: OnClick | undefined;
  private _date: WeekData | undefined;
  constructor(private component: T) {
    super(`<section class="content__section">
              <div class="content">
                <div class="content__box__title">
                  <input type="text" class="content__text" placeholder="something..." >
                  <label for="end">End date:</label>
                  <input type="date" id="end" name="trip-start" >
                  <button>ADD</button>
                </div>
              </div>
          </section>`);
    component.attachTo(this.element);
    const button = this.element.querySelector('button') as HTMLButtonElement;

    button.addEventListener('click', () => {
      this.onAdd();
    });
  }

  getChildComponent(): T {
    return this.component;
  }

  setOnClick(listener: OnClick): void {
    this.onClick = listener;
  }

  private onAdd() {
    const text = this.element.querySelector('.content__text') as HTMLInputElement;
    const date = this.element.querySelector('#end') as HTMLInputElement;
    const initDate = Week.getChangeDataFormat(this._date as WeekData);
    const data = { initDate, text: text.value, endDate: date.value };
    const id = api.post(data);
    this.onClick && this.onClick(api.getDataById(id));

    text.value = '';
    date.value = initDate;
  }

  setCalendarDate(data: WeekData): void {
    const date = this.element.querySelector('#end') as HTMLInputElement;
    date.value = Week.getChangeDataFormat(data);
    date.min = Week.getChangeDataFormat(data);
    this._date = data;
  }
}
