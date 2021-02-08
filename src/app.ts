import { ContentList } from './components/content/contentList.js';
import { Content } from './components/content/contnet.js';
import { Footer } from './components/footer/footer.js';
import { Header } from './components/header/header.js';
import { ListItem } from './components/header/headerItem.js';
import { HeaderList } from './components/header/headerList.js';
import { HeadPopup } from './components/popup/headPopup.js';

class App {
  constructor(private target: HTMLElement) {
    const headItems = [new ListItem('today'), new ListItem('daily'), new ListItem('Weekly')];
    const header = new Header(new HeaderList(headItems));
    const content = new Content();
    const footer = new Footer();

    header.attachTo(target);
    content.attachTo(target);
    footer.attachTo(target);

    headItems[0].setClickHandler((e) => {
      const popup = new HeadPopup();
      popup.attachTo(target);
      popup.setOnClick(() => {
        content.addChild(new ContentList('Today'));
        console.log(popup.value);
      });
    });

    headItems[1].setClickHandler((e) => {
      const popup = new HeadPopup();
      popup.attachTo(target);
      popup.setOnClick(() => {
        console.log(popup.value);
      });
    });

    headItems[2].setClickHandler((e) => {
      const popup = new HeadPopup();
      popup.attachTo(target);
      popup.setOnClick(() => {
        console.log(popup.value);
      });
    });
  }
}

const app = new App(document.querySelector('#app') as HTMLElement);
