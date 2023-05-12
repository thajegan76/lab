import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { GreetingPipePipe } from './greeting-pipe.pipe';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    MenuComponent,
    RegistrationComponent,
    LoginComponent,
    GreetingPipePipe,
    GreetingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PageHeaderComponent,
    PageFooterComponent,
    MenuComponent,
    RegistrationComponent,
    LoginComponent
  ]
})
export class SharedModule { }
