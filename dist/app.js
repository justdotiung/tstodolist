import { Content } from './components/content/contnet.js';
import { Footer } from './components/footer/footer.js';
import { Header } from './components/header/header.js';
import { ListItem } from './components/header/headerItem.js';
import { HeaderList } from './components/header/headerList.js';
import { HeadPopup } from './components/popup/headPopup.js';
import { PageComponent } from './pageComponent.js';
var App = /** @class */ (function () {
    function App(target) {
        this.target = target;
        var body = new PageComponent();
        var headItems = [new ListItem('today'), new ListItem('daily'), new ListItem('Weekly')];
        var header = new Header(new HeaderList(headItems));
        var content = new Content();
        var footer = new Footer();
        body.attachTo(target);
        body.addChild(header);
        body.addChild(content);
        body.addChild(footer);
        headItems[0].setClickHandler(function (e) {
            body.addChild(new HeadPopup());
        });
    }
    return App;
}());
var app = new App(document.querySelector('#app'));
