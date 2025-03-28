import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatToolbarModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
