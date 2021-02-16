import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './modal/ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(RefDirective) reDir: RefDirective;

  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title,
    private meta: Meta
  ) {
    const t = title.getTitle();
    console.log(t);
    title.setTitle('App ComponPage');
    meta.addTags([{ name: 'keywords', content: 'angular' }]);
  }
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
