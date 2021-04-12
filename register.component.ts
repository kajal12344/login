import { EmployeeInfoService } from './../employee-info.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public Username = "";
Password = "";
Extension = "";
Phoneno = "";
Designation = "";
ConfirmPassword = "";
  constructor(private router:Router,private service : EmployeeInfoService) { }

  ngOnInit() {
  }
  Register(valid: NgForm){
   // let resultSet = this.Register(valid.NgForm.value);
    let data = valid.form.value;
   if(data.Username != '' && data.Password != '' && data.Phoneno != '' && data.Designation != '' && data.ConfirmPassword != '')
  {
    this.service.addEmployee(data).subscribe(()=>
    {
      window.alert("Register Successful");
    });

    console.log(data);

    alert("Register Successful");
    this.router.navigate(['/login']);
   }

  else{
    alert("Please fill all the fields");
  }
}
}
