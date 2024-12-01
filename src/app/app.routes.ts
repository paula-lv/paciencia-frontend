import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CursoComponent } from './pages/curso/curso.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { RecuperarPswComponent } from './pages/auth/recuperar-psw/recuperar-psw.component';
import { TemaComponent } from './pages/tema/tema.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        title: 'Inicio'
    },

    {
        path: 'curso/:id',
        component: CursoComponent,
        title: 'Curso'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'LogIn'
    },
    {
        path: 'registro',
        component: RegistroComponent,
        title: 'Registro'
    },
    {
        path: 'recuperar',
        component: RecuperarPswComponent,
        title: 'Recuperar contraseña'
    },
    {
        path: 'tema',
        component: TemaComponent,
        title: 'tema'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];
