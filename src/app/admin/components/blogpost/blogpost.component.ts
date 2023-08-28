import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { toDoc } from "ngx-editor";
import { blogData } from 'src/app/constants/localStore';
import { ContentSharingService } from "src/app/services/content-sharing.service";

@Component({
	selector: "app-blogpost",
	templateUrl: "./blogpost.component.html",
	styleUrls: ["./blogpost.component.scss"],
})
export class BlogpostComponent implements OnInit {
	initLoading: boolean = false;
	loadingMore: boolean = false;
  id:string | null = "";
  localData:any;
	data: any[] = [
		{ img: "dfsdf",  name: "poiuytfgh12", description: "sdfsdfsd" },
		{ img: "dfsdf1", name: "poiuytfgh123", description: "sdfsdfsd123456789" },
		{ img: "dfsdf1", name: "poiuytfgh123", description: "sdfsdfsd123456789" },
		{ img: "dfsdf1", name: "poiuytfgh123", description: "sdfsdfsd123456789" },
		{ img: "dfsdf1", name: "poiuytfgh123", description: "sdfsdfsd123456789" },
		{ img: "dfsdf1", name: "poiuytfgh123", description: "sdfsdfsd123456789" },
		{ img: "dfsdf1", name: "poiuytfgh123", description: "sdfsdfsd123456789" },
		{ img: "dfsdf1", name: "poiuytfgh123", description: "sdfsdfsd123456789" },
		{ img: "dfsdf1", name: "poiuytfgh123", description: "sdfsdfsd123456789" },
		{ img: "dfsdf1", name: "poiuytfgh123", description: "sdfsdfsd123456789" },
		{ img: "dfsdf1", name: "poiuytfgh123", description: "sdfsdfsd123456789" },
		{ img: "dfsdf1", name: "poiuytfgh123", description: "sdfsdfsd123456789" },
		{ img: "dfsdf1", name: "poiuytfgh123", description: "sdfsdfsd123456789" },
	];

	constructor(
    private route: ActivatedRoute,
    private router:Router,
    private contentSharingService:ContentSharingService
    ) {}

	ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
    });
    blogData.forEach((el) => {
      if(el.id == this.id){
        this.localData = el;
      }
    });
  }

  openBlogEditor(){
    const element = document.querySelectorAll("#blog-content");
    let doc = toDoc(element[0].innerHTML);
    this.contentSharingService.setSelectedBlogHTML(doc);
    this.router.navigate(['/admin/blog-editor']);
  }
}
