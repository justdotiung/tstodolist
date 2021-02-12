import { ContentItem } from './components/content/contentItem.js';
import { ContentList } from './components/content/contentList.js';
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
        var content = new Content(new ContentList());
        var footer = new Footer();
        items.forEach(function (item) {
            return item.setClickHandler(function (e) {
                // console.log(item.data);
                // content.getChildComponent().addChild(new ContentItem('temp'));
            });
        });
        header.attachTo(this.target);
        content.attachTo(target);
        content.setOnClick(function () {
            content.getChildComponent().addChild(new ContentItem('temp'));
        });
        // footer.attachTo(target);
    }
    return App;
}());
var app = new App(document.querySelector('#app'));
