import { Injectable, Renderer2, RendererFactory2, inject } from "@angular/core";

enum ThemeType {
	dark = "dark",
	default = "default",
}
enum ThemeTypeDup {
	dark = "theme-dark",
	default = "theme-light",
}

@Injectable({
	providedIn: "root",
})
export class ThemeService {
	public renderer: Renderer2;
	currentTheme = ThemeType.dark;
	constructor(private _renderer: RendererFactory2) {
		this.renderer = this._renderer.createRenderer(null, null);
	}

	private reverseTheme(theme: string): ThemeType {
		return theme === ThemeType.dark ? ThemeType.default : ThemeType.dark;
	}

	private removeUnusedTheme(theme: ThemeType): void {
		document.documentElement.classList.remove(theme);
		const removedThemeStyle = document.getElementById(theme);
		if (removedThemeStyle) {
			document.head.removeChild(removedThemeStyle);
		}
	}

	private loadCss(href: string, id: string): Promise<Event> {
		return new Promise((resolve, reject) => {
			const style = document.createElement("link");
			style.rel = "stylesheet";
			style.href = href;
			style.id = id;
			style.onload = resolve;
			style.onerror = reject;
			document.head.append(style);
		});
	}

	public loadTheme(firstLoad = true): Promise<Event> {
		const theme = this.currentTheme;
		if (firstLoad) {
			document.documentElement.classList.add(theme);
			theme === ThemeType.dark ? this.renderer.addClass(document.body, ThemeTypeDup.dark) : this.renderer.addClass(document.body, ThemeTypeDup.default);
		}
		return new Promise<Event>((resolve, reject) => {
			this.loadCss(`${theme}.css`, theme).then(
				(e) => {
					if (!firstLoad) {
						document.documentElement.classList.add(theme);
					}
					this.removeUnusedTheme(this.reverseTheme(theme));
					resolve(e);
				},
				(e) => reject(e)
			);
		});
	}

	public toggleTheme(): Promise<Event> {
		this.currentTheme = this.reverseTheme(this.currentTheme);
		if (this.currentTheme === ThemeType.dark) {
			this.renderer.addClass(document.body, ThemeTypeDup.dark);
			this.renderer.removeClass(document.body, ThemeTypeDup.default);
		} else {
			this.renderer.addClass(document.body, ThemeTypeDup.default);
			this.renderer.removeClass(document.body, ThemeTypeDup.dark);
		}
		return this.loadTheme(false);
	}
}
