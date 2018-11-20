import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public  nameList: any;  
public data:any; 
public teamId: any; 
public EmpList: any;
public empId: any;
users: any;
newTeam:any={};
userForm:boolean=false;
isNewUser:boolean;
isTeamSelected:boolean=false;
isEmpSelected:boolean=false;


constructor(  ) {  
  this.getNameList();  
  }  
  getNameList()  
  {   
  this.nameList= [    
    {    
      "Team": 'Engineering',    
      employees: ['Lawana Fan', 'Larry Rainer', 'Aman Juneja', 'Leah Shumway']
    },    
    {    
      "Team": 'Executive',    
      employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj'] 
    },
    {    
      "Team": 'Finance',    
      employees:  ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']    
    },
    {    
      "Team": 'Sales',    
      employees: ['Ankit Tiwari','Ramesh Kumar']    
    }  
  ]    
  }
  selectTeam()
  {
  console.log(JSON.stringify(this.teamId));
  this.EmpList = this.teamId.employees;
  console.log(JSON.stringify(this.EmpList));
  this.isTeamSelected=true;
  } 
  selectEmployee(){
    console.log(JSON.stringify(this.empId));
    this.isEmpSelected=true;
  } 
  noneSelected(){
    return (this.isTeamSelected && this.isEmpSelected);
  }
  noTeamSelected(){
    return this.isTeamSelected;
  }
  onSubmit()
  {
    if (this.isEmpSelected && this.isTeamSelected) {
      alert("Selected Team is "+this.teamId.Team+ " and Selected Employee is "+ this.empId);
    } else {
      alert("Please select Team and its Employee");
    }
     
  }
  onClear(){
    this.teamId = "";
    this.empId= "";
    this.isEmpSelected=!this.isEmpSelected;
    this.isTeamSelected=!this.isTeamSelected;
  }
  
  // showAddUserForm(){

  //   // resets form if edited user
  //   if(this.users.length){
  //     this.newTeam={};
  //   }
  //   this.userForm=true;
  //   this.isNewUser=true;

  // }
  }  
  