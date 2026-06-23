export interface Customer {
  id: number;
  name: string;
  email: string;
  country: string;
  risk: 'Low' | 'Medium' | 'High';
  status: 'Active' | 'Review' | 'Blocked';
}