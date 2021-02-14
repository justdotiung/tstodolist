import Week from '../../utils/date.js';
import * as api from '../api/fooAPI.js';
import { BaseComponent } from './../../pageComponent.js';
export class ContentItem extends BaseComponent {
  constructor(private data: api.DBTodoData) {
    super(`<li class="body_content__li">
            <input type="checkbox" class="body_content__checkbox">
            <span class="body_content__li__span"></span>
            <input type="text" class="body_content__li__input">
            <button class="body_content__li__button--edit"><i class="far fa-edit fa-2x"></i></button>
            <button class="body_content__li__button--remove"><i class="fas fa-trash-alt fa-2x"></i></button>
          </li>`);

    const input = this.element.querySelector('.body_content__li__input') as HTMLInputElement;
    const span = this.element.querySelector('.body_content__li__span') as HTMLInputElement;
    span.textContent = this.countDay();
    input.value = data.text;

    const checkbox = this.element.querySelector('input[type="checkbox"]') as HTMLInputElement;
    const editBtn = this.element.querySelector('.body_content__li__button--edit') as HTMLButtonElement;
    const removeBtn = this.element.querySelector('.body_content__li__button--remove') as HTMLButtonElement;
    checkbox.checked = data.checked;
    checkbox.checked ? input.classList.toggle('deco') : input.classList.remove('deco');
    editBtn.onclick = () => {
      const data = { ...this.data, text: input.value, checked: checkbox.checked };
      api.edit(data);
    };

    removeBtn.onclick = () => {
      api.deleteId(data.id);
      this.element.parentElement?.removeChild(this.element);
    };

    checkbox.onclick = () => {
      input.classList.toggle('deco');
    };
  }

  private countDay(): string {
    const count = Week.getRemainingDays(this.data.initDate, this.data.endDate);
    if (count < 0) {
      return `pass`;
    } else if (count === 0) {
      return `D - day`;
    } else return `D - ${count}`;
  }
}
