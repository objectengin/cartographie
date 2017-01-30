import { Component, OnInit } from "@angular/core";

import { TodoService } from "../services/todo.service";
import { Todo } from "../entities/todo";

/*
 * Todo component.
*/
@Component({
  selector: "sg-todo-list",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
  providers: [
    TodoService
  ]
})
export class TodoComponent implements OnInit {
  private todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      todos => this.todos = todos,
      err => console.log("error while retrieving todos", err)
    );
  }
}