import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Editor, Toolbar, toHTML  } from 'ngx-editor';
import { HTML } from 'ngx-editor/lib/trustedTypesUtil';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.scss']
})
export class BlogEditorComponent {
  @ViewChild('drgdfgd') drgdfgd!:ElementRef;
  editor!: Editor;
  html:HTML = '';
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  ngOnInit(): void {
    this.editor = new Editor();
    this.editor.setContent(this.html);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  editorChange(event: any){
    console.log(event);
  }
}
