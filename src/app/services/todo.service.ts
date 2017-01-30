import { Injectable } from '@angular/core';
import { Response, Http } from "@angular/http";
import { Observable } from 'rxjs';

import { Todo } from '../entities/todo';

import { HttpBase } from '../../utils/http-base';

@Injectable()
export class TodoService extends HttpBase {
  constructor(private http: Http) {
    super();
  }

  getTodosStatic(): Observable<Todo[]> {
    return Observable.of(JSON.parse(`
      [
          {"id": 1, "text": "React", "status": "active", "editing": false},
          {"id": 2, "text": "Angular2", "status": "active", "editing": false},
          {"id": 3, "text": "Immutable", "status": "completed", "editing": false},
          {"id": 4, "text": "TypeScript", "status": "completed", "editing": false}
      ]
    `));
  }

  getTodos(): Observable<Todo[]> {
    return this.http
      .get('http://demo5935668.mockable.io/todos')
      .map(this.extractData)
      .catch(this.handleError);
  }
}