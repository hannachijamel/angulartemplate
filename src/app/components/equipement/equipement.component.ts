import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EmplacementService } from '../emplacement/emplacement.service';
import { EquipementService } from './equipement.service';
export interface Equipement{
  id?:any;
  Designation?:any
  Prix_Achat?:any
  Date_Achat?:any
  Code_Fam?:any
  Marque?:any
  Ref?:any
  CodeOrgane?:any
  Code_Frs_Achat?:any
  Garantie?:any
  Date_Fin_Garantie?:any
  Num_Garantie?:any
  Code_Frs_Maint?:any
  Num_Contrat?:any
  Date_Fin_Contrat?:any
  Num_Serie?:any
  Actif?:any
  User_Creat?:any
  Code_Emplacement?:any
  Date_Creat?:any
  Observation?:any
  Code_Statu?:any
  Equp_Racine?:any
  Code_Immo?:any
  Date_Reception?:any
  Date_Fabriquation?:any
  Image?:any
  Date_Mise_En_Service?:any
  Nb_Heure_Prod?:any
  Nb_Jour_Prod?:any
  TypeCons?:any
  Num_Contrat_Ass?:any
  Date_Fin_Ass?:any
  AvecPlaning?:any
  TempsFonctionnement?:any
  J_ddm?:any
  PrevConditionnel?:any
  PrevPeriodique?:any
  PrevCompteur?:any
  Code_Equip?:any
 
  
  
}

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipementComponent implements OnInit {

  selectedEquipement! : Equipement;
  
  equipementDialog: boolean = false;

   typeDialog="";

   equipements!: Equipement[];

   equipement!: Equipement;

    selectedequipements!: Equipement[];

    submitted!: boolean;
    equipementFormGroupe!:FormGroup;
    cols!: any[];
    emplacements!:any;
    

    constructor(private router:Router,private emplacementservice: EmplacementService,private equipementservice: EquipementService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }

    ngOnInit() {
      this.emplacementservice.getAllEmplacement().then(data =>{
        this.emplacements = data;
        console.log(this.emplacements)
     

        this.equipementservice.getAllEquipement().then(data =>{
            this.equipements = data;
            console.log(this.equipements)
            this.cols = [
              { field: 'Designation', header: 'Designation' },
              { field: 'Prix_Achat', header: 'Prix_Achat' },
              { field: 'Date_Achat', header: 'Date_Achat' },
              { field: 'Code_Fam', header: 'Code_Fam' },
              { field: 'Marque', header: 'Marque' },
              { field: 'Ref', header: 'Ref' },
              { field: 'CodeOrgane', header: 'CodeOrgane' },
              { field: 'Code_Frs_Achat', header: 'Code_Frs_Achat' },
              { field: 'Garantie', header: 'Garantie' },
              { field: 'Date_Fin_Garantie', header: 'Date_Fin_Garantie' },
              { field: 'Num_Garantie', header: 'Num_Garantie' },
              { field: 'Code_Frs_Maint', header: 'Code_Frs_Maint' },
              { field: 'Num_Contrat', header: 'Num_Contrat' },
              { field: 'Date_Fin_Contrat', header: 'Date_Fin_Contrat' },
              { field: 'Num_Serie', header: 'Num_Serie' },
              { field: 'Actif', header: 'Actif' },
              { field: 'User_Creat', header: 'User_Creat' },
              { field: 'Code_Emplacement', header: 'Code_Emplacement' },
              { field: 'Date_Creat', header: 'Date_Creat' },
              { field: 'Observation', header: 'Observation' },
              { field: 'Code_Statu', header: 'Code_Statu' },
              { field: 'Equp_Racine', header: 'Equp_Racine' },
              { field: 'Code_Immo', header: 'Code_Immo' },
              { field: 'Date_Reception', header: 'Date_Reception' },
              { field: 'Date_Fabriquation', header: 'Date_Fabriquation' },
              { field: 'Image', header: 'Image' },
              { field: 'Date_Mise_En_Service', header: 'Date_Mise_En_Service' },
              { field: 'Nb_Heure_Prod', header: 'Nb_Heure_Prod' },
              { field: 'Nb_Jour_Prod', header: 'Nb_Jour_Prod' },
              { field: 'TypeCons', header: 'TypeCons' },
              { field: 'Num_Contrat_Ass', header: 'Num_Contrat_Ass' },
              { field: 'Date_Fin_Ass', header: 'Date_Fin_Ass' },
              { field: 'AvecPlaning', header: 'AvecPlaning' },
              { field: 'TempsFonctionnement', header: 'TempsFonctionnement' },
              { field: 'J_ddm', header: 'J_ddm' },
              { field: 'PrevConditionnel', header: 'PrevConditionnel' },
              { field: 'PrevPeriodique', header: 'PrevPeriodique' },
              { field: 'PrevCompteur', header: 'PrevCompteur' },
              { field: 'Code_Equip', header: 'Code_Equip' },

          ];
            
        })

        } );
        this.equipementFormGroupe=this.fb.group({
          Designation:["",Validators.required],
          Prix_Achat:["",Validators.required],
          Date_Achat:["",Validators.required],
          Code_Fam:["",Validators.required],
          Marque:["",Validators.required],
          Ref:["",Validators.required],
          CodeOrgane:["",Validators.required],
          Code_Frs_Achat:["",Validators.required],
          Garantie:["",Validators.required],
          Date_Fin_Garantie:["",Validators.required],
          Num_Garantie:["",Validators.required],
          Code_Frs_Maint:["",Validators.required],
          Num_Contrat:["",Validators.required],
          Date_Fin_Contrat:["",Validators.required],
          Num_Serie:["",Validators.required],
          Actif:["",Validators.required],
          User_Creat:["",Validators.required],
          Code_Emplacement:["",Validators.required],
          Date_Creat:["",Validators.required],
          Observation:["",Validators.required],
          Code_Statu:["",Validators.required],
          Equp_Racine:["",Validators.required],
          Code_Immo:["",Validators.required],
          Date_Reception:["",Validators.required],
          Date_Fabriquation:["",Validators.required],
          Image:["",Validators.required],
          Date_Mise_En_Service:["",Validators.required],
          Nb_Heure_Prod:["",Validators.required],
          Nb_Jour_Prod:["",Validators.required],
          TypeCons:["",Validators.required],
          Num_Contrat_Ass:["",Validators.required],
          Date_Fin_Ass:["",Validators.required],
          AvecPlaning:["",Validators.required],
          TempsFonctionnement:["",Validators.required],
          J_ddm:["",Validators.required],
          PrevConditionnel:["",Validators.required],
          PrevPeriodique:["",Validators.required],
          PrevCompteur:["",Validators.required],
          Code_Equip:["",Validators.required]
         
          

           

        })
    }
    openNew() {
      this.router.navigate(['/equipement/new'])
        //this.typeDialog="add"
       // this.equipementFormGroupe.reset();
       // this.equipement = {};
       // this.submitted = false;
       // this.equipementDialog = true;
    }

    deleteSelectedEquipement() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected model operation?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.equipements = this.equipements.filter(val => this.selectedequipements.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Equipement Deleted', life: 3000});
            }
        });
    }

    editEquipement(Equipement:any) {
      this.router.navigate(['/equipement/edit'])
      // this.typeDialog="edit"
      // this.selectedEquipement=this.equipement
      // console.log(this.selectedEquipement);
      // this.equipementFormGroupe.patchValue(this.selectedEquipement)
      // this.equipement = {...this.equipement};
      // this.equipementDialog = true;
    }

    onDelete(id:any) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected Equipement?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.equipementservice.deleteEquipement(id).subscribe(data=>{

              this.equipementservice.getAllEquipement().then(data=>{
                  this.equipements=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Equipement Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.equipementDialog = false;
        this.submitted = false;
    }
    
 
    SaveEquipement(){

  console.log(this.typeDialog)

  this.submitted! = true;
  //if(this.etatFormGroupe!.invalid) return;
     
if(this.typeDialog=='add')  {   this.equipementservice.saveEquipement(this.equipementFormGroupe!.value).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.equipementservice.getAllEquipement().then(data=>{
      this.equipements=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Equipement Created', life: 3000});
       
  })
  this.equipements = [...this.equipements];
                 this.equipementDialog = false;
          this.equipement = {};
      
  })
}
  else if(this.typeDialog=='edit') {this.equipementservice.updateEquipement(this.equipementFormGroupe!.value,this.selectedEquipement.id).subscribe(data=>{
      if(data.status==='success' && data.data==1)
      this.equipementservice.getAllEquipement().then(data=>{
          this.equipements=data
         
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Equipement Updated', life: 3000});
           
      })
     
      else alert("error")
      this.equipements = [...this.equipements];
                 this.equipementDialog = false;
          this.equipement = {};
    
})}


}
}
