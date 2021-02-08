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
        var headItems = [new ListItem('today'), new ListItem('daily'), new ListItem('Weekly')];
        var header = new Header(new HeaderList(headItems));
        var content = new Content();
        var footer = new Footer();
        header.attachTo(target);
        content.attachTo(target);
        footer.attachTo(target);
        headItems[0].setClickHandler(function (e) {
            var popup = new HeadPopup();
            popup.attachTo(target);
            popup.setOnClick(function () {
                content.addChild(new ContentList('Today'));
                console.log(popup.value);
            });
        });
        headItems[1].setClickHandler(function (e) {
            var popup = new HeadPopup();
            popup.attachTo(target);
            popup.setOnClick(function () {
                console.log(popup.value);
            });
        });
        headItems[2].setClickHandler(function (e) {
            var popup = new HeadPopup();
            popup.attachTo(target);
            popup.setOnClick(function () {
                console.log(popup.value);
            });
        });
    }
    return App;
}());
var app = new App(document.querySelector('#app'));
