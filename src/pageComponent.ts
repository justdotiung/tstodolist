export class BaseComponent {
  protected readonly element: HTMLElement;
  constructor(innerHtml: string) {
    if (!/^</.test(innerHtml)) throw new Error(`${innerHtml} is not html tag`);

    const template = document.createElement('template');
    template.innerHTML = innerHtml;
    this.element = template.content.firstElementChild as HTMLElement;
  }

  attachTo(parent: HTMLElement): void {
    parent.appendChild(this.element);
  }

  addChild(child: BaseComponent): void {
    this.element.appendChild(child.element);
  }
}

export class PageComponent extends BaseComponent {
  constructor() {
    super(`<div></div>`);
  }
}
