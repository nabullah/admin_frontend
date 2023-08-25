import { Injectable } from '@angular/core';
import { toDoc, toHTML } from 'ngx-editor';

@Injectable({
  providedIn: 'root'
})
export class ContentSharingService {
  private selectedBlogHTML: any = '';
  private selectedBlogJSON: any = null;

  setSelectedBlogHTML(html: any) {
    this.selectedBlogHTML = html;
    this.selectedBlogJSON = toDoc(html);
  }

  getSelectedBlogHTML(): any {
    return this.selectedBlogHTML;
  }

  setSelectedBlogJSON(json: any) {
    this.selectedBlogJSON = json;
    this.selectedBlogHTML = toHTML(json);
  }

  getSelectedBlogJSON(): any {
    return this.selectedBlogJSON;
  }

}
