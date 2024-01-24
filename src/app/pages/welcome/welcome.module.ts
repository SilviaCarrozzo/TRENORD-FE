import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from 'src/app/checklist/checklist.component';


@NgModule({
  imports: [WelcomeRoutingModule, CommonModule, ChecklistComponent],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule { }
