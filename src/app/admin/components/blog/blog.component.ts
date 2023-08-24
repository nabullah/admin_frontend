import { Component } from '@angular/core';
import { blogData } from 'src/app/constants/localStore';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  data = blogData;
}
