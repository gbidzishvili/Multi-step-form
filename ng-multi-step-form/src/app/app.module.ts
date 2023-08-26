import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './features/step-1/components/personal-info/personal-info.component';
import { StepsComponent } from './shared/components/steps/steps.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectPlanComponent } from './features/step-2/components/select-plan/select-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    StepsComponent,
    LayoutComponent,
    SelectPlanComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}