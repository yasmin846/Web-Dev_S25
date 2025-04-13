import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../app/models/company';
import { Vacancy } from '../app/models/vacancy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/companies/${id}/`);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/companies/`);
  }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/companies/${companyId}/vacancies/`);
  }
}
