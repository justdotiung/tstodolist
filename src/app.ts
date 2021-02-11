import { ContentItem } from './components/content/contentItem.js';
import { ContentList } from './components/content/contentList.js';
import { Content } from './components/content/contnet.js';
import { Footer } from './components/footer/footer.js';
import { Header } from './components/header/header.js';
import { ListItem } from './components/header/headerItem.js';
import { HeaderList } from './components/header/headerList.js';
import { HeadPopup } from './components/popup/headPopup.js';
import DateCal from './utils/date.js';

class App {
  constructor(private target: HTMLElement) {
    const headItems = new ListItem('');
    const header = new Header(new HeaderList(headItems));
    const content = new Content();
    const footer = new Footer();

    console.log(DateCal.getCurrentWeek());
    console.log(DateCal.getNextWeek());
    console.log(DateCal.getNextWeek());
    console.log(DateCal.getPrevWeek());
    console.log(DateCal.getSelectDays(new Date(2022, 1, 20)));
    // console.log(dateCal.week);
    // dateCal.currentWeek();
    // console.log(dateCal.week);

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
