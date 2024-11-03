import { LoginComponent } from './Pages/management-login/management-login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { PropertiesComponent } from './Pages/properties/properties.component';
import { DepartamentsListComponent } from './Pages/departaments-list/departaments-list.component';
import { HousesListComponent } from './Pages/houses-list/houses-list.component';
import { LandsListComponent } from './Pages/lands-list/lands-list.component';
import { ManagementAddHouseComponent } from './Pages/management-add-house/management-add-house.component';
import { ManagementAddDepartamentComponent } from './Pages/management-add-departament/management-add-departament.component';
import { ManagementAddLandComponent } from './Pages/management-add-land/management-add-land.component';

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
        component: HousesListComponent
    },

    {
        path: 'departaments',
        component: DepartamentsListComponent
    },

    {
        path: 'lands',
        component: LandsListComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'add-house',
        component: ManagementAddHouseComponent
    },
    {
        path: 'add-departament',
        component: ManagementAddDepartamentComponent
    },
    {
        path: 'add-land',
        component: ManagementAddLandComponent
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
