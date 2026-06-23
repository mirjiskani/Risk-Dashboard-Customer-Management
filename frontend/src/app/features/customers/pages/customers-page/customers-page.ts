import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerTable } from '../../components/customer-table/customer-table';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customers-page',
  imports: [CustomerTable],
  templateUrl: './customers-page.html',
  styleUrl: './customers-page.scss',
})
export class CustomersPage {
  customers = signal<Customer[]>([]);

  constructor(private http: HttpClient) {
     this.loadCustomers();
  }

  loadCustomers() {
    this.http.get<Customer[]>('assets/data/customers.json').subscribe({
      next: (data) => {
        this.customers.set(data);
      },
      error: (error) => {
        console.error('Failed to load customers:', error);
      }
    });
  }
}