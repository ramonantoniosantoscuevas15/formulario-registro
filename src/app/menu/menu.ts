import { Component } from '@angular/core';
import {  NgxPrintModule } from 'ngx-print';
import { MatButtonModule, MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-menu',
  imports: [NgxPrintModule ],
  templateUrl: './menu.html',
})
export class Menu { }
