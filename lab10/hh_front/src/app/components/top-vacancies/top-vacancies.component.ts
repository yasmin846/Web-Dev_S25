import { Component } from '@angular/core';
import { Vacancy } from '../../models/vacancy';
import { VacancyService } from '../../../services/vacancy.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-vacancies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-vacancies.component.html',
  styleUrl: './top-vacancies.component.css'
})
export class TopVacanciesComponent {
  topVacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this.vacancyService.getTopVacancies().subscribe(data => {
      this.topVacancies = data;
    });
  }
}
