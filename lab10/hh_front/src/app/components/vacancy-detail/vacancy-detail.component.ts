import { Component } from '@angular/core';
import { Vacancy } from '../../models/vacancy';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../../../services/vacancy.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy-detail',
  imports: [CommonModule],
  templateUrl: './vacancy-detail.component.html',
  styleUrl: './vacancy-detail.component.css'
})
export class VacancyDetailComponent { 
  vacancy!: Vacancy;

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vacancyService.getVacancy(+id).subscribe(data => {
        this.vacancy = data;
      });
    }
  }
}
