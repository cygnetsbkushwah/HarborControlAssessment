import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HarborControlComponent } from './components/harborcontrol/harborcontrol.component';
import { BoatService } from './services/boat.service';
import { WindService } from './services/wind.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HarborControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    WindService,
    BoatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
