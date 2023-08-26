import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { PersonalInfoComponent } from './features/step-1/components/personal-info/personal-info.component';
import { SelectPlanComponent } from './features/step-2/components/select-plan/select-plan.component';
import { AddOnsComponent } from './features/step-3/components/add-ons/add-ons.component';

const routes: Routes = [
  { path: '', redirectTo: 'step-1', pathMatch: 'full' },
  { path: 'step-1', component: PersonalInfoComponent },
  { path: 'step-2', component: SelectPlanComponent },
  { path: 'step-3', component: AddOnsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
