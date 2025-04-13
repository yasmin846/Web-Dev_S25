import { Routes } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';
import { VacancyDetailComponent } from './components/vacancy-detail/vacancy-detail.component';
import { TopVacanciesComponent } from './components/top-vacancies/top-vacancies.component';

export const routes: Routes = [
    { path: '', redirectTo: 'companies', pathMatch: 'full' },
    { path: 'companies', component: CompanyListComponent },
    { path: 'companies/:id', component: CompanyDetailComponent },
    { path: 'vacancies', component: VacancyListComponent },
    { path: 'vacancies/top_ten', component: TopVacanciesComponent },
    { path: 'vacancies/:id', component: VacancyDetailComponent },
];
