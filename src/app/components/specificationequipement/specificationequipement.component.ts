import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EquipementService } from '../equipement/equipement.service';
import { SpecificationService } from '../specification/specification.service';
import { TypeSpecificationService } from '../typespecification/typespecification.service';
import { SpecificationEquipementService } from './specificationequipement.service';
export interface Specificationequipement{
  id?:any
  id_equip?:any
  id_spec?:any
  Valeur?:any
  Id_TypeS?:any
}

@Component({
  selector: 'app-specificationequipement',
  templateUrl: './specificationequipement.component.html',
  styleUrls: ['./specificationequipement.component.css']
})
export class SpecificationequipementComponent implements OnInit {

  selectedSpecificationEquip! : Specificationequipement;
  equipements!:any;
  specificationequipDialog: boolean = false;

   typeDialog="";

   specificationequips!: Specificationequipement[];

   specificationequip!: Specificationequipement;

    selectedSpecificationEquips!: Specificationequipement[];
    specifications!:any;
    typespecifications!:any;
    submitted!: boolean;
    specificationequipFormGroupe!:FormGroup;
 
    constructor(private specificationequipementservice:SpecificationEquipementService,private equipementservice: EquipementService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder,private specificationservice:SpecificationService,private typespecificationservice:TypeSpecificationService) { 
      
    }

  ngOnInit(): void {
    this.specificationequipementservice.getAllSpecificationequipement().then(data =>{
      this.specificationequips = data;
      console.log(this.specificationequips)
    } );
    this.equipementservice.getAllEquipement().then(data=>{
      this.equipements=data
    })
    this.specificationservice.getAllSpecification().then(data=>{
      this.specifications=data
    })
    this.typespecificationservice.getAllTypeSpecification().then(data=>{
      this.typespecifications=data
    })
    this.specificationequipFormGroupe=this.fb.group({
      id_equip:["",Validators.required],
      id_spec:["",Validators.required],
      Valeur:["",Validators.required],
      Id_TypeS:["",Validators.required],
    

  })
  }
  openNew() {
    this.typeDialog="add"
    this.specificationequipFormGroupe.reset();
    this.specificationequip = {};
    this.submitted = false;
    this.specificationequipDialog = true;
}

deleteSelectedSpecificationEquip() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selectedspecificationequipements?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.specificationequips = this.specificationequips.filter(val => this.selectedSpecificationEquips.includes(val));
            
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Specification equipements Deleted', life: 3000});
        }
    });
}

editSpecificationEquipement(specificationequip:any) {
  this.typeDialog="edit"
  this.selectedSpecificationEquip=specificationequip
  console.log(this.selectedSpecificationEquip);
  this.specificationequipFormGroupe.patchValue(this.selectedSpecificationEquip)
  this.specificationequip = {...specificationequip};
  this.specificationequipDialog = true;
}

onDelete(id:any) {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Specification Equipement?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',


   
    accept: () => {
      this.specificationequipementservice.deleteSpecificationequipement(id).subscribe(data=>{

          this.specificationequipementservice.getAllSpecificationequipement().then(data=>{
              this.specificationequips=data
          }
          

          )
      })
      
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'sites Deleted', life: 3000});
  }
});
}

hideDialog() {
    this.specificationequipDialog = false;
    this.submitted = false;
}


saveSpecificationequipement(){



this.submitted! = true;
//if(this.prevenitiveperiodiqueFormGroupe!.invalid) return;
 
if(this.typeDialog=='add')  {   this.specificationequipementservice.saveSpecificationequipement(this.specificationequipFormGroupe!.value).subscribe(data=>{
if(data.status==='success' && data.data==1)
this.specificationequipementservice.getAllSpecificationequipement().then(data=>{
  this.specificationequips=data
 
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'specication equipement created', life: 3000});
   
})
this.specificationequips = [...this.specificationequips];
             this.specificationequipDialog = false;
      this.specificationequip = {};
  
})
}
else if(this.typeDialog=='edit') {this.specificationequipementservice.updateSpecificationequipement(this.specificationequipFormGroupe!.value,this.selectedSpecificationEquip.id_equip).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.specificationequipementservice.getAllSpecificationequipement().then(data=>{
      this.specificationequips=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'specification equipement updated', life: 3000});
       
  })
 
  else alert("error")
  this.specificationequips = [...this.specificationequips];
             this.specificationequipDialog = false;
      this.specificationequip = {};

})}
}}