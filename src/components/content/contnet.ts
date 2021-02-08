import { BaseComponent } from '../../pageComponent.js';

export class Content extends BaseComponent {
  private content: HTMLElement;
  constructor() {
    super(`<section>
              <div class="content">
              </div>
          </section>`);
    this.content = this.element.querySelector('.content') as HTMLElement;
  }

  addChild(child: BaseComponent): void {
    child.attachTo(this.content);
  }
}
