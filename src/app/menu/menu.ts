import { Component } from '@angular/core';
import {  NgxPrintModule } from 'ngx-print';
import { MatButtonModule, MatAnchor } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-menu',
  imports: [NgxPrintModule, MatToolbarModule, MatButtonModule, RouterLink],
  templateUrl: './menu.html',
})
export class Menu { }
