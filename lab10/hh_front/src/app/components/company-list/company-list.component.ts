import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { Vacancy } from '../../models/vacancy';
import { CompanyService } from '../../../services/company.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit{
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompanyId: number | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe({
      next: (data) => this.companies = data,
      error: (err) => console.error('Ошибка при получении компаний', err)
    });
  }

  showVacancies(companyId: number): void {
    this.selectedCompanyId = companyId;
    this.companyService.getCompanyVacancies(companyId).subscribe(data => {
      this.vacancies = data;
    });
  }
}
