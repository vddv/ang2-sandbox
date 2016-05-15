import {Component} from "@angular/core";
import {myListService} from '../services/list';

@Component({
	selector: 'my-form',
	template: `<div>
	<form (submit)="onSubmit()">
		<input type="text" [(ngModel)]="inp">
		<button type="button" (click)="onClick(inp.value)">OK</button>
	</form>
		<ul>
			<li *ngFor="#value of list.values">{{value}}</li>
		</ul>
	</div>`
})
export class FormCmp {
	constructor (
		public list: myListService) {

		console.log(list);
	}

	onSubmit() {
		this.list.values.push(this.inp);
	}

	onClick(value) {
		this.list.values.push(value);
	}
}
