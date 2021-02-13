import Week from '../../utils/date.js';
import * as api from '../api/fooAPI.js';
import { BaseComponent } from './../../pageComponent.js';
export class ContentItem extends BaseComponent {
  constructor(private data: api.DBTodoData) {
    super(`<div class="content__item">
            <input type="checkbox" id="checkbox">
            <span></span>
            <input type="text" class="content__item__input">
            <button class="content__item__edit">edit</button>
            <button class="content__item__remove">remove</button>
          </div>`);

    const input = this.element.querySelector('.content__item__input') as HTMLInputElement;
    const span = this.element.querySelector('span') as HTMLInputElement;
    span.textContent = this.countDay();
    input.value = data.text;

    const checkbox = this.element.querySelector('input[type="checkbox"]') as HTMLInputElement;
    const editBtn = this.element.querySelector('.content__item__edit') as HTMLButtonElement;
    const removeBtn = this.element.querySelector('.content__item__remove') as HTMLButtonElement;
    checkbox.checked = data.checked;
    checkbox.checked ? input.classList.add('deco') : input.classList.remove('deco');
    editBtn.onclick = () => {
      const data = { ...this.data, text: input.value, checked: checkbox.checked };
      api.edit(data);
      console.log(api.all());
    };

    removeBtn.onclick = () => {
      api.deleteId(data.id);
      this.element.parentElement?.removeChild(this.element);
    };

    checkbox.onclick = () => {
      checkbox.checked ? input.classList.add('deco') : input.classList.remove('deco');
    };
  }

  private countDay(): string {
    const count = Week.getRemainingDays(Week.getChangeDataFormat(Week.getTodayData()), this.data.endDate);

    return `D-${count < 0 ? 0 : count}`;
  }
}
