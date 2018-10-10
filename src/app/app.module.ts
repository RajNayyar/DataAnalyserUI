import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RatingGraphAnalaysisComponent } from './rating-graph-analaysis/rating-graph-analaysis.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatTabsModule, MatIconModule} from '@angular/material';
import { WidgetComponent } from './hotel-components/widget/widget.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {MatButtonModule,MatFormFieldModule,MatInputModule,MatRippleModule} from "@angular/material";
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    RatingGraphAnalaysisComponent,
    HeaderComponent,
    FooterComponent,
    SearchWidgetComponent,
    WidgetComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    AppRoutingModule,
    MatIconModule,
    MatDatepickerModule
  ],
  exports:[
    MatCheckboxModule,
    MatTabsModule,
    MatIconModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
