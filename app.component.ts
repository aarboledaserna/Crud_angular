import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Crud-Angular';

  msg:string = '';
 
  employees = [
    {name1: 'John', position: 'Software'},
    {name1: 'Noe', position: 'Developer'},
    {name1: 'Smith', position: 'Designer'},

  ];


  isFormVisible: boolean = false;
  model: any = {};
  model2: any = {};
  
  addEmployee(): void {
      this.employees.push(this.model)
      
  }


  deleteEmployee(): void {
    var answer = confirm('Are you sure you want to delete this employee?');
    if(answer){
      this.employees.splice(this.indice, 1);
    }
  }

   indice: any;
  
  editEmployee(i:number) {
    this.model2.name1= this.employees[i].name1;
    console.log(this.model2.name1);
    this.isFormVisible=true;
    this.indice = i;
    console.log(i);
  }

  updateEmployee(): void {  
    for (let j=0; j<this.employees.length; j++){
      if(j==this.indice){
        this.employees[j]=this.model2;
        this.model2 = {};
        this.msg = 'Employee updated successfully';
        console.log(this.employees.length);
        console.log(j);
      }
    }
  }

  closeAlert():void {
       this.msg = '';
    }
  
}
