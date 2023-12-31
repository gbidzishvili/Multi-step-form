import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './features/step-1/components/personal-info/personal-info.component';
import { StepsComponent } from './shared/components/steps/steps.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectPlanComponent } from './features/step-2/components/select-plan/select-plan.component';
import { ToggleComponent } from './features/step-2/components/toggle/toggle.component';
import { AddOnsComponent } from './features/step-3/components/add-ons/add-ons.component';
import { FinishingComponent } from './features/step-4/components/finishing/finishing.component';
import { HttpClientModule } from '@angular/common/http';
import { ThanksComponent } from './features/step-5/components/thanks/thanks.component';
@NgModule({
    declarations: [
        AppComponent,
        PersonalInfoComponent,
        StepsComponent,
        LayoutComponent,
        SelectPlanComponent,
        ToggleComponent,
        AddOnsComponent,
        FinishingComponent,
        ThanksComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
