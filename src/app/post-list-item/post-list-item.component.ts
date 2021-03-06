import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  love(){
    console.log('avant' + this.postLoveIts);
    this.postLoveIts = this.postLoveIts + 1;
    console.log('apres' + this.postLoveIts);

  }

  notLove(){
    this.postLoveIts = this.postLoveIts - 1;
    console.log('apres' + this.postLoveIts);
  }

  constructor() { }

  ngOnInit() {
  }

}
