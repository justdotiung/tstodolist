import { ContentItem } from './components/content/contentItem.js';
import { ContentList } from './components/content/contentList.js';
import { Content } from './components/content/contnet.js';
import { Footer } from './components/footer/footer.js';
import { Header } from './components/header/header.js';
import { ListItem } from './components/header/headerItem.js';
import { HeaderList } from './components/header/headerList.js';
import { HeadPopup } from './components/popup/headPopup.js';
var App = /** @class */ (function () {
    function App(target) {
        this.target = target;
        var headItems = new ListItem('today');
        var header = new Header(new HeaderList(headItems));
        var content = new Content();
        var footer = new Footer();
        header.attachTo(target);
        content.attachTo(target);
        footer.attachTo(target);
        var bodyList = new ContentList(headItems.title);
        var popup = new HeadPopup();
        headItems.setClickHandler(function () {
            popup.value = '';
            popup.attachTo(target);
        });
        popup.setOnClick(function () {
            if (!popup.value)
                throw new Error('입력내용이없습니다.');
            if (!bodyList.ui) {
                content.addChild(bodyList);
                bodyList.ui = true;
            }
            var newItem = new ContentItem(popup.value);
            bodyList.addChild(newItem);
        });
    }
    return App;
}());
var app = new App(document.querySelector('#app'));
