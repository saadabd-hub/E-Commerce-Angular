import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { SignupRouteModule } from './signup-route.module';

@NgModule({
  imports: [CommonModule, TranslateModule, SignupRouteModule, ReactiveFormsModule],
  declarations: [SignupComponent],
})
export class SignupModule {}
