import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EquipementService } from '../equipement/equipement.service';
import { InterventionService } from '../intervention/intervention.service';
import { OperationService } from './operation.service';
export interface Operation{
  id?:any;
  Date_Operation?:any;
  idEquip?:any;
  Code_Etat_Maint?:any;
  User_Creation?:any;
  Observ_Piece?:any;
  Observ?:any;
  Etat_Equipement?:any;
  idArticle?:any;
  OrigineP?:any;
  CodeOperation?:any;
  J_ddm?:any;
  Id_Intervention?:any;
  Designation?:any;
  Interne?:any;
  idDocument?:any;
  Date_Deb_Rea?:any;
  Date_Fin_Rea?:any;

}
@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  
  selectedoperation! : Operation;
  
  operationDialog: boolean = false;

   typeDialog="";

   operations!: Operation[];

    operation!: Operation;

    selectedoperations!: Operation[];

    submitted!: boolean;
   operationFormGroupe!:FormGroup;
   cols!: any[];
   equipements!:any;
   interventions!:any;

   constructor(private interventionservice:InterventionService,private equipementservice:EquipementService,
     private operationservice: OperationService, private messageService: MessageService, 
     private confirmationService: ConfirmationService,private fb:FormBuilder) {
       
       this.operationservice.getOperation().then(data =>{
         this.operations = data;
         console.log(this.operations)
         this.cols = [
           { field: 'Date_Operation', header: 'Date_Operation' },
            { field: 'DesignationEquip', header: 'Equipement' },
           { field: 'Code_Etat_Maint', header: 'Code_Etat_Maint' },
           { field: 'User_Creation', header: ' User_Creation' },
           { field: 'Observ_Piece', header: 'Observ_Piece' },
           { field: 'Observ', header: 'Observation' },
           { field: 'Etat_Equipement', header: 'Etat_Equipement' },
           { field: 'idArticle', header: 'idArticle' },
           { field: 'OrigineP', header: 'OrigineP' },
           { field: 'CodeOperation', header: 'Code Operation' },
           { field: 'J_ddm', header: 'J_ddm' },
           { field: 'DesignationIntervention', header: 'DesignationIntervention' },
           { field: 'Designation', header: 'Designation' },
           { field: 'Interne', header: 'Interne' },
           { field: 'idDocument', header: 'Document' },
           { field: 'Date_Deb_Rea', header: 'Date_Deb_Rea' },
           { field: 'Date_Fin_Rea', header: 'Date_Fin_Rea ' },
 
       ];
         
     });
      }
    ngOnInit() {
      this.interventionservice.getIntervention().then(data =>{
          this.interventions = data;
          console.log(this.interventions)
          


      } );
      this.equipementservice.getAllEquipement().then(data=>{
        this.equipements=data
      })
      this.operationservice.getOperation().then(data =>{
        this.operations = data;
      
        


    } );
      this.operationFormGroupe=this.fb.group({
        Date_Operation:["",Validators.required],
        idEquip:["",Validators.required],
        Code_Etat_Maint:["",Validators.required],
        User_Creation:["",Validators.required],
        Observ_Piece:["",Validators.required],
        Observ:["",Validators.required],
        Etat_Equipement:["",Validators.required],
        idArticle:["",Validators.required],
        OrigineP:["",Validators.required],
        CodeOperation:["",Validators.required],
        J_ddm:["",Validators.required],
        Id_Intervention:["",Validators.required],
        Designation:["",Validators.required],
        Interne:["",Validators.required],
        idDocument:["",Validators.required],
        Date_Deb_Rea:["",Validators.required],
        Date_Fin_Rea:["",Validators.required]
       
        

         

      })
    }
    openNew() {
        this.typeDialog="add"
        this.operationFormGroupe.reset();
        this.operation = {};
        this.submitted = false;
        this.operationDialog = true;
    }

    deleteSelectedOperation() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected  operation?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.operations = this.operations.filter(val => this.selectedoperations.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: ' Operation Deleted', life: 3000});
            }
        });
    }

    editOperation(operation:any) {
      this.typeDialog="edit"
      this.selectedoperation=operation
      console.log(this.selectedoperation);
      this.operationFormGroupe.patchValue(this.selectedoperation)
      this.operation = {...operation};
      this.operationDialog = true;
    }

    onDelete(id:any) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected  operations?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.operationservice.deleteOperation(id).subscribe(data=>{

              this.operationservice.getOperation().then(data=>{
                  this.operations=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: ' Operation Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.operationDialog = false;
        this.submitted = false;
    }
    
 
    SaveOperation(){

  console.log(this.typeDialog)

  this.submitted! = true;
  //if(this.etatFormGroupe!.invalid) return;
     
if(this.typeDialog=='add')  {   this.operationservice.addOperation(this.operationFormGroupe!.value).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.operationservice.getOperation().then(data=>{
      this.operations=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: ' Operation Created', life: 3000});
       
  })
  this.operations = [...this.operations];
                 this.operationDialog = false;
          this.operation = {};
      
  })
}
  else if(this.typeDialog=='edit') {this.operationservice.updateOperation(this.operationFormGroupe!.value,this.selectedoperation.id).subscribe(data=>{
      if(data.status==='success' && data.data==1)
      this.operationservice.getOperation().then(data=>{
          this.operations=data
         
            this.messageService.add({severity:'success', summary: 'Successful', detail: ' Operation Updated', life: 3000});
           
      })
     
      else alert("error")
      this.operations = [...this.operations];
                 this.operationDialog = false;
          this.operation = {};
    
})}


}
}
