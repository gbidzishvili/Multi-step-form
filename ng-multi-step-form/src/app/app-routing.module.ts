import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { PersonalInfoComponent } from './features/step-1/components/personal-info/personal-info.component';

const routes: Routes = [
  { path: '', component: PersonalInfoComponent },
  { path: 'select-plan', component: PersonalInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
