import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './modules/template/layout/layout.component';
import { ComponentsModule } from './modules/template/components.module';
import { AuthComponent } from './auth/auth.component';
import { PreparationModule } from './modules/preparation/preparation.module';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { LayoutModule } from './modules/template/layout/layout.module';
import { CommandeComponent } from './modules/preparation/commande/commande.component';
import { SharedModule } from './modules/shared/shared.module';
import { CommandeService } from './services/commande.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [ 
  BrowserModule,
  AppRoutingModule,
  SharedModule
  ],
  providers: [
    CommandeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
