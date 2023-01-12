import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from './IEmployee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
    employee!:Employee;
    constructor(private employeeService:EmployeeService, private router:Router, private route:ActivatedRoute){}
    ngOnInit():void {
      let id = this.route.snapshot.params['id'];
      this.employeeService.getEmployeeById(id).subscribe(data => {
        this.employee=data;
      })
    }
    onDelete(){
        this.employeeService.deleteEmployee(this.employee.id).subscribe(data => {
          this.router.navigate(["/employees"]);
        })
    }

    onCancel(){
      this.router.navigate(["/employees"]);
    }

}
