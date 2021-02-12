import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, tap } from 'rxjs/operators';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({
  providedIn: 'root',
})
export class TodoServise {
  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    const header = new HttpHeaders({
      MyCustomHeader: Math.random().toString(),
    });
    return this.http.post<Todo>(
      'https://jsonplaceholder.typicode.com/todos',
      todo,
      {
        headers: header,
      }
    );
  }

  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('custom', 'anything');

    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
        params,
        observe: 'response',
      })
      .pipe(
        map((response) => {
          console.log(response);
          return response.body;
        }),
        delay(500),
        catchError((error) => {
          // console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  removeTodo(id: number): Observable<any> {
    return this.http
      .delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        observe: 'events',
      })
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Sent) {
            // HttpEventType это enum
            console.log('Sent', event);
          }

          if (event.type === HttpEventType.Response) {
            console.log('Response', event);
          }
        })
      );
  }

  completeTodo(id: number): Observable<any> {
    return this.http.put<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        comleted: true,
      }
    );
  }
}
