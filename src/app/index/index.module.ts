import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { UtilModule } from '../util/util.module';
import { ContactusComponent } from './contactus/contactus.component';



@NgModule({
  declarations: [
    IndexpageComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,UtilModule
  ],
  exports:[IndexpageComponent]
})
export class IndexModule { }
