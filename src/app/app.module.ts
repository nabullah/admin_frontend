import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorInterceptor } from "./interceptor/error.interceptor";
import { SharedModule } from "./shared/shared.module";
import { LoadingInterceptor } from "./interceptor/loading.interceptor";
import { AuthorizationInterceptor } from "./interceptor/authorization.interceptor";
import { ThemeService } from "./services/theme.service";
import { NgApexchartsModule } from 'ng-apexcharts';

export const AppInitializerProvider = {
	provide: APP_INITIALIZER,
	useFactory: (themeService: ThemeService) => () => {
		return themeService.loadTheme();
	},
	deps: [ThemeService],
	multi: true,
};

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, SharedModule, HttpClientModule,NgApexchartsModule],

	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoadingInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthorizationInterceptor,
			multi: true,
		},
		AppInitializerProvider,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
