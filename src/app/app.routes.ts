import { LoginComponent } from './Pages/management-login/management-login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';

export const routes: Routes = [

    {   
        path: 'home', 
        component: HomeComponent
    },
    
    {
        path: 'contact',
        component: ContactComponent
    },

    {
        path: 'about',
        component: AboutUsComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: '**',
        redirectTo: '/home'
    },

    {
        path: '', 
        redirectTo: '/home',
        pathMatch: 'full'
    }
    
];
