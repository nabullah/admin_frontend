import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Editor, Toolbar, toHTML } from "ngx-editor";
import { HTML } from "ngx-editor/lib/trustedTypesUtil";
import { ContentSharingService } from "src/app/services/content-sharing.service";

@Component({
	selector: "app-blog-editor",
	templateUrl: "./blog-editor.component.html",
	styleUrls: ["./blog-editor.component.scss"],
})
export class BlogEditorComponent {
	editor!: Editor;
	html: HTML = "";
	toolbar: Toolbar = [
		["bold", "italic"],
		["underline", "strike"],
		["code", "blockquote"],
		["ordered_list", "bullet_list"],
		[{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
		["link", "image"],
		["text_color", "background_color"],
		["align_left", "align_center", "align_right", "align_justify"],
	];
	editedContent: any;

	constructor(private contentSharingService: ContentSharingService) {
		this.editedContent = this.contentSharingService.getSelectedBlogJSON();
	}

	ngOnInit(): void {
		this.editor = new Editor();
    let html = this.contentSharingService.getSelectedBlogHTML();
    this.html = html;
		this.editor.setContent(html);
	}

	editorChange(event: any) {
		this.editedContent = event;
	}

	saveChanges() {
		this.contentSharingService.setSelectedBlogHTML(this.editedContent);
	}

	ngOnDestroy(): void {
		this.editor.destroy();
	}
}
