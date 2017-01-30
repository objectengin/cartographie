import { ComponentFixture, TestBed, async, inject } from "@angular/core/testing";
import { By }              from "@angular/platform-browser";
import { DebugElement }    from "@angular/core";
import { Http, Response, BaseRequestOptions, ResponseOptions, ConnectionBackend } from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";

import { TodoComponent } from "../../app/todo/todo.component";
import { TodoService } from "../../app/services/todo.service";

const todosJson = require("json-loader!../mocks/todos.json");

describe("Component : Todo component", () => {
  let comp: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // the async beforeEach is needed to compile a component against external html/css
  // here we are mocking 'Http' injected in 'TodoService'
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      providers: [
        TodoService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  }));

  // second beforeEach after async one
  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    comp    = fixture.componentInstance;
    de = fixture.debugElement.query(By.css(".list-group"));
    el = de.nativeElement;
  });

  it("should show todos after getTodos Observable",  inject([MockBackend], (mockbackend: MockBackend) => {
    mockbackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({body: todosJson})));
    });
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.children.length).toBe(4);
    });
  }));

});