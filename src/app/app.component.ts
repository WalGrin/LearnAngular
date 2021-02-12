import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Todo, TodoServise } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  loading = false;
  todoTitle = '';
  error = '';

  constructor(private todoServise: TodoServise) {}
  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    this.todoServise
      .addTodo({
        title: this.todoTitle,
        completed: false,
      })
      .subscribe((todo) => {
        this.todos.push(todo);
        this.todoTitle = '';
      });
  }

  fetchTodos() {
    this.loading = true;
    this.todoServise.fetchTodos().subscribe(
      (response) => {
        console.log(response);
        this.todos = response;
        this.loading = false;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  removeTodo(id: number) {
    this.todoServise.removeTodo(id).subscribe(() => {
      this.todos = this.todos.filter((t) => t.id !== id);
    });
  }

  completeTodo(id: number) {
    this.todoServise.completeTodo(id).subscribe((todo) => {
      console.log(todo);
      this.todos.find((t) => t.id === todo.id).completed = true;
    });
  }
}
