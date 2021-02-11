import { Content } from './components/content/contnet.js';
import { Footer } from './components/footer/footer.js';
import { Header } from './components/header/header.js';
import { ListItem } from './components/header/headerItem.js';
import { HeaderList } from './components/header/headerList.js';
import Weekly from './utils/date.js';
var App = /** @class */ (function () {
    function App(target) {
        this.target = target;
        var items = Weekly.getCurrentWeek().map(function (obj) { return new ListItem(obj); });
        var header = new Header(new HeaderList(items));
        var content = new Content();
        var footer = new Footer();
        items.forEach(function (item) {
            return item.setClickHandler(function (e) {
                console.log(item.data);
            });
        });
        header.attachTo(this.target);
        // content.attachTo(target);
        // footer.attachTo(target);
        /*
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
        */
    }
    return App;
}());
var app = new App(document.querySelector('#app'));
