import { Routes } from '@angular/router';
import { HomeComponent } from './cores/pages/home/home.component';
import { WebjobsComponent } from './cores/pages/webjobs/webjobs.component';
import { JobsComponent } from './cores/pages/jobs/jobs.component';
import { NewjobComponent } from './cores/pages/newjob/newjob.component';
import { NOT_FOUND } from '@angular/core/primitives/di';
import { NotfoundComponent } from './cores/pages/notfound/notfound.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },

    {
         path:'home',
         component:HomeComponent,
         title:"free Lancer jobs"

    },
    {
        path:'jobs',
        component:WebjobsComponent
    },

    {
        path:'My-jobs',
        component:JobsComponent
    },
    {
        path:'new-job',
        component:NewjobComponent
    },

    {
        path:'edit-job/:id',
        component:NewjobComponent

    },
    {
        path:'**',
        component:NotfoundComponent

    }

   
];
