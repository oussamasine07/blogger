import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { ArticalsComponent } from './components/pages/articals/articals.component';
import { SingleArticalComponent } from './components/pages/single-artical/single-artical.component';

export const routes: Routes = [
    {
        path: "",
        component: ArticalsComponent
    },
    {
        path: "artical/:articalId",
        component: SingleArticalComponent
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
