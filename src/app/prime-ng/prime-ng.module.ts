import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [],
  exports: [
    MenubarModule,
    MenuModule
  ]
})
export class PrimeNgModule { }
