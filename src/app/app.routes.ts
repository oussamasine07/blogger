import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { ArticalsComponent } from './components/pages/articals/articals.component';
import { SingleArticalComponent } from './components/pages/single-artical/single-artical.component';
import { CreateArticalComponent } from './components/pages/artical/create-artical/create-artical.component';
import { UpdateArticalComponent } from './components/pages/artical/update-artical/update-artical.component';

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
    },
    {
        path: "create-artical",
        component: CreateArticalComponent
    },
    {
        path: "update-artical/:articalId",
        component: UpdateArticalComponent
    }
];
