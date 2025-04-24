import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { ArticalsComponent } from './components/pages/articals/articals.component';

export const routes: Routes = [
    {
        path: "",
        component: ArticalsComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register", 
        component: RegisterComponent
    }
];
