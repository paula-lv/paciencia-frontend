import { Component, OnInit } from '@angular/core';

import { UserI } from '../../models/user';

import { MenuBarComponent } from '../../shared/menu-bar/menu-bar.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MenuBarComponent, CardModule, ButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {


  constructor() {

  }

  ngOnInit(): void {
    
  }
}
