import { BaseComponent } from '../../pageComponent.js';

type OnClick = () => void;

export class Content<T extends BaseComponent> extends BaseComponent {
  private onClick: OnClick | undefined;
  constructor(private component: T) {
    super(`<section class="content__section">
              <div class="content">
                <div class="content__box__title">
                  <input type="text" >
                  <button>ADD</button>
                </div>
              </div>
          </section>`);
    component.attachTo(this.element);
    // this.content = this.element.querySelector('.content') as HTMLElement;
    const button = this.element.querySelector('button') as HTMLButtonElement;

    button.addEventListener('click', () => {
      this.onClick && this.onClick();
    });
  }

  getChildComponent(): T {
    return this.component;
  }

  setOnClick(listener: OnClick): void {
    this.onClick = listener;
  }
}
