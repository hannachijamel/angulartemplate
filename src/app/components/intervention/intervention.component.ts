import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DemandeInterventionService } from '../demandeintervention/demandeintervention.service';
import { EmplacementService } from '../emplacement/emplacement.service';
import { EquipementService } from '../equipement/equipement.service';
import { EtatService } from '../etat/etat.service';
import { ModelInterventionService } from '../modelintervention/modelintervention.service';
import { InterventionService } from './intervention.service';
export interface Intervention{
  Id?:any;
  DateEntre?:any;
  Demandeur?:any;
  DateIntervention?:any;
  DateDemande?:any;
  Code_Empalcement?:any;
  id_Equip?:any;
  MatImmo?:any;
  Num_Serie?:any;
  idEtat?:any;
  Panne?:any;
  CodeDegre?:any;
  Observation?:any;
  PieceJointe?:any;
  idEmpl?:any;
  J_ddm?:any;
  IdDemandeIntervention?:any;
  Code?:any;
  idModel?:any;

}

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {

  selectedintervention! : Intervention ;
  
  interventionDialog: boolean = false;

   typeDialog="";

   interventions!: Intervention[];

   intervention!: Intervention;

   selectedinterventions!: Intervention[];

    submitted!: boolean;
    interventionFormGroupe!:FormGroup;
    equipements?:any;
    modelinterventions?:any;
    emplacements!:any;
    etats!:any;
    demandesinterventions!:any;
    cols!: any[];
    constructor(private emplacementservice:EmplacementService
      ,private interventionservice:InterventionService
      ,private etatservice:EtatService,
      private modelinterventionservice: ModelInterventionService ,
      private demandeinterventionservice: DemandeInterventionService,
      private equipementservice: EquipementService, 
      private messageService: MessageService, private confirmationService: ConfirmationService,
      private fb:FormBuilder) {

        this.interventionservice.getIntervention().then(data =>{
          this.interventions = data;
          console.log(this.interventions)
          this.cols = [
            { field: 'DateEntre', header: 'DateEntre' },
            { field: 'Demandeur', header: 'Demandeur' },
            { field: 'DateIntervention', header: 'Date Intervention' },
            { field: 'DateDemande', header: 'Date Demande' },
            { field: 'Code_Empalcement', header: 'Empalcement' },
            { field: 'DesignationEquip', header: 'Equipement' },
            { field: 'MatImmo', header: 'MatImmo' },
            { field: 'Num_Serie', header: 'Num_Serie' },
            { field: 'DesignationEtat', header: 'idEtat' },
            { field: 'Panne', header: 'Panne' },
            { field: 'CodeDegre', header: 'CodeDegre' },
            { field: 'Observation', header: 'Observation' },
            { field: 'PieceJointe', header: 'PieceJointe' },
            { field: 'idEmpl', header: 'Emplacement' },
            { field: 'J_ddm', header: 'J_ddm' },
            { field: 'Codedemande', header: 'Code Demande' },
            { field: 'Code', header: 'Code' },
             { field: 'Codedmodel', header: 'Model Operation' },
         
  
        ];
          
      });
       }
    ngOnInit() {
        this.modelinterventionservice.getModelIntervention().then(data =>{
            this.modelinterventions = data;
            console.log(this.modelinterventions)
            


        } );
        this.interventionservice.getIntervention().then(data =>{
          this.interventions = data;
          console.log(this.interventions)
          


      } );
        this.emplacementservice.getAllEmplacement().then(data =>{
          this.emplacements = data;
          console.log(this.emplacements)
          


      } );
        this.etatservice.getEtat().then(data =>{
          this.etats = data;
          console.log(this.etats)
          


      } );
        this.equipementservice.getAllEquipement().then(data=>{
          this.equipements=data
        })
        this.demandeinterventionservice.getDemandeIntervention().then(data =>{
          this.demandesinterventions = data;
        
          


      } );
        this.interventionFormGroupe=this.fb.group({
          DateEntre:["",Validators.required],
          Demandeur:["",Validators.required],
          DateIntervention:["",Validators.required],
          DateDemande:["",Validators.required],
          Code_Empalcement:["",Validators.required],
          id_Equip:["",Validators.required],
          MatImmo:["",Validators.required],
          Num_Serie:["",Validators.required],
          idEtat:["",Validators.required],
          Panne:["",Validators.required],
          CodeDegre:["",Validators.required],
          Observation:["",Validators.required],
          PieceJointe:["",Validators.required],
          idEmpl:["",Validators.required],
          J_ddm:["",Validators.required],
          IdDemandeIntervention:["",Validators.required],
          Code:["",Validators.required],
          idModel:["",Validators.required]
         
          

           

        })
    }
    openNew() {
        this.typeDialog="add"
        this.interventionFormGroupe.reset();
        this.intervention = {};
        this.submitted = false;
        this.interventionDialog = true;
    }

    deleteSelectedIntervention() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected model intervention?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.interventions = this.interventions.filter(val => this.selectedinterventions.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: ' Intervention Deleted', life: 3000});
            }
        });
    }

    editIntervention(intervention:any) {
      this.typeDialog="edit"
      this.selectedintervention=intervention
      console.log(this.selectedintervention);
      this.interventionFormGroupe.patchValue(this.selectedintervention)
      this.intervention = {...intervention};
      this.interventionDialog = true;
    }

    onDelete(id:any) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected interventions?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.interventionservice.deleteIntervention(id).subscribe(data=>{

              this.interventionservice.getIntervention().then(data=>{
                  this.interventions=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: ' Intervention Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.interventionDialog = false;
        this.submitted = false;
    }
    
 
    SaveIntervention(){

  console.log(this.typeDialog)

  this.submitted! = true;
  //if(this.etatFormGroupe!.invalid) return;
     
if(this.typeDialog=='add')  {   this.interventionservice.addIntervention(this.interventionFormGroupe!.value).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.interventionservice.getIntervention().then(data=>{
      this.interventions=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: ' Intervention Created', life: 3000});
       
  })
  this.interventions = [...this.interventions];
                 this.interventionDialog = false;
          this.intervention = {};
      
  })
}
  else if(this.typeDialog=='edit') {this.interventionservice.updateIntervention(this.interventionFormGroupe!.value,this.selectedintervention.Id).subscribe(data=>{
      if(data.status==='success' && data.data==1)
      this.interventionservice.getIntervention().then(data=>{
          this.interventions=data
         
            this.messageService.add({severity:'success', summary: 'Successful', detail: ' Intervention Updated', life: 3000});
           
      })
     
      else alert("error")
      this.interventions = [...this.interventions];
                 this.interventionDialog = false;
          this.intervention = {};
    
})}


}
}


