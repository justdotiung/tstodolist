import { BaseComponent } from './../../pageComponent.js';
export class ContentList extends BaseComponent {
  private _ui = false;
  constructor(title: string) {
    super(`<div class="content__box">
            <div class="content__box__title"><span></span></div>
            <div class="content__box__body">
              <ul class="content__box__ul"></ul>
            </div>
          </div>
    `);

    const titleP = this.element.querySelector('span') as HTMLParagraphElement;
    titleP.textContent = title;
  }

  set ui(b: boolean) {
    this._ui = b;
  }

  get ui(): boolean {
    return this._ui;
  }

  addChild(child: BaseComponent) {
    const ul = this.element.querySelector('.content__box__ul') as HTMLUListElement;
    child.attachTo(ul);
  }
}
