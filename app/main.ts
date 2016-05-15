import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {myListService} from './services/list';

bootstrap(AppComponent, [myListService]);
