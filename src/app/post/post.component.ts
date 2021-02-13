import { Post, PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router // private postsSrevice: PostsService
  ) {}

  ngOnInit() {
    // this.post = this.route.snapshot.data.post; //

    this.route.data.subscribe((data) => {
      this.post = data.post;
    });
    // this.route.params.subscribe((params: Params) => {
    //   console.log('Params', params);
    //   this.post = this.postsSrevice.getById(+params.id);
    // });
  }

  loadPost() {
    this.router.navigate(['/posts', 44]);
  }
}
