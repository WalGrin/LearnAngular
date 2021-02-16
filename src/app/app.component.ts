import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './modal/ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(RefDirective) reDir: RefDirective;

  constructor(private resolver: ComponentFactoryResolver) {}
  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.reDir.containerRef.clear();

    const component = this.reDir.containerRef.createComponent(modalFactory);

    component.instance.title = 'Dynamic title';
    component.instance.close.subscribe(() => {
      this.reDir.containerRef.clear();
    });
  }
}
