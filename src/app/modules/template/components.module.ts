import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SidedarkComponent } from './sidedark/sidedark.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    SidebarComponent, 
    FooterComponent, 
    SidedarkComponent],
 
  exports :[
    HeaderComponent, 
    SidebarComponent, 
    FooterComponent,
    SidedarkComponent,
    CommonModule
  ]
})
export class ComponentsModule { }
