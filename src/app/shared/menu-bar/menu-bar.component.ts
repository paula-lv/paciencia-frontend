import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenubarModule, AvatarModule, CommonModule, BadgeModule, InputTextModule, RippleModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

  items: MenuItem[] | undefined;

  ngOnInit(): void{
    this.items = [
      {
          label: 'Inicio',
          icon: 'pi pi-home'
      },
      {
          label: 'Suscripciones',
          icon: 'pi pi-dollar'
      },
      {
          label: 'Cursos',
          icon: 'pi pi-calculator',
          items: [
              {
                label: 'Primero ESO',
                icon: 'pi pi-caret-right',
                items: [
                  {
                    label: 'Tema 1. Sumas',
                    icon: 'pi pi-plus',
                  },
                  {
                    label: 'Tema 2. Restas',
                    icon: 'pi pi-minus',
                  },
                ]
              },
              {
                label: 'Segundo ESO',
                icon: 'pi pi-caret-right',
              },
              {
                label: 'Tercero ESO',
                icon: 'pi pi-caret-right',
              },
              {
                label: 'Cuarto ESO',
                icon: 'pi pi-caret-right',
              },
              {
                label: 'Primero BACH',
                icon: 'pi pi-caret-right',
              },
              {
                label: 'Segundo BACH',
                icon: 'pi pi-caret-right',
              },
          ]
      },
      {
          label: 'Notificaciones',
          icon: 'pi pi-envelope',
          badge: '3'
      }
    ];
  }
}
