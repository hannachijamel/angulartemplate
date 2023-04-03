import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { EquipementService } from '../equipement/equipement.service';
import { TypeprevService } from '../typepreventive/typeprev.service';
import { PreventivePeriodiqueService } from './preventiveperiodique.service';
export interface PreventivePeriodique{
  id?:any;
  id_Equip?:any;
  id_Type?:any;
  Periodicite?:any;
  Frequence?:any
  Frequence_Heure?:any;
  Jour?:any;
  Date_Action?:any;
  Date_Fin?:any;
  Date_Der_Maint?:any;
  Echeance?:any;
  Code_Etat_Maint?:any;
  Code_Maint?:any;
  Num_Alerte?:any;
  Date_Init?:any;
  Arret?:any;
  Garantie?:any;
  Date_fin_Garantie?:any;
  Observation?:any;
  J_ddm?:any;
}

@Component({
  selector: 'app-prevenitiveperiodique',
  templateUrl: './prevenitiveperiodique.component.html',
  styleUrls: ['./prevenitiveperiodique.component.css']
})
export class PrevenitiveperiodiqueComponent implements OnInit {

  selectedPrevenitiveperiodique! : PreventivePeriodique;
  equipements!:any;
  prevenitiveperiodiqueDialog: boolean = false;

   typeDialog="";

   prevenitiveperiodiques!: PreventivePeriodique[];

   prevenitiveperiodique!: PreventivePeriodique;

    selectedPrevenitiveperiodiques!: PreventivePeriodique[];
typepreventives!:any;
    submitted!: boolean;
    prevenitiveperiodiqueFormGroupe!:FormGroup;
    cols!: any[];
 
    constructor(private prevenitiveperiodiqueservice:PreventivePeriodiqueService,private equipementservice: EquipementService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder,private typepreventiveservice:TypeprevService) { 
      
      this.prevenitiveperiodiqueservice.getAllPreventivePeriodique().then(data =>{
        this.prevenitiveperiodiques = data;
        console.log(this.prevenitiveperiodiques)
        this.cols = [
          { field: 'Designationequip', header: 'Equipement' },
          { field: 'Designationtype', header: 'type priventive' },
          { field: 'Periodicite', header: 'Periodicite' },
          { field: 'Frequence', header: 'Frequence' },
          { field: 'Frequence_Heure', header: 'Frequence_Heure' },
          { field: 'Jour', header: 'Jour' },
          { field: 'Date_Action', header: 'Date_Action' },
          { field: 'Date_Fin', header: 'Date_Fin' },
          { field: 'Date_Der_Maint', header: 'Date_Der_Maint' },
          { field: 'Echeance', header: 'Echeance' },
          { field: 'Code_Etat_Maint', header: 'Code_Etat_Maint' },
          { field: 'Code_Maint', header: 'Code_Maint' },
          { field: 'Num_Alerte', header: 'Num_Alerte' },
          { field: 'Date_Init', header: 'Date_Init' },
          { field: 'Arret', header: 'Arret' },
          { field: 'Garantie', header: 'Garantie' },
          { field: 'Date_fin_Garantie', header: 'Date_fin_Garantie' },
          { field: 'Observation', header: 'Observation' },
          { field: 'J_ddm', header: 'J_ddm' },
       

      ];
        
    });

    } 
    

  ngOnInit(): void {
    this.prevenitiveperiodiqueservice.getAllPreventivePeriodique().then(data =>{
      this.prevenitiveperiodiques = data;
      console.log(this.prevenitiveperiodiques)
    } );
    this.equipementservice.getAllEquipement().then(data=>{
      this.equipements=data
    })
    this.typepreventiveservice.getTypePrev().then(data=>{
      this.typepreventives=data
    })
    this.prevenitiveperiodiqueFormGroupe=this.fb.group({
      id_Equip:["",Validators.required],
      id_Type:["",Validators.required],
      Periodicite:["",Validators.required],
      Frequence:["",Validators.required],
      Frequence_Heure:["",Validators.required],
      Jour:["",Validators.required],
      Date_Action:["",Validators.required],
      Date_Fin:["",Validators.required],
      Date_Der_Maint:["",Validators.required],
      Echeance:["",Validators.required],
      Code_Etat_Maint:["",Validators.required],
      Code_Maint:["",Validators.required],
      Num_Alerte:["",Validators.required],
      Date_Init:["",Validators.required],
      Arret:["",Validators.required],
      Garantie:["",Validators.required],
      Date_fin_Garantie:["",Validators.required],
      Observation:["",Validators.required],
      J_ddm:["",Validators.required],

  })
  }
  openNew() {
    this.typeDialog="add"
    this.prevenitiveperiodiqueFormGroupe.reset();
    this.prevenitiveperiodique = {};
    this.submitted = false;
    this.prevenitiveperiodiqueDialog = true;
}

deleteSelectedPrevenitivePeriodique() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selectedsites?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.prevenitiveperiodiques = this.prevenitiveperiodiques.filter(val => this.selectedPrevenitiveperiodiques.includes(val));
            
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Preventive Periodique Deleted', life: 3000});
        }
    });
}

editPrevenitiveperiodique(prevenitiveperiodique:any) {
  this.typeDialog="edit"
  this.selectedPrevenitiveperiodique=prevenitiveperiodique
  console.log(this.selectedPrevenitiveperiodique);
  this.prevenitiveperiodiqueFormGroupe.patchValue(this.selectedPrevenitiveperiodique)
  this.prevenitiveperiodique = {...prevenitiveperiodique};
  this.prevenitiveperiodiqueDialog = true;
}

onDelete(id:any) {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected sites?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',


   
    accept: () => {
      this.prevenitiveperiodiqueservice.deletePreventivePeriodique(id).subscribe(data=>{

          this.prevenitiveperiodiqueservice.getAllPreventivePeriodique().then(data=>{
              this.prevenitiveperiodiques=data
          }
          

          )
      })
      
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'sites Deleted', life: 3000});
  }
});
}

hideDialog() {
    this.prevenitiveperiodiqueDialog = false;
    this.submitted = false;
}


saveprevenitiveperiodique(){



this.submitted! = true;
//if(this.prevenitiveperiodiqueFormGroupe!.invalid) return;
 
if(this.typeDialog=='add')  {   this.prevenitiveperiodiqueservice.savePreventivePeriodique(this.prevenitiveperiodiqueFormGroupe!.value).subscribe(data=>{
if(data.status==='success' && data.data==1)
this.prevenitiveperiodiqueservice.getAllPreventivePeriodique().then(data=>{
  this.prevenitiveperiodiques=data
 
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'site created', life: 3000});
   
})
this.prevenitiveperiodiques = [...this.prevenitiveperiodiques];
             this.prevenitiveperiodiqueDialog = false;
      this.prevenitiveperiodique = {};
  
})
}
else if(this.typeDialog=='edit') {this.prevenitiveperiodiqueservice.updatePreventivePeriodique(this.prevenitiveperiodiqueFormGroupe!.value,this.selectedPrevenitiveperiodique.id).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.prevenitiveperiodiqueservice.getAllPreventivePeriodique().then(data=>{
      this.prevenitiveperiodiques=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'site updated', life: 3000});
       
  })
 
  else alert("error")
  this.prevenitiveperiodiques = [...this.prevenitiveperiodiques];
             this.prevenitiveperiodiqueDialog = false;
      this.prevenitiveperiodique = {};

})}
}}
  
