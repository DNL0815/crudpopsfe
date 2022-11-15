import { HttpErrorResponse } from '@angular/common/http';
import { Component, Directive, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit {
  employees!: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(data => console.log(data, id));
    this.reloadData();
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}