import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// routing
import { AppRoutingModule } from './utils/app-routing.module';
// components
import { AppComponent } from './app/app.component';
import { TodoComponent } from './app/todo/todo.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    TodoComponent
  ],
  providers : [],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
