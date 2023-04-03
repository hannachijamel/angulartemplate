import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ModelOperationService } from './modeloperation.service';
export interface ModelOperation{
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
  selector: 'app-modeloperation',
  templateUrl: './modeloperation.component.html',
  styleUrls: ['./modeloperation.component.css']
})
export class ModeloperationComponent implements OnInit {

  
  selectedModeloperation! : ModelOperation;
  
  modeloperationDialog: boolean = false;

   typeDialog="";

   modeloperations!: ModelOperation[];

    modeloperation!: ModelOperation;

    selectedModeloperations!: ModelOperation[];

    submitted!: boolean;
    modeloperationFormGroupe!:FormGroup;
     
    equipements!:any;
    cols!: any[];
    constructor(private modeloperationservice: ModelOperationService,
       private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private fb:FormBuilder) {
          this.modeloperationservice.getModelOperation().then(data =>{
            this.modeloperations = data;
            console.log(this.modeloperations)
            this.cols = [
              { field: 'Date_Operation', header: 'Date_Operation' },
              { field: 'Designationequip', header: 'Equip' },
              { field: 'Code_Etat_Maint', header: 'Code_Etat_Maint' },
              { field: 'User_Creation', header: 'User_Creation' },
              { field: 'Observ_Piece', header: 'Observ_Piece' },
              { field: 'Observ', header: 'Observ' },
              { field: 'Etat_Equipement', header: 'Etat_Equipement' },
              { field: 'idArticle', header: 'idArticle' },
              { field: 'OrigineP', header: 'OrigineP' },
              { field: 'CodeOperation', header: 'CodeOperation' },
              { field: 'J_ddm', header: 'J_ddm' },
              { field: 'Id_Intervention', header: 'Id_Intervention' },
              { field: 'Designation', header: 'Designation' },
              { field: 'Interne', header: 'Interne' },
              { field: 'idDocument', header: 'idDocument' },
              { field: 'Date_Deb_Rea', header: 'Date_Deb_Rea' },
              { field: 'Date_Fin_Rea', header: 'Date_Fin_Rea' },

          ];
            


        } );
         }
    ngOnInit() {
        
        this.modeloperationFormGroupe=this.fb.group({
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
        this.modeloperationFormGroupe.reset();
        this.modeloperation = {};
        this.submitted = false;
        this.modeloperationDialog = true;
    }

    deleteSelectedModelOperation() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected model operation?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.modeloperations = this.modeloperations.filter(val => this.selectedModeloperations.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Model Operation Deleted', life: 3000});
            }
        });
    }

    editModelOperation(modeloperation:any) {
      this.typeDialog="edit"
      this.selectedModeloperation=modeloperation
      console.log(this.selectedModeloperation);
      this.modeloperationFormGroupe.patchValue(this.selectedModeloperation)
      this.modeloperation = {...modeloperation};
      this.modeloperationDialog = true;
    }

    onDelete(id:any) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected models operations?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.modeloperationservice.deleteModelOperation(id).subscribe(data=>{

              this.modeloperationservice.getModelOperation().then(data=>{
                  this.modeloperations=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Models Operation Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.modeloperationDialog = false;
        this.submitted = false;
    }
    
 
    SaveModelOperation(){

  console.log(this.typeDialog)

  this.submitted! = true;
  //if(this.etatFormGroupe!.invalid) return;
     
if(this.typeDialog=='add')  {   this.modeloperationservice.addModelOperation(this.modeloperationFormGroupe!.value).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.modeloperationservice.getModelOperation().then(data=>{
      this.modeloperations=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'MOdel Operation Created', life: 3000});
       
  })
  this.modeloperations = [...this.modeloperations];
                 this.modeloperationDialog = false;
          this.modeloperation = {};
      
  })
}
  else if(this.typeDialog=='edit') {this.modeloperationservice.updateModelOperation(this.modeloperationFormGroupe!.value,this.selectedModeloperation.id).subscribe(data=>{
      if(data.status==='success' && data.data==1)
      this.modeloperationservice.getModelOperation().then(data=>{
          this.modeloperations=data
         
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Model Operation Updated', life: 3000});
           
      })
     
      else alert("error")
      this.modeloperations = [...this.modeloperations];
                 this.modeloperationDialog = false;
          this.modeloperation = {};
    
})}


}
}
