import { Component, ElementRef } from '@angular/core';

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
public query = '';
public query2 = '';
newTeam:any={};
newEmp:any={};
teamForm:boolean=false;
empForm:boolean=false;
isNewTeam:boolean;
isNewEmp:boolean;
isTeamSelected:boolean=false;
isEmpSelected:boolean=false;
public teams = [];

public filteredList = [];
public filteredList2 = [];
public elementRef;


constructor(myElement: ElementRef) {  
  this.getNameList();  
  this.elementRef = myElement;
  }  
  getNameList()  
  {   
  this.nameList= [    
    {    
      Team: 'Engineering',    
      employees: ['Lawana Fan', 'Larry Rainer', 'Aman Juneja', 'Leah Shumway']
    },    
    {    
      Team: 'Executive',    
      employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj'] 
    },
    {    
      Team: 'Finance',    
      employees:  ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']    
    },
    {    
      Team: 'Sales',    
      employees: ['Ankit Tiwari','Ramesh Kumar']    
    }  
  ]    

  
  for (var j = 0; j < this.nameList.length; j++){
    this.teams.push(this.nameList[j].Team);
  }
  }
   
  
  //  for (let item of items) {
  //   console.log(item); // Will display contents of the object inside the array

  filter() {
    
    if (this.query !== ""){
          this.filteredList = this.teams.filter(function(el){
          //return !this.query || (el ? ('' + el).toLowerCase().indexOf(this.query) > -1 : false);
         return (el.toLowerCase().substr(0, this.query.length) ==
           this.query.toLowerCase()) == true;
            //return el.toLowerCase().search(this.query.toLowerCase()) > -1;
        }.bind(this));
        
    }else{
        this.filteredList = [];
    }
}
 
select(item){
    this.query = item;
    console.log(item);
    this.filteredList = [];
    // this.EmpList = this.nameList.filter((item)=> this.nameList['Team'] == item);
      
    
    //     this.EmpList = this.nameList.filter(function(item) { 
      
    //   return this.nameList["Team"] == item});
    
    //      console.log(JSON.stringify(this.EmpList));
    this.isTeamSelected=true;    
}
  // selectTeam()
  // {
  // console.log(JSON.stringify(this.item));
  // this.EmpList = this.teamId.employees;
  // console.log(JSON.stringify(this.EmpList));
  // this.isTeamSelected=true;
  // } 
 
  filter2() {
    
    if (this.query2 !== ""){
          this.filteredList2 = this.EmpList.filter(function(el){
          //return !this.query || (el ? ('' + el).toLowerCase().indexOf(this.query) > -1 : false);
         return (el.toLowerCase().substr(0, this.query2.length) ==
           this.query2.toLowerCase()) == true;
            //return el.toLowerCase().search(this.query.toLowerCase()) > -1;
        }.bind(this));
        
    }else{
        this.filteredList2 = [];
    }
    } 
 
  select2(item2){
    this.query2 = item2;
    console.log(item2);
    this.filteredList2 = [];
    this.isEmpSelected=true;    
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

  showAddTeamForm(){

    // resets form if edited user
    // if(this.users.length){
    //   this.newTeam={};
    // }
    this.teamForm=true;
    this.isNewTeam=true;

  }
  saveTeam=function(newTeam){
    if(this.isNewTeam){
      //add a new user
      this.nameList.push({ Team : newTeam.Team , employees:[] });
      this.teams.push(newTeam.Team);
      console.log(newTeam.Team);
      console.log(JSON.stringify(this.nameList));
      alert("New Team is added");
      console.log(JSON.stringify(this.teams))
    }
    this.userForm=false;
  }
  cancelNewTeam(){
    this.newTeam={};
    this.teamForm=false;
  }
  showAddEmpForm(){

    this.empForm=true;
    this.isNewEmp=true;

  }
  saveEmp=function(newEmp){
    if(this.isNewEmp){
      console.log(this.teamId);
      console.log(newEmp.Emp);
     // this.nameList[""].push({ Team: this.teamId, employees : newEmp.Emp });
     // alert("New Employee is added");
    }
    this.empForm=false;
  }
  cancelNewEmp(){
    this.newEmp={};
    this.empForm=false;
  }
  }  
  