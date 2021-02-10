import { BaseComponent } from './../../pageComponent.js';
export class ContentList extends BaseComponent {
  private _ui = false;
  constructor(title: string) {
    super(`<div class="content__box">
            <div class="content__box__title"><span></span></div>
            <div class="content__box__body">
              <div class="content__box__div"></div>
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

  addChild(child: BaseComponent): void {
    const ul = this.element.querySelector('.content__box__div') as HTMLUListElement;
    child.attachTo(ul);
  }
}
