import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TypeSpecificationService } from './typespecification.service';
export interface TypeSpecification{
  id?:any;
  Designation?:any;
  CodeTypeS?:any;
  J_ddm?:any;
 
}
@Component({
  selector: 'app-typespecification',
  templateUrl: './typespecification.component.html',
  styleUrls: ['./typespecification.component.css']
})
export class TypespecificationComponent implements OnInit {

  selectedTypeSpecification! : TypeSpecification;
  
  typespecificationDialog: boolean = false;

   typeDialog="";

   typespecifications!: TypeSpecification[];

   typespecification!: TypeSpecification;

    selectedTypeSpecifications!: TypeSpecification[];

    submitted!: boolean;
    typespecificationFormGroupe!:FormGroup;
    constructor(private typespecificationservice:TypeSpecificationService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.typespecificationservice.getAllTypeSpecification().then(data =>{
      this.typespecifications = data;
      console.log(this.typespecifications)
    } );
  
    this.typespecificationFormGroupe=this.fb.group({
      Designation:["",Validators.required],
      
     
      CodeTypeS:["",Validators.required],
      
     
      // J_ddm:["",Validators.required],
    

  })
  }
  openNew() {
    this.typeDialog="add"
    this.typespecificationFormGroupe.reset();
    this.typespecification = {};
    this.submitted = false;
    this.typespecificationDialog = true;
}

deleteSelectedTypeSpecification() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selectedtypespecification?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.typespecifications = this.typespecifications.filter(val => this.selectedTypeSpecifications.includes(val));
            
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'TypeSpecifications Deleted', life: 3000});
        }
    });
}

editTypeSpecification(specification:any) {
  this.typeDialog="edit"
  this.selectedTypeSpecification=specification
  console.log(this.selectedTypeSpecification);
  this.typespecificationFormGroupe.patchValue(this.selectedTypeSpecification)
  this.typespecification = {...specification};
  this.typespecificationDialog = true;
}

onDelete(id:any) {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected typespecifications?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',


   
    accept: () => {
      this.typespecificationservice.deleteTypeSpecification(id).subscribe(data=>{

          this.typespecificationservice.getAllTypeSpecification().then(data=>{
              this.typespecifications=data
          }
          

          )
      })
      
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'type specifications Deleted', life: 3000});
  }
});
}

hideDialog() {
    this.typespecificationDialog = false;
    this.submitted = false;
}


saveTypeSpecification(){



this.submitted! = true;
if(this.typespecificationFormGroupe!.invalid) return;
 
if(this.typeDialog=='add')  {   this.typespecificationservice.saveTypeSpecification(this.typespecificationFormGroupe!.value).subscribe(data=>{
if(data.status==='success' && data.data==1)
this.typespecificationservice.getAllTypeSpecification().then(data=>{
  this.typespecifications=data
 
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'type specification created', life: 3000});
   
})
this.typespecifications = [...this.typespecifications];
             this.typespecificationDialog = false;
      this.typespecification = {};
  
})
}
else if(this.typeDialog=='edit') {this.typespecificationservice.updateTypeSpecification(this.typespecificationFormGroupe!.value,this.selectedTypeSpecification.id).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.typespecificationservice.getAllTypeSpecification().then(data=>{
      this.typespecifications=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'type specification updated', life: 3000});
       
  })
 
  else alert("error")
  this.typespecifications = [...this.typespecifications];
             this.typespecificationDialog = false;
      this.typespecification = {};

})}
}}
  
