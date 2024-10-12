import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-psw',
  standalone: true,
  imports: [CheckboxModule, InputTextModule, ButtonModule],
  templateUrl: './recuperar-psw.component.html',
  styleUrl: './recuperar-psw.component.scss'
})
export class RecuperarPswComponent {

  constructor(private router: Router) {

  }

  recuperar(): void {
    this.router.navigate(['/login']);
  }

}
