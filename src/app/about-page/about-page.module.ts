import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from '../shared/shared.module';
import { AboutExtraPageComponent } from './about-extra-page/about-extra-page.component';
import { AboutPageComponent } from './about-page.component';

@NgModule({
  declarations: [AboutPageComponent, AboutExtraPageComponent],
  imports: [
    ShareModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutPageComponent,
        children: [{ path: 'extra', component: AboutExtraPageComponent }],
      },
    ]),
  ],

  exports: [RouterModule],
})
export class AboutPageModule {}
