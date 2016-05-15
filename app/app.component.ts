import {Component} from '@angular/core';
import {FormCmp} from './components/form.component';
import {myListService} from './services/list';

@Component({
    selector: 'my-app',
    directives: [FormCmp],
    template: '<my-form></my-form>'
})
export class AppComponent { }
