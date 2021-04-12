import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeInfoService } from '../employee-info.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public employees :any=[];
  constructor(private router: Router,private _empService : EmployeeInfoService) { }

  // @ViewChild('username') username:any;
  // @ViewChild('password') password:any;

  ngOnInit(){
   // this._empService.getEmployees().subscribe(data => this.employees=data);
  }

  Login(loginForm : any)
  {
    var count=0;
    let resultSet = this._empService.getEmployees();
    resultSet.subscribe((res)=>{
    console.log(res);

    let data = loginForm.form.value;
    console.log(data);
    for(var i=0;i<res.length;i++){
         if(res[i].username == data.Username){
          alert("Login Successful");
          count = 1;
          this.router.navigate(['/emplist']);
         }
    }
    if(count == 0)
    {
      alert("Login Unsuccessful");
    }

    });

  }
  Registration(){
    this.router.navigate(["/register"]);
  }
}
