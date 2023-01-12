import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './IEmployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://employeeappanukriti-env.eba-fuygyg7p.us-east-2.elasticbeanstalk.com/employees");
  }
  addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>("http://employeeappanukriti-env.eba-fuygyg7p.us-east-2.elasticbeanstalk.com/employees", employee);
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>("http://employeeappanukriti-env.eba-fuygyg7p.us-east-2.elasticbeanstalk.com/employees/"+id);
  }
  updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>("http://employeeappanukriti-env.eba-fuygyg7p.us-east-2.elasticbeanstalk.com/employees/"+employee.id, employee);
  }
  deleteEmployee(id:number):Observable<Employee>{
    return this.http.delete<Employee>("http://employeeappanukriti-env.eba-fuygyg7p.us-east-2.elasticbeanstalk.com/employees/"+id);
  }
}
