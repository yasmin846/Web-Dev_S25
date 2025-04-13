import { Component } from '@angular/core';
import { Vacancy } from '../../models/vacancy';
import { VacancyService } from '../../../services/vacancy.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-vacancy-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent {
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this.vacancyService.getVacancies().subscribe(data => {
      this.vacancies = data;
    });
  }
}
