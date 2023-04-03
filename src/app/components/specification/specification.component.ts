import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SpecificationService } from './specification.service';
export interface Specification{
  id?:any;
  Designation?:any;
  Code_Spec?:any;
  J_ddm?:any;
 
}

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  selectedSpecification! : Specification;
  
  specificationDialog: boolean = false;

   typeDialog="";

   specifications!: Specification[];

   specification!: Specification;

    selectedSpecifications!: Specification[];

    submitted!: boolean;
    specificationFormGroupe!:FormGroup;
    constructor(private specificationservice:SpecificationService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.specificationservice.getAllSpecification().then(data =>{
      this.specifications = data;
      console.log(this.specifications)
    } );
  
    this.specificationFormGroupe=this.fb.group({
      Designation:["",Validators.required],
      
     
      Code_Spec:["",Validators.required],
      
     
      // J_ddm:["",Validators.required],
    

  })
  }
  openNew() {
    this.typeDialog="add"
    this.specificationFormGroupe.reset();
    this.specification = {};
    this.submitted = false;
    this.specificationDialog = true;
}

deleteSelectedSpecification() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selectedsites?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.specifications = this.specifications.filter(val => this.selectedSpecifications.includes(val));
            
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Specifications Deleted', life: 3000});
        }
    });
}

editSpecification(specification:any) {
  this.typeDialog="edit"
  this.selectedSpecification=specification
  console.log(this.selectedSpecification);
  this.specificationFormGroupe.patchValue(this.selectedSpecification)
  this.specification = {...specification};
  this.specificationDialog = true;
}

onDelete(id:any) {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected specifications?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',


   
    accept: () => {
      this.specificationservice.deleteSpecification(id).subscribe(data=>{

          this.specificationservice.getAllSpecification().then(data=>{
              this.specifications=data
          }
          

          )
      })
      
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'specifications Deleted', life: 3000});
  }
});
}

hideDialog() {
    this.specificationDialog = false;
    this.submitted = false;
}


saveSpecification(){



this.submitted! = true;
if(this.specificationFormGroupe!.invalid) return;
 
if(this.typeDialog=='add')  {   this.specificationservice.saveSpecification(this.specificationFormGroupe!.value).subscribe(data=>{
if(data.status==='success' && data.data==1)
this.specificationservice.getAllSpecification().then(data=>{
  this.specifications=data
 
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'site created', life: 3000});
   
})
this.specifications = [...this.specifications];
             this.specificationDialog = false;
      this.specification = {};
  
})
}
else if(this.typeDialog=='edit') {this.specificationservice.updateSpecification(this.specificationFormGroupe!.value,this.selectedSpecification.id).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.specificationservice.getAllSpecification().then(data=>{
      this.specifications=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'specification updated', life: 3000});
       
  })
 
  else alert("error")
  this.specifications = [...this.specifications];
             this.specificationDialog = false;
      this.specification = {};

})}
}}
  
