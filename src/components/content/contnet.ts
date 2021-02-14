import * as api from './../api/fooAPI.js';
import { BaseComponent } from '../../pageComponent.js';
import Week, { WeekData } from '../../utils/date.js';

type OnClick = (data: api.DBTodoData) => void;

export class Content<T extends BaseComponent> extends BaseComponent {
  private onClick: OnClick | undefined;
  private _date: WeekData | undefined;
  constructor(private component: T) {
    super(`<section class="body__section">
              <div class="body__content">
                <div class="body_record__div">
                  <div class="body_record__div__div">
                    <input type="text" class="body_record__div__input" placeholder="add Todo..." >
                    <div class="body_record__div--calender">
                      <label class="body_record__div__label" for="end"><i class="fas fa-calendar-week fa-2x"></i><i class="fas fa-calendar-week small"></i></label>
                      <input type="date" id="end" class="body_record__div__input--date" >
                    </div>
                  </div>
                  <button class="body_record__div__button"><i class="fas fa-plus fa-2x"></i><i class="fas fa-plus small"></i></button>
                </div>
              </div>
          </section>`);
    component.attachTo(this.element);
    const button = this.element.querySelector('button') as HTMLButtonElement;

    button.addEventListener('click', () => {
      this.onAdd();
    });
    const text = this.element.querySelector('.body_record__div__input') as HTMLInputElement;
    text.onfocus = () => (text.placeholder = '');
    text.onblur = () => (text.placeholder = 'add Todo...');
    text.onkeypress = (e) => {
      if (e.key === 'Enter') this.onAdd();
    };
  }

  getChildComponent(): T {
    return this.component;
  }

  setOnClick(listener: OnClick): void {
    this.onClick = listener;
  }

  private async onAdd() {
    const text = this.element.querySelector('.body_record__div__input') as HTMLInputElement;
    const date = this.element.querySelector('#end') as HTMLInputElement;
    const initDate = Week.getChangeDataFormat(this._date as WeekData);
    const data = { initDate, text: text.value, endDate: date.value };
    const id = await api.post(data);
    const successdata = await api.getDataById(id);

    this.onClick && this.onClick(successdata);

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
