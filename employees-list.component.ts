import { Component, OnInit } from '@angular/core';
import { EmployeeInfoService } from '../employee-info.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
public employees:any =[];
  constructor(private _empService : EmployeeInfoService) { }

  ngOnInit() {
       this._empService.getEmployees().subscribe(data => this.employees=data);
  }

}
