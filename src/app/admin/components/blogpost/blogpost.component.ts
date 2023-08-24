import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { blogData } from 'src/app/constants/localStore';

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
		{ img: "dfsdf", name: "poiuytfgh12", description: "sdfsdfsd" },
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

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
    debugger
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
    });
    blogData.forEach((el) => {
      if(el.id == this.id){
        this.localData = el;
      }
    });
  }
}
