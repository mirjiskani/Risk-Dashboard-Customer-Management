
import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
    private http = inject(HttpClient);

    async getCustomers(): Promise<Customer[]> {
        return firstValueFrom(this.http.get<Customer[]>('assets/data/customers.json'));
    }

}