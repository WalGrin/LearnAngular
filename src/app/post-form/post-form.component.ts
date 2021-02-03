import { Post } from './../app.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  title = '';
  text = '';

  constructor() {}

  ngOnInit(): void {}

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      // trim очищает все пробелы и, если кроме них ничего нет, то тогда данный метод не пройдет
      const post: Post = {
        title: this.title,
        text: this.text,
      };

      this.onAdd.emit(post); //  emit наследуется от EventEmitter и отправляет данные в главный компонент

      console.log('New Post: ', post);

      this.text = this.title = ''; // обнуление
    }
  }
}
