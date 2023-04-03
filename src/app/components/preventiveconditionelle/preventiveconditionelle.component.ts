import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EquipementService } from '../equipement/equipement.service';
import { TypeprevService } from '../typepreventive/typeprev.service';
import { PreventiveConditionelleService } from './preventiveconditionelle.service';
export interface PreventiveConditionelle{
  id?:any;
  id_equip?:any;
  id_Type?:any;
  Code_Unite?:any;
  Valeur_Min?:any;
  Valeur_Max?:any;
  Periodicite?:any
  Frequence?:any;
  Frequence_Heure?:any;
  Jour?:any;
  Date_der_Releve?:any;
  Date_Fin?:any;
  Observation?:any;
 
}
@Component({
  selector: 'app-preventiveconditionelle',
  templateUrl: './preventiveconditionelle.component.html',
  styleUrls: ['./preventiveconditionelle.component.css']
})
export class PreventiveconditionelleComponent implements OnInit {
  selectedPreventiveconditionelle! : PreventiveConditionelle;
  
  preventiveconditionelleDialog: boolean = false;

   typeDialog="";
   equipements!:any;

   preventiveconditionelles!: PreventiveConditionelle[];

   preventiveconditionelle!: PreventiveConditionelle;
   typepreventives!:any;
    selectedPreventiveconditionelles!: PreventiveConditionelle[];
    typepreventiveconditionelles!:any;
    submitted!: boolean;
    preventiveconditionelleFormGroupe!:FormGroup;
    typeprevs!:any
  constructor(private typepreveservice:TypeprevService,private preventiveconditionelleservice:PreventiveConditionelleService,private equipementservice: EquipementService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder ,private typepreventiveservice:TypeprevService) { }

  ngOnInit(): void {
    this.preventiveconditionelleservice.getAllpreventiveconditionelle().then(data =>{
    this.preventiveconditionelles = data;
    console.log(this.preventiveconditionelles)
  } );
  this.typepreveservice.getTypePrev().then(data =>{
    this.typeprevs = data;
    console.log(this.typeprevs)
  } );
  this.equipementservice.getAllEquipement().then(data=>{
    this.equipements=data
  })
 
  this.preventiveconditionelleFormGroupe=this.fb.group({
    
    id_equip:["",Validators.required],
    id_Type:["",Validators.required],
    Code_Unite:["",Validators.required],
    Valeur_Min:["",Validators.required],
    Valeur_Max:["",Validators.required],
    Periodicite:["",Validators.required],
    Frequence:["",Validators.required],
    Frequence_Heure:["",Validators.required],
    Jour:["",Validators.required],
    Date_Action:["",Validators.required],
    Date_der_Releve:["",Validators.required],
    Date_Fin:["",Validators.required],
    Observation:["",Validators.required]

})
}
openNew() {
  this.typeDialog="add"
  this.preventiveconditionelleFormGroupe.reset();
  this.preventiveconditionelle = {};
  this.submitted = false;
  this.preventiveconditionelleDialog = true;
}

deletePreventiveConditionelle() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selectedPreventiveconditionellet?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.preventiveconditionelles = this.preventiveconditionelles.filter(val => this.selectedPreventiveconditionelles.includes(val));
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Preventiveconditionelles Deleted', life: 3000});
      }
  });
}

updatePreventiveConditionelle(preventiveconditionelle:any) {
this.typeDialog="edit"
this.selectedPreventiveconditionelle=preventiveconditionelle
console.log(this.selectedPreventiveconditionelles);
this.preventiveconditionelleFormGroupe.patchValue(this.selectedPreventiveconditionelles)
this.preventiveconditionelle = {...preventiveconditionelle};
this.preventiveconditionelleDialog = true;
}

onDelete(id:any) {
this.confirmationService.confirm({
    message: 'Are you sure you want to delete the selected Preventiveconditionelle?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',


 
  accept: () => {
    this.preventiveconditionelleservice.deletePreventiveConditionelle(id).subscribe(data=>{

        this.preventiveconditionelleservice.getAllpreventiveconditionelle().then(data=>{
            this.preventiveconditionelles=data
        }
        

        )
    })
    
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'PreventiveConditionelle Deleted', life: 3000});
}
});
}

hideDialog() {
  this.preventiveconditionelleDialog = false;
  this.submitted = false;
}


savepreventiveconditionelle(){



this.submitted! = true;
//if(this.preventiveconditionelleFormGroupe!.invalid) return;
console.log(this.preventiveconditionelleFormGroupe)
if(this.typeDialog=='add')  {   this.preventiveconditionelleservice.savePreventiveConditionelle(this.preventiveconditionelleFormGroupe.value).subscribe(data=>{
if(data.status==='success' && data.data==1)
this.preventiveconditionelleservice.getAllpreventiveconditionelle().then(data=>{
this.preventiveconditionelles=data

this.messageService.add({severity:'success', summary: 'Successful', detail: 'prev Conditionelle created', life: 3000});
 
})
this.preventiveconditionelles = [...this.preventiveconditionelles];
           this.preventiveconditionelleDialog = false;
    this.preventiveconditionelle = {};

})
}
else if(this.typeDialog=='edit') {this.preventiveconditionelleservice.updatePreventiveConditionelle(this.preventiveconditionelleFormGroupe.value,this.selectedPreventiveconditionelle.id).subscribe(data=>{
if(data.status==='success' && data.data==1)
this.preventiveconditionelleservice.getAllpreventiveconditionelle().then(data=>{
    this.preventiveconditionelles=data
   
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'preventiveconditionelle updated', life: 3000});
     
})

else alert("error")
this.preventiveconditionelles = [...this.preventiveconditionelles];
           this.preventiveconditionelleDialog = false;
    this.preventiveconditionelle = {};

})}
}}

