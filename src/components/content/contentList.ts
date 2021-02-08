import { BaseComponent } from './../../pageComponent.js';
export class ContentList extends BaseComponent {
  constructor(title: string) {
    super(`<div class="content__box">
            <div class="content__box__title"><span></span></div>
            <div class="content__box__body">
              <ul>
                <li><span>today1</span></li>
                <li><span>today2</span></li>
                <li><span>today3</span></li>
              </ul>
            </div>
          </div>
    `);

    const titleP = this.element.querySelector('span') as HTMLParagraphElement;
    titleP.textContent = title;
  }
}
