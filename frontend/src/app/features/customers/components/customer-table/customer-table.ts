import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-table',
  imports: [CommonModule],
  templateUrl: './customer-table.html',
  styleUrl: './customer-table.scss',
})
export class CustomerTable {
   customers = input.required<Customer[]>();  
}
