import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EquipementService } from '../equipement/equipement.service';
import { TypeprevService } from '../typepreventive/typeprev.service';
import { PreventiveParCompteurService } from './preventive-par-compteur.service';

export interface PreventiveParCompteur{
   id?:any
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
  selector: 'app-preventive-par-compteur',
  templateUrl: './preventive-par-compteur.component.html',
  styleUrls: ['./preventive-par-compteur.component.css']
})
export class PreventiveParCompteurComponent implements OnInit {

 
  selectedPrevenitiveparcompteur! : PreventiveParCompteur;
  equipements!:any;
  prevenitiveparcompteurDialog: boolean = false;

   typeDialog="";

   prevenitiveparcompteurs!: PreventiveParCompteur[];
   prevenitiveparcompteur!: PreventiveParCompteur;

    selectedPrevenitiveparcompteurs!: PreventiveParCompteur[];
typepreventives!:any;
    submitted!: boolean;
    prevenitiveparcompteurFormGroupe!:FormGroup;
    cols!: any[];
    constructor(private prevenitiveparcompteurservice:PreventiveParCompteurService,private equipementservice: EquipementService,
       private messageService: MessageService, private confirmationService: ConfirmationService,
       private fb:FormBuilder,private typepreventiveservice:TypeprevService) {
         
      this.prevenitiveparcompteurservice.getAllPreventiveParCompteur().then(data =>{
        this.prevenitiveparcompteurs = data;
        console.log(this.prevenitiveparcompteurs)
        this.cols = [
          { field: 'Designationequip', header: 'Equipement' },
          { field: 'Designationtype', header: 'type priventive' },
          { field: 'Code_Unite', header: 'Code_Unite' },
          { field: 'Val_Actuelle', header: 'Val_Actuelle' },
          { field: 'Val_Alerte', header: 'Val_Alerte' },
          { field: 'JouPeriodiciter', header: 'Periodicite' },
          { field: 'Frequence', header: 'Frequence' },
          { field: 'Frequence_Heure', header: 'Frequence_Heure' },
          { field: 'Jour', header: 'Jour' },
          { field: 'Date_Action', header: 'Date_Action' },
          { field: 'Date_Der_Releve', header: 'Date_Der_Releve' },
          { field: 'Date_Fin', header: 'Date_Fin' },
          { field: 'Val_Reguilier', header: 'Val_Reguilier' },
          { field: 'Code_Maint', header: 'Code_Maint' },
          { field: 'Arret', header: 'Arret' },
          { field: 'Code_Etat_Maint', header: 'Code_Etat_Maint' },
          { field: 'Num_Alerte', header: 'Num_Alerte' },
          { field: 'Date_Der_Maint', header: 'Date_Der_Maint' },
          { field: 'Observation', header: 'Observation' },
          { field: 'J_ddm', header: 'J_ddm' },
       

      ];
        
    });

        }

  ngOnInit(): void {
    this.prevenitiveparcompteurservice.getAllPreventiveParCompteur().then(data =>{
      this.prevenitiveparcompteurs= data;
      console.log(this.prevenitiveparcompteurs)
    } );
    this.equipementservice.getAllEquipement().then(data=>{
      this.equipements=data
    })
    this.typepreventiveservice.getTypePrev().then(data=>{
      this.typepreventives=data
    })
    this.prevenitiveparcompteurFormGroupe=this.fb.group({
      id_Equip:["",Validators.required],
      id_Type:["",Validators.required],
      Code_Unite:["",Validators.required],
      Val_Actuelle:["",Validators.required],
      Val_Alerte:["",Validators.required],
      Periodicite:["",Validators.required],
      Frequence:["",Validators.required],
      Frequence_Heure:["",Validators.required],
      Jour:["",Validators.required],
      Date_Action:["",Validators.required],
      Date_Der_Releve:["",Validators.required],
      Date_Fin:["",Validators.required],
      Val_Reguilier:["",Validators.required],
      Code_Maint:["",Validators.required],
      Arret:["",Validators.required],
      Code_Etat_Maint:["",Validators.required],
      Num_Alerte:["",Validators.required],
      Date_Der_Maint:["",Validators.required],
      Observation:["",Validators.required],
      J_ddm:["",Validators.required],

  })
  }
  openNew() {
    this.typeDialog="add"
    this.prevenitiveparcompteurFormGroupe.reset();
    this.prevenitiveparcompteur = {};
    this.submitted = false;
    this.prevenitiveparcompteurDialog = true;
}

deleteSelectedPrevenitiveParCompteur() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selectedsites?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.prevenitiveparcompteurs = this.prevenitiveparcompteurs.filter(val => this.selectedPrevenitiveparcompteurs.includes(val));
            
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
        }
    });
}

editPrevenitiveParCompteur(prevenitiveparcompteur:any) {
  this.typeDialog="edit"
  this.selectedPrevenitiveparcompteur=prevenitiveparcompteur
  console.log(this.selectedPrevenitiveparcompteur);
  this.prevenitiveparcompteurFormGroupe.patchValue(this.selectedPrevenitiveparcompteur)
  this.prevenitiveparcompteur = {...prevenitiveparcompteur};
  this.prevenitiveparcompteurDialog = true;
}

onDelete(id:any) {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected sites?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',


   
    accept: () => {
      this.prevenitiveparcompteurservice.deletePreventiveParCompteur(id).subscribe(data=>{

          this.prevenitiveparcompteurservice.getAllPreventiveParCompteur().then(data=>{
              this.prevenitiveparcompteurs=data
          }
          

          )
      })
      
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'sites Deleted', life: 3000});
  }
});
}

hideDialog() {
    this.prevenitiveparcompteurDialog = false;
    this.submitted = false;
}


savePreventiveParCompteur(){


this.submitted! = true;
//if(this.prevenitiveperiodiqueservice.status==invalid) return;

if(this.typeDialog=='add')  {   this.prevenitiveparcompteurservice.savePreventiveParCompteur(this.prevenitiveparcompteurFormGroupe.value).subscribe(data=>{
if(data.status==='success' && data.data==1)
this.prevenitiveparcompteurservice.getAllPreventiveParCompteur().then(data=>{
  this.prevenitiveparcompteurs=data
 
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'site created', life: 3000});
   
})
this.prevenitiveparcompteurs = [...this.prevenitiveparcompteurs];
             this.prevenitiveparcompteurDialog = false;
      this.prevenitiveparcompteur = {};
  
})
}
else if(this.typeDialog=='edit') {this.prevenitiveparcompteurservice.updatePreventiveParecompteur(this.prevenitiveparcompteurFormGroupe!.value,this.selectedPrevenitiveparcompteur.id).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.prevenitiveparcompteurservice.getAllPreventiveParCompteur().then(data=>{
      this.prevenitiveparcompteurs=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'site updated', life: 3000});
       
  })
 
  else alert("error")
  this.prevenitiveparcompteurs = [...this.prevenitiveparcompteurs];
             this.prevenitiveparcompteurDialog = false;
      this.prevenitiveparcompteur = {};

})}
}

}