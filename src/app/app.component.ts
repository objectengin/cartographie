import { Component } from '@angular/core';

// global styles
import '../styles.css';

/*
 * This is the main component of the application.
 * It handles the subviews mainly
*/
@Component({
	selector: 'sg-todo-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
	
})

export class AppComponent {
	// workaround for static assets to be resolved by angular
	private urlLogo = 'assets/logo.png';
}