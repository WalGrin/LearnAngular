import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfnot]',
})
export class IfnotDirective {
  @Input('appIfnot') set ifNot(condition: boolean) {
    if (!condition) {
      // Показать элементы
      this.viewContainer.createEmbeddedView(this.temlateRef);
    } else {
      // Скрыть
      this.viewContainer.clear();
    }
  }

  constructor(
    private temlateRef: TemplateRef<any>, // содержимое ng-template
    private viewContainer: ViewContainerRef // указывает на ng-template
  ) {}
}
