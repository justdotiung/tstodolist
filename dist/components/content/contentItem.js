import Week from '../../utils/date.js';
import * as api from '../api/fooAPI.js';
import { BaseComponent } from './../../pageComponent.js';
export class ContentItem extends BaseComponent {
    constructor(data) {
        super(`<li class="body_content__li">
            <input type="checkbox" class="body_content__checkbox">
            <span class="body_content__li__span"></span>
            <input type="text" class="body_content__li__input">
            <button class="body_content__li__button--edit"><i class="far fa-edit fa-2x"></i></button>
            <button class="body_content__li__button--remove"><i class="fas fa-trash-alt fa-2x"></i></button>
          </li>`);
        this.data = data;
        const input = this.element.querySelector('.body_content__li__input');
        const span = this.element.querySelector('.body_content__li__span');
        span.textContent = this.countDay();
        input.value = data.text;
        const checkbox = this.element.querySelector('input[type="checkbox"]');
        const editBtn = this.element.querySelector('.body_content__li__button--edit');
        const removeBtn = this.element.querySelector('.body_content__li__button--remove');
        checkbox.checked = data.checked;
        checkbox.checked ? input.classList.toggle('deco') : input.classList.remove('deco');
        editBtn.onclick = () => {
            const data = Object.assign(Object.assign({}, this.data), { text: input.value, checked: checkbox.checked });
            api.edit(data);
        };
        removeBtn.onclick = () => {
            var _a;
            api.deleteId(data.id);
            (_a = this.element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.element);
        };
        checkbox.onclick = () => {
            input.classList.toggle('deco');
        };
    }
    countDay() {
        const count = Week.getRemainingDays(this.data.initDate, this.data.endDate);
        if (count < 0) {
            return `pass`;
        }
        else if (count === 0) {
            return `D - day`;
        }
        else
            return `D - ${count}`;
    }
}
