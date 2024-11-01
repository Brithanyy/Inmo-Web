import { LoginComponent } from './Pages/management-login/management-login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { PropertiesComponent } from './Pages/properties/properties.component';
import { ListHousesComponent } from './Pages/list-houses/list-houses.component';
import { ListLandsComponent } from './Pages/list-lands/list-lands.component';
import { ListDepartamentsComponent } from './Pages/list-departaments/list-departaments.component';

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
        path: 'properties',
        component: PropertiesComponent
    },

    {
        path: 'houses',
        component: ListHousesComponent
    },

    {
        path: 'departaments',
        component: ListDepartamentsComponent
    },

    {
        path: 'lands',
        component: ListLandsComponent
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
