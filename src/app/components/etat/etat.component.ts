import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EtatService } from './etat.service';
export interface Etat{
  Id?:any;
  Libelle?:any;
  GenererIntervention?:any;
  j_ddm?:any;
}

@Component({
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.css']
})
export class EtatComponent implements OnInit {



  
  selectedEtat! : Etat;
  
  etatDialog: boolean = false;

   typeDialog="";

    etats!: Etat[];

    etat!: Etat;

    selectedEtats!: Etat[];

    submitted!: boolean;
    etatFormGroupe!:FormGroup;

    constructor(private etatservice: EtatService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }

    ngOnInit() {
        this.etatservice.getEtat().then(data =>{
            this.etats = data;
            console.log(this.etats)
            


        } );
        this.etatFormGroupe=this.fb.group({
          Libelle:["",Validators.required],
          GenererIntervention:["",Validators.required],
          J_ddm:["",Validators.required],
           

        })
    }
    openNew() {
        this.typeDialog="add"
        this.etatFormGroupe.reset();
        this.etat = {};
        this.submitted = false;
        this.etatDialog = true;
    }

    deleteSelectedEtat() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selectedetat?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.etats = this.etats.filter(val => this.selectedEtats.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Etats Deleted', life: 3000});
            }
        });
    }

    editEtat(etat:any) {
      this.typeDialog="edit"
      this.selectedEtat=etat
      console.log(this.selectedEtat);
      this.etatFormGroupe.patchValue(this.selectedEtat)
      this.etat = {...etat};
      this.etatDialog = true;
    }

    onDelete(id:any) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected etats?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.etatservice.deleteEtat(id).subscribe(data=>{

              this.etatservice.getEtat().then(data=>{
                  this.etats=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Etats Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.etatDialog = false;
        this.submitted = false;
    }
    
 
    saveEtat(){

  console.log(this.typeDialog)

  this.submitted! = true;
  //if(this.etatFormGroupe!.invalid) return;
     
if(this.typeDialog=='add')  {   this.etatservice.addEtat(this.etatFormGroupe!.value).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.etatservice.getEtat().then(data=>{
      this.etats=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'etat created', life: 3000});
       
  })
  this.etats = [...this.etats];
                 this.etatDialog = false;
          this.etat = {};
      
  })
}
  else if(this.typeDialog=='edit') {this.etatservice.updateEtat(this.etatFormGroupe!.value,this.selectedEtat.Id).subscribe(data=>{
      if(data.status==='success' && data.data==1)
      this.etatservice.getEtat().then(data=>{
          this.etats=data
         
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'etats updated', life: 3000});
           
      })
     
      else alert("error")
      this.etats = [...this.etats];
                 this.etatDialog = false;
          this.etat = {};
    
})}


}
}
