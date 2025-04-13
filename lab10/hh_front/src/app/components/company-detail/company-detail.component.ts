import { Component } from '@angular/core';
import { Vacancy } from '../../models/vacancy';
import { CompanyService } from '../../../services/company.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-detail',
  imports: [CommonModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent {
  company!: Company;
  vacancies: Vacancy[] = [];

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.companyService.getCompany(id).subscribe((data) => {
      this.company = data;
    });
    
    this.companyService.getCompanyVacancies(id).subscribe(data => {
      this.vacancies = data;
    });
  }
}
