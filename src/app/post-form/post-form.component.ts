import { Post } from './../app.component';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput', { static: false }) inputRef: ElementRef; // получаем  #titleInput

  title = '';
  text = '';

  constructor() {}

  ngOnInit(): // если в этом методе хотим обратиться к inputRef, то надо прописать static: true в 19 строке
  void {}

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };
      this.onAdd.emit(post);
      console.log('New Post: ', post);
      this.text = this.title = '';
    }
  }

  focusTitle() {
    console.log(this.inputRef); // inputRef.nativeElement в Angular то же самое что document.querySelector в js

    this.inputRef.nativeElement.focus();
  }
}
