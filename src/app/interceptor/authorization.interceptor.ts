import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
	constructor() {}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = "sdfgdsadfgfdsadfg";

		if (token) {
			// If we have a token, we set it to the header
			request = request.clone({
				setHeaders: { Authorization: `Bearer ${token}` },
			});
		}

		return next.handle(request).pipe(
			catchError((err) => {
				if (err instanceof HttpErrorResponse) {
					if (err.status === 401) {
						// redirect user to the logout page
					}
				}
				return throwError(() => {});
			})
		);
	}
}
