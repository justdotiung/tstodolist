import { Content } from './components/content/contnet.js';
import { Footer } from './components/footer/footer.js';
import { Header } from './components/header/header.js';
import { ListItem } from './components/header/headerItem.js';
import { HeaderList } from './components/header/headerList.js';
import { HeadPopup } from './components/popup/headPopup.js';
import { PageComponent } from './pageComponent.js';
class App {
  constructor(private target: HTMLElement) {
    const body = new PageComponent();
    const headItems = [new ListItem('today'), new ListItem('daily'), new ListItem('Weekly')];
    const header = new Header(new HeaderList(headItems));
    const content = new Content();
    const footer = new Footer();

    body.attachTo(target);

    body.addChild(header);
    body.addChild(content);
    body.addChild(footer);

    headItems[0].setClickHandler((e) => {
      body.addChild(new HeadPopup());
    });
  }
}

const app = new App(document.querySelector('#app') as HTMLElement);
