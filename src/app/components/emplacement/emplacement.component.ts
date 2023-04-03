import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SiteService } from '../site/site.service';
import { TypeEmplacementService } from '../typeemplacement/typeemplacement.service';
import { EmplacementService } from './emplacement.service';
export interface Emplacement{
  id?:any;
  Designation?:any;
  CodeEmpl?:any;
  Emp_Pere?:any
  idSite?:any;
  idTypeEmpl?:any;
}

@Component({
  selector: 'app-emplacement',
  templateUrl: './emplacement.component.html',
  styleUrls: ['./emplacement.component.css']
})
export class EmplacementComponent implements OnInit {
  selectedEmplacement! : Emplacement;
  sites!:any;
  emplacementDialog: boolean = false;

   typeDialog="";

   emplacements!: Emplacement[];

   emplacement!: Emplacement;

    selectedEmplacements!: Emplacement[];
typeemplacements!:any;
    submitted!: boolean;
    emplacementFormGroupe!:FormGroup;
    constructor(private typemplacementservice:TypeEmplacementService,private emplacementservice: EmplacementService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder,private siteservice:SiteService) { }

  ngOnInit(): void {
    this.emplacementservice.getAllEmplacement().then(data =>{
      this.emplacements = data;
      console.log(this.emplacements)
    } );
    this.siteservice.getSite().then(data=>{
      this.sites=data
    })
    this.typemplacementservice.getAllTypeEmplacement().then(data=>{
      this.typeemplacements=data
    })
    this.emplacementFormGroupe=this.fb.group({
      Designation:["",Validators.required],
      
     
      CodeEmpl:["",Validators.required],
      
     
      idTypeEmpl:["",Validators.required],
      Emp_Pere:["",Validators.required],
      idSite:["",Validators.required]

  })
  }
  openNew() {
    this.typeDialog="add"
    this.emplacementFormGroupe.reset();
    this.emplacement = {};
    this.submitted = false;
    this.emplacementDialog = true;
}

deleteSelectedEmplacement() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selectedsites?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.emplacements = this.emplacements.filter(val => this.selectedEmplacements.includes(val));
            
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
        }
    });
}

editEmplacement(emplacement:any) {
  this.typeDialog="edit"
  this.selectedEmplacement=emplacement
  console.log(this.selectedEmplacement);
  this.emplacementFormGroupe.patchValue(this.selectedEmplacement)
  this.emplacement = {...emplacement};
  this.emplacementDialog = true;
}

onDelete(id:any) {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected sites?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',


   
    accept: () => {
      this.emplacementservice.deleteEmplacemnt(id).subscribe(data=>{

          this.emplacementservice.getAllEmplacement().then(data=>{
              this.emplacements=data
          }
          

          )
      })
      
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'sites Deleted', life: 3000});
  }
});
}

hideDialog() {
    this.emplacementDialog = false;
    this.submitted = false;
}


saveEmplacement(){



this.submitted! = true;
if(this.emplacementFormGroupe!.invalid) return;
 
if(this.typeDialog=='add')  {   this.emplacementservice.saveEmlpacement(this.emplacementFormGroupe!.value).subscribe(data=>{
if(data.status==='success' && data.data==1)
this.emplacementservice.getAllEmplacement().then(data=>{
  this.emplacements=data
 
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'site created', life: 3000});
   
})
this.emplacements = [...this.emplacements];
             this.emplacementDialog = false;
      this.emplacement = {};
  
})
}
else if(this.typeDialog=='edit') {this.emplacementservice.updateEmplacement(this.emplacementFormGroupe!.value,this.selectedEmplacement.id).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.emplacementservice.getAllEmplacement().then(data=>{
      this.emplacements=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'site updated', life: 3000});
       
  })
 
  else alert("error")
  this.emplacements = [...this.emplacements];
             this.emplacementDialog = false;
      this.emplacement = {};

})}
}}
  
