import { inject, TestBed } from  "@angular/core/testing";
import { Router } from "@angular/router";
import { Http, Response, BaseRequestOptions, ResponseOptions, ConnectionBackend } from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";

import { TodoService } from "../../app/services/todo.service";

const todos = require("json-loader!../mocks/todos.json");

describe("Service: TodoService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      TodoService,
      MockBackend,
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      }
    ]
  }));

  it("should return a response when subscribed to getTodos",
    inject([MockBackend, TodoService], (mockbackend: MockBackend, todoService: TodoService) => {
      mockbackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({body: todos})));
      });
      todoService.getTodos().subscribe(todos => {
        expect(todos).toBeDefined();
        expect(todos.length).toBe(4);
      });
    })
  );

  it("should return a response when subscribed to getTodosStatic",
    inject([TodoService], (todoService: TodoService ) => {
      todoService.getTodosStatic().subscribe(todos => {
        expect(todos).toBeDefined();
        expect(todos.length).toBe(4);
      });
    })
  );
});