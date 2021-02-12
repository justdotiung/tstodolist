import { ContentItem } from './components/content/contentItem.js';
import { ContentList } from './components/content/contentList.js';
import { Content } from './components/content/contnet.js';
import { Footer } from './components/footer/footer.js';
import { Header } from './components/header/header.js';
import { ListItem } from './components/header/headerItem.js';
import { HeaderList } from './components/header/headerList.js';
import { HeadPopup } from './components/popup/headPopup.js';
import Weekly from './utils/date.js';

class App {
  constructor(private target: HTMLElement) {
    const items = Weekly.getCurrentWeek().map((obj) => new ListItem(obj));
    const header = new Header(new HeaderList(items));
    const content = new Content(new ContentList());
    const footer = new Footer();
    items.forEach((item) =>
      item.setClickHandler((e: Event) => {
        // console.log(item.data);
        // content.getChildComponent().addChild(new ContentItem('temp'));
      })
    );
    header.attachTo(this.target);
    content.attachTo(target);

    content.setOnClick(() => {
      content.getChildComponent().addChild(new ContentItem('temp'));
    });
    // footer.attachTo(target);
  }
}

const app = new App(document.querySelector('#app') as HTMLElement);
