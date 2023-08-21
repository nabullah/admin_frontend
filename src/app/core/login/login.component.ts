import { Component, OnInit, inject } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
	validateForm!: UntypedFormGroup;
	router = inject(Router);

	constructor(private fb: UntypedFormBuilder) {}

	ngOnInit(): void {
		this.validateForm = this.fb.group({
			userName: ["admin", [Validators.required]],
			password: ["admin", [Validators.required]],
			remember: [true],
		});
	}

	submitForm(): void {
		if (this.validateForm.valid) {
			this.router.navigate(["/admin/dashboard"]);
		} else {
			Object.values(this.validateForm.controls).forEach((control) => {
				if (control.invalid) {
					control.markAsDirty();
					control.updateValueAndValidity({ onlySelf: true });
				}
			});
		}
	}
}
