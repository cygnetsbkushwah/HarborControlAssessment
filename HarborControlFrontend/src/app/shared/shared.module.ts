import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    FormsModule,
    HeaderComponent
  ],
  providers: []
})
export class SharedModule { }
