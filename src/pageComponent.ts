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

  removeFrom(parent: HTMLElement): void {
    if (parent !== this.element.parentElement) {
      throw new Error('not same parent node');
    } else {
      parent.removeChild(this.element);
    }
  }
}
