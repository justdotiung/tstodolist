import { ContentItem } from './components/content/contentItem.js';
import { ContentList } from './components/content/contentList.js';
import { Content } from './components/content/contnet.js';
import { Footer } from './components/footer/footer.js';
import { Header } from './components/header/header.js';
import { ListItem } from './components/header/headerItem.js';
import { HeaderList } from './components/header/headerList.js';
import { HeadPopup } from './components/popup/headPopup.js';

class App {
  constructor(private target: HTMLElement) {
    const headItems = new ListItem('today');
    const header = new Header(new HeaderList(headItems));
    const content = new Content();
    const footer = new Footer();

    header.attachTo(target);
    content.attachTo(target);
    footer.attachTo(target);

    const bodyList = new ContentList(headItems.title);
    const popup = new HeadPopup();
    headItems.setClickHandler(() => {
      popup.value = '';
      popup.attachTo(target);
    });
    popup.setOnClick(() => {
      if (!popup.value) throw new Error('입력내용이없습니다.');

      if (!bodyList.ui) {
        content.addChild(bodyList);
        bodyList.ui = true;
      }
      const newItem = new ContentItem(popup.value);
      bodyList.addChild(newItem);
    });
  }
}

const app = new App(document.querySelector('#app') as HTMLElement);
