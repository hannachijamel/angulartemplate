import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DegresService } from '../degres/degre.service';
import { EmplacementService } from '../emplacement/emplacement.service';
import { EquipementService } from '../equipement/equipement.service';
import { EtatService } from '../etat/etat.service';
import { DemandeInterventionService } from './demandeintervention.service';
export interface DemandeIntervention{
  Id?:any;
  DateEntre?:any;
  Demandeur?:any;
  Code_Empalcement?:any;
  id_Equip?:any;
  MatImmo?:any;
  Num_Serie?:any;
  idEtat?:any;
  Panne?:any;
  idDegre?:any;
  Observation?:any;
  PieceJointe?:any;
  idEmpl?:any;
  J_ddm?:any;
  Code?:any;
  DateDemande?:any;

}
@Component({
  selector: 'app-demandeintervention',
  templateUrl: './demandeintervention.component.html',
  styleUrls: ['./demandeintervention.component.css']
})
export class DemandeinterventionComponent implements OnInit {

  selectedDemandeIntervention! : DemandeIntervention ;
  
  demandeinterventionDialog: boolean = false;

   typeDialog="";

   demandeintervens!: DemandeIntervention[];

   demandeinterven!: DemandeIntervention;

   selecteddemandeintervens!: DemandeIntervention[];

    submitted!: boolean;
    demandeintervenFormGroupe!:FormGroup;
    equipements?:any;
    modeloperations?:any;
    emplacements!:any;
    Etats!:any;
    Degres!:any;
    cols!: any[];
    constructor(  private degreservice:DegresService,private etatservice:EtatService,
        private emplacementservice:EmplacementService ,
        private demandeinterventionservice: DemandeInterventionService ,
        private equipementservice: EquipementService, private messageService: MessageService,
         private confirmationService: ConfirmationService,private fb:FormBuilder) { 
          this.demandeinterventionservice.getDemandeIntervention().then(data =>{
            this.demandeintervens = data;
            console.log(this.demandeintervens)
            this.cols = [
              { field: 'DateEntre', header: 'DateEntre' },
              { field: 'Demandeur', header: 'Demandeur' },
              { field: 'DateIntervention', header: 'Date Intervention' },
              { field: 'DateDemande', header: 'DateDemande' },
              { field: 'Code_Empalcement', header: 'Empalcement' },
              { field: 'DesignationEquip', header: 'Equipement' },
              { field: 'MatImmo', header: 'MatImmo' },
              { field: 'Num_Serie', header: 'Num_Serie' },
              { field: 'idEtat', header: 'idEtat' },
              { field: 'Panne', header: 'Panne' },
              { field: 'CodeDegre', header: 'CodeDegre' },
              { field: 'Observation', header: 'Observation' },
              { field: 'PieceJointe', header: 'PieceJointe' },
              { field: 'idEmpl', header: 'Emplacement' },
              { field: 'J_ddm', header: 'J_ddm' },
              { field: 'Code', header: 'Code' },
               { field: 'DesignationModelOperation', header: 'Model Operation' },
           
    
          ];
            
        });
         }


    ngOnInit() {
        this.demandeinterventionservice.getDemandeIntervention().then(data =>{
            this.demandeintervens = data;
            console.log(this.demandeintervens)
            


        } );
        this.degreservice.getDegre().then(data =>{
          this.Degres = data;
          console.log(this.Degres)
          


      } );
        this.etatservice.getEtat().then(data =>{
          this.Etats = data;
          console.log(this.Etats)
          


      } );
        this.emplacementservice.getAllEmplacement().then(data =>{
          this.emplacements = data;
          console.log(this.emplacements)
          


      } );
        this.equipementservice.getAllEquipement().then(data=>{
          this.equipements=data
        })
   
        this.demandeintervenFormGroupe=this.fb.group({
          DateEntre:["",Validators.required],
          Demandeur:["",Validators.required],
          Code_Empalcement:["",Validators.required],
          id_Equip:["",Validators.required],
          MatImmo:["",Validators.required],
          Num_Serie:["",Validators.required],
          idEtat:["",Validators.required],
          Panne:["",Validators.required],
          idDegre:["",Validators.required],
          Observation:["",Validators.required],
          PieceJointe:["",Validators.required],
          idEmpl:["",Validators.required],
          J_ddm:["",Validators.required],
          Code:["",Validators.required],
          DateDemande:["",Validators.required],
         
          

           

        })
    }
    openNew() {
        this.typeDialog="add"
        this.demandeintervenFormGroupe.reset();
        this.demandeinterven = {};
        this.submitted = false;
        this.demandeinterventionDialog = true;
    }

    deleteSelectedDemandeIntervention() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected demandes intervention?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.demandeintervens = this.demandeintervens.filter(val => this.selecteddemandeintervens.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Demande Intervention Deleted', life: 3000});
            }
        });
    }

    editDemandeIntervention(demandeinterven:any) {
      this.typeDialog="edit"
      this.selectedDemandeIntervention=demandeinterven
      console.log(this.selectedDemandeIntervention);
      this.demandeintervenFormGroupe.patchValue(this.selectedDemandeIntervention)
      this.demandeinterven = {...demandeinterven};
      this.demandeinterventionDialog = true;
    }

    onDelete(id:any) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected demandes interventions?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.demandeinterventionservice.deleteDemandeIntervention(id).subscribe(data=>{

              this.demandeinterventionservice.getDemandeIntervention().then(data=>{
                  this.demandeintervens=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Demandes Interventions Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.demandeinterventionDialog = false;
        this.submitted = false;
    }
    
 
    SaveDemandeIntervention(){

  console.log(this.typeDialog)

  this.submitted! = true;
  //if(this.demandeintervenFormGroupe!.invalid) return;
     
if(this.typeDialog=='add')  {   this.demandeinterventionservice.addDemandeIntervention(this.demandeintervenFormGroupe!.value).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.demandeinterventionservice.getDemandeIntervention().then(data=>{
      this.demandeintervens=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Demande Intervention Created', life: 3000});
       
  })
  this.demandeintervens = [...this.demandeintervens];
                 this.demandeinterventionDialog = false;
          this.demandeinterven = {};
      
  })
}
  else if(this.typeDialog=='edit') {this.demandeinterventionservice.updateDemandeIntervention(this.demandeintervenFormGroupe!.value,this.selectedDemandeIntervention.Id).subscribe(data=>{
      if(data.status==='success' && data.data==1)
      this.demandeinterventionservice.getDemandeIntervention().then(data=>{
          this.demandeintervens=data
         
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Demande Intervention Updated', life: 3000});
           
      })
     
      else alert("error")
      this.demandeintervens = [...this.demandeintervens];
                 this.demandeinterventionDialog = false;
          this.demandeinterven = {};
    
})}


}
}

