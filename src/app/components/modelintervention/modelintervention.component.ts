import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EquipementService } from '../equipement/equipement.service';
import { ModelOperationService } from '../modeloperation/modeloperation.service';
import { ModelInterventionService } from './modelintervention.service';
export interface ModelIntervention{
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
  Code?:any;
  idModelOperation?:any;

}

@Component({
  selector: 'app-modelintervention',
  templateUrl: './modelintervention.component.html',
  styleUrls: ['./modelintervention.component.css']
})
export class ModelinterventionComponent implements OnInit {
  selectedModelintervention! : ModelIntervention ;
  
  modelinterventionDialog: boolean = false;

   typeDialog="";

   modelinterventions!: ModelIntervention[];

   modelintervention!: ModelIntervention;

   selectedmodelinterventions!: ModelIntervention[];

    submitted!: boolean;
    modelinterventionFormGroupe!:FormGroup;
    equipements?:any;
    modeloperations?:any;
    cols!: any[];
    constructor(private modeloperationservice: ModelOperationService ,
      private modelinterventionservice: ModelInterventionService,
      private equipementservice: EquipementService,
       private messageService: MessageService, private confirmationService: ConfirmationService,
       private fb:FormBuilder) { 
         
      this.modeloperationservice.getModelOperation().then(data =>{
        this.modelinterventions = data;
        console.log(this.modelinterventions)
        this.cols = [
           { field: 'DateEntre', header: 'DateEntre' },
           { field: 'Demandeur', header: 'Demandeur' },
           { field: 'Code_Empalcement', header: 'Empalcement' },
           { field: 'DesignationEquip', header: 'Equipement' },
           { field: 'MatImmo', header: 'MatImmo' },
           { field: 'Num_Serie', header: 'Num_Serie' },
           { field: 'DesignationEtat', header: 'idEtat' },
           { field: 'Panne', header: 'Panne' },
           { field: 'DesignationDegre', header: 'CodeDegre' },
           { field: 'Observation', header: 'Observation' },
           { field: 'PieceJointe', header: 'PieceJointe' },
           { field: 'DesignationEmplacement', header: 'Emplacement' },
           { field: 'J_ddm', header: 'J_ddm' },
           { field: 'Code', header: 'Code' },
           { field: 'DateDemande', header: 'DateDemande' },

            
            
             
      ];
        
    });
       }
    ngOnInit() {
        this.modelinterventionservice.getModelIntervention().then(data =>{
            this.modelinterventions = data;
            console.log(this.modelinterventions)
            


        } );
        this.equipementservice.getAllEquipement().then(data=>{
          this.equipements=data
        })
        this.modeloperationservice.getModelOperation().then(data =>{
          this.modeloperations = data;
        
          


      } );
        this.modelinterventionFormGroupe=this.fb.group({
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
          Code:["",Validators.required],
          idModelOperation:["",Validators.required]
         
          

           

        })
    }
    openNew() {
        this.typeDialog="add"
        this.modelinterventionFormGroupe.reset();
        this.modelintervention = {};
        this.submitted = false;
        this.modelinterventionDialog = true;
    }

    deleteSelectedModelIntervention() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected model intervention?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.modelinterventions = this.modelinterventions.filter(val => this.selectedmodelinterventions.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Model Intervention Deleted', life: 3000});
            }
        });
    }

    editModelIntervention(modelintervention:any) {
      this.typeDialog="edit"
      this.selectedModelintervention=modelintervention
      console.log(this.selectedModelintervention);
      this.modelinterventionFormGroupe.patchValue(this.selectedModelintervention)
      this.modelintervention = {...modelintervention};
      this.modelinterventionDialog = true;
    }

    onDelete(id:any) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected models interventions?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.modelinterventionservice.deleteModelIntervention(id).subscribe(data=>{

              this.modelinterventionservice.getModelIntervention().then(data=>{
                  this.modelinterventions=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Models Intervention Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.modelinterventionDialog = false;
        this.submitted = false;
    }
    
 
    SaveModelIntervention(){

  console.log(this.typeDialog)

  this.submitted! = true;
  //if(this.etatFormGroupe!.invalid) return;
     
if(this.typeDialog=='add')  {   this.modelinterventionservice.addModelModelIntervention(this.modelinterventionFormGroupe!.value).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.modelinterventionservice.getModelIntervention().then(data=>{
      this.modelinterventions=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Model Intervention Created', life: 3000});
       
  })
  this.modelinterventions = [...this.modelinterventions];
                 this.modelinterventionDialog = false;
          this.modelintervention = {};
      
  })
}
  else if(this.typeDialog=='edit') {this.modelinterventionservice.updateModelIntervention(this.modelinterventionFormGroupe!.value,this.selectedModelintervention.Id).subscribe(data=>{
      if(data.status==='success' && data.data==1)
      this.modelinterventionservice.getModelIntervention().then(data=>{
          this.modelinterventions=data
         
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Model Intervention Updated', life: 3000});
           
      })
     
      else alert("error")
      this.modelinterventions = [...this.modelinterventions];
                 this.modelinterventionDialog = false;
          this.modelintervention = {};
    
})}


}
}

