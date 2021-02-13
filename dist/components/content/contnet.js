import * as api from './../api/fooAPI.js';
import { BaseComponent } from '../../pageComponent.js';
import Week from '../../utils/date.js';
export class Content extends BaseComponent {
    constructor(component) {
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
        this.component = component;
        component.attachTo(this.element);
        const button = this.element.querySelector('button');
        button.addEventListener('click', () => {
            this.onAdd();
        });
    }
    getChildComponent() {
        return this.component;
    }
    setOnClick(listener) {
        this.onClick = listener;
    }
    onAdd() {
        const text = this.element.querySelector('.content__text');
        const date = this.element.querySelector('#end');
        const initDate = Week.getChangeDataFormat(this._date);
        const data = { initDate, text: text.value, endDate: date.value };
        const id = api.post(data);
        this.onClick && this.onClick(api.getDataById(id));
        text.value = '';
        date.value = initDate;
    }
    setCalendarDate(data) {
        const date = this.element.querySelector('#end');
        date.value = Week.getChangeDataFormat(data);
        date.min = Week.getChangeDataFormat(data);
        this._date = data;
    }
}
