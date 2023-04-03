import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EquipementService } from '../equipement/equipement.service';
import { EquipementOrganeService } from './equipementorgane.service';
export interface EquipementOrgane{
 
  id_Equip?:any;
  id_Organe?:any;
  J_ddm?:any;
}

@Component({
  selector: 'app-equipementorgane',
  templateUrl: './equipementorgane.component.html',
  styleUrls: ['./equipementorgane.component.css']
})
export class EquipementorganeComponent implements OnInit {
  selectedEquipementOrgane! : EquipementOrgane;
  equipements!:any;
  equipementorganeDialog: boolean = false;

   typeDialog="";

   equipementorganes!: EquipementOrgane[];

   equipementorgane!: EquipementOrgane;

    selectedEquipementOrganes! : EquipementOrgane[];

    submitted!: boolean;
    equipementorganeFormGroupe!:FormGroup;
    constructor(private equipementorganesservice:EquipementOrganeService,private equipementservice: EquipementService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }



  ngOnInit(): void {
    this.equipementorganesservice.getAllEquipementOrganes().then(data =>{
      this.equipementorganes = data;
      console.log(this.equipementorganes)
  });
  this.equipementservice.getAllEquipement().then(data=>{
    this.equipements=data
  })
  this.equipementorganeFormGroupe=this.fb.group({
    id_Equip:["",Validators.required],
   
    J_ddm:["",Validators.required],
})
}

openNew() {
  this.typeDialog="add"
  this.equipementorganeFormGroupe.reset();
  this.equipementorgane = {};
  this.submitted = false;
  this.equipementorganeDialog = true;
}

deleteSelectedEquipementOrganes() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selectedsites?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.equipementorganes = this.equipementorganes.filter(val => this.selectedEquipementOrganes.includes(val));
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Equipement Deleted', life: 3000});
      }
  });
}
editEquipementOrgane(equipementorgane:any) {
  this.typeDialog="edit"
  this.selectedEquipementOrgane=equipementorgane
  console.log(this.selectedEquipementOrgane);
  this.equipementorganeFormGroupe.patchValue(this.selectedEquipementOrgane)
  this.equipementorgane = {...equipementorgane};
  this.equipementorganeDialog = true;
}

onDelete(id:any) {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected equipement organe?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',


   
    accept: () => {
      this.equipementorganesservice.deleteEquipementOrganes(id).subscribe(data=>{

          this.equipementorganesservice.getAllEquipementOrganes().then(data=>{
              this.equipementorganes=data
          }
          

          )
      })
      
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'equipemnt organe Deleted', life: 3000});
  }
});
}

hideDialog() {
    this.equipementorganeDialog = false;
    this.submitted = false;
}


saveprevenitiveperiodique(){



this.submitted! = true;
//if(this.prevenitiveperiodiqueservice.status==invalid) return;

if(this.typeDialog=='add')  {   this.equipementorganesservice.saveEquipementOrganes(this.equipementorganeFormGroupe.value).subscribe(data=>{
if(data.status==='success' && data.data==1)
this.equipementorganesservice.getAllEquipementOrganes().then(data=>{
  this.equipementorganes=data
 
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'site created', life: 3000});
   
})
this.equipementorganes = [...this.equipementorganes];
             this.equipementorganeDialog = false;
      this.equipementorgane = {};
  
})
}
else if(this.typeDialog=='edit') {this.equipementorganesservice.updateEquipementOrganes(this.equipementorganeFormGroupe!.value,this.selectedEquipementOrgane.id_Organe).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.equipementorganesservice.getAllEquipementOrganes().then(data=>{
      this.equipementorganes=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'site updated', life: 3000});
       
  })
 
  else alert("error")
  this.equipementorganes = [...this.equipementorganes];
             this.equipementorganeDialog = false;
      this.equipementorgane = {};

})}
}}