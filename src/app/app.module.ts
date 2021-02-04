import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, PostFormComponent, PostComponent], // регистрация компонентов
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent], // указываем какой компонент является главным, который нужно запускать
})
export class AppModule {}
