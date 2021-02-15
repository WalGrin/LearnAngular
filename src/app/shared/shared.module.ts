import { PageNamePipe } from './page-name.pipe';
import { NgModule } from '@angular/core';
import { ColorDirective } from './color.directive';

@NgModule({
  declarations: [ColorDirective, PageNamePipe],
  exports: [ColorDirective, PageNamePipe], // чтобы другие модули видели их
})
export class ShareModule {}
