import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from "./modules/shared/component/app-header/app-header.component";
import { AppFooterComponent } from "./modules/shared/component/app-footer/app-footer.component";

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
