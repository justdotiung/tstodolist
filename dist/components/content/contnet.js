var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as api from './../api/fooAPI.js';
import { BaseComponent } from '../../pageComponent.js';
import Week from '../../utils/date.js';
export class Content extends BaseComponent {
    constructor(component) {
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
        this.component = component;
        component.attachTo(this.element);
        const button = this.element.querySelector('button');
        button.addEventListener('click', () => {
            this.onAdd();
        });
        const text = this.element.querySelector('.body_record__div__input');
        text.onfocus = () => (text.placeholder = '');
        text.onblur = () => (text.placeholder = 'add Todo...');
        text.onkeypress = (e) => {
            if (e.key === 'Enter')
                this.onAdd();
        };
    }
    getChildComponent() {
        return this.component;
    }
    setOnClick(listener) {
        this.onClick = listener;
    }
    onAdd() {
        return __awaiter(this, void 0, void 0, function* () {
            const text = this.element.querySelector('.body_record__div__input');
            const date = this.element.querySelector('#end');
            const initDate = Week.getChangeDataFormat(this._date);
            const data = { initDate, text: text.value, endDate: date.value };
            const id = yield api.post(data);
            const successdata = yield api.getDataById(id);
            this.onClick && this.onClick(successdata);
            text.value = '';
            date.value = initDate;
        });
    }
    setCalendarDate(data) {
        const date = this.element.querySelector('#end');
        date.value = Week.getChangeDataFormat(data);
        date.min = Week.getChangeDataFormat(data);
        this._date = data;
    }
}
