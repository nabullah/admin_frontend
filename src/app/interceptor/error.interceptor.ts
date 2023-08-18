import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        let errorMessage = 'An unknown error occurred';

        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Client Error: ${error.error.message}`;
          } else if (error.status === 0) {
            errorMessage = 'Server unreachable. Please check your internet connection.';
          } else if (error.status === 400) {
            errorMessage = 'Bad request. Please check your input.';
          } else if (error.status === 401) {
            errorMessage = 'Unauthorized. Please log in.';
          } else if (error.status === 403) {
            errorMessage = 'Forbidden. You do not have permission to access this resource.';
          } else if (error.status === 404) {
            errorMessage = 'Resource not found.';
          } else if (error.status === 500) {
            errorMessage = 'Internal server error. Please try again later.';
          } else {
            // Other HTTP errors
            errorMessage = `HTTP ${error.status}: ${error.statusText}`;
          }
        } else if (error instanceof Error) {
          // Other types of errors
          errorMessage = `Error: ${error.message}`;
        }

        console.error(errorMessage);

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
