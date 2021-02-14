import * as api from './components/api/fooAPI.js';
import { ContentItem } from './components/content/contentItem.js';
import { ContentList } from './components/content/contentList.js';
import { Content } from './components/content/contnet.js';
import { Footer } from './components/footer/footer.js';
import { Header } from './components/header/header.js';
import { ListItem } from './components/header/headerItem.js';
import { HeaderList } from './components/header/headerList.js';
import { HeadPopup } from './components/popup/headPopup.js';
import Week from './utils/date.js';
import Weekly from './utils/date.js';

class App {
  constructor(private target: HTMLElement) {
    const items = Weekly.getCurrentWeek().map((obj) => new ListItem(obj));
    const header = new Header(new HeaderList(items));
    const content = new Content(new ContentList());
    const footer = new Footer();

    items.forEach((item) =>
      item.setClickHandler(async () => {
        content.setCalendarDate(item.data);
        content.getChildComponent().removeAllChildNode();

        const initDate = Week.getChangeDataFormat(item.data);
        await api.listByinitDate(initDate).then((list) => {
          list.forEach((obj) => content.getChildComponent().addChild(new ContentItem(obj)));
        });
      })
    );

    header.attachTo(this.target);
    content.attachTo(target);
    content.setCalendarDate(Week.getTodayData());

    content.setOnClick((data) => {
      content.getChildComponent().addChild(new ContentItem(data));
    });

    footer.attachTo(target);
  }
}

const app = new App(document.querySelector('#app') as HTMLElement);
