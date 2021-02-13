import Week from '../../utils/date.js';
import * as api from '../api/fooAPI.js';
import { BaseComponent } from './../../pageComponent.js';
export class ContentItem extends BaseComponent {
    constructor(data) {
        super(`<div class="content__item">
            <input type="checkbox" id="checkbox">
            <span></span>
            <input type="text" class="content__item__input">
            <button class="content__item__edit">edit</button>
            <button class="content__item__remove">remove</button>
          </div>`);
        this.data = data;
        const input = this.element.querySelector('.content__item__input');
        const span = this.element.querySelector('span');
        span.textContent = this.countDay();
        input.value = data.text;
        const checkbox = this.element.querySelector('input[type="checkbox"]');
        const editBtn = this.element.querySelector('.content__item__edit');
        const removeBtn = this.element.querySelector('.content__item__remove');
        checkbox.checked = data.checked;
        checkbox.checked ? input.classList.add('deco') : input.classList.remove('deco');
        editBtn.onclick = () => {
            const data = Object.assign(Object.assign({}, this.data), { text: input.value, checked: checkbox.checked });
            api.edit(data);
            console.log(api.all());
        };
        removeBtn.onclick = () => {
            var _a;
            api.deleteId(data.id);
            (_a = this.element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.element);
        };
        checkbox.onclick = () => {
            checkbox.checked ? input.classList.add('deco') : input.classList.remove('deco');
        };
    }
    countDay() {
        const count = Week.getRemainingDays(Week.getChangeDataFormat(Week.getTodayData()), this.data.endDate);
        return `D-${count < 0 ? 0 : count}`;
    }
}
