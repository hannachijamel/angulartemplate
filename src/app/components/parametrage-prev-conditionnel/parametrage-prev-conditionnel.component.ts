import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EquipementService } from '../equipement/equipement.service';
import { TypeprevService } from '../typepreventive/typeprev.service';
import {  PreventiveConditionellService } from './parametrageprevconditionnel.service';
export interface PreventiveConditionelle{
  id?:any;
  id_equip?:any;
  id_Type?:any;
  Code_Unite?:any;
  Valeur_Min?:any;
  Valeur_Max?:any;
  Periodicite?:any
  Frequence?:any;
  Frequence_Heure?:any;
  Jour?:any;
  Date_Action?:any
  Date_der_Releve?:any;
  Date_Fin?:any;
  Observation?:any;
 
}
@Component({
  selector: 'app-parametrage-prev-conditionnel',
  templateUrl: './parametrage-prev-conditionnel.component.html',
  styleUrls: ['./parametrage-prev-conditionnel.component.css']
})
export class ParametragePrevConditionnelComponent implements OnInit {
  @Output() EquipemntEventEmiter:EventEmitter<any>=new EventEmitter;
  @Input() equipe:any;
  
  selectedPreventiveconditionelle! : PreventiveConditionelle;
  
  preventiveconditionelleDialog: boolean = false;

   typeDialog="";
   equipements!:any;


   preventiveconditionelles!: PreventiveConditionelle[];

   preventiveconditionelle!: PreventiveConditionelle;
   typepreventives!:any;
    selectedPreventiveconditionelles!: PreventiveConditionelle[];
    typepreventiveconditionelles!:any;
    submitted!: boolean;
    preventiveconditionelleFormGroupe!:FormGroup;
    typeprevs!:any
    constructor(private typepreveservice:TypeprevService,private preventiveconditionelleservice:PreventiveConditionellService,private equipementservice: EquipementService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder ,private typepreventiveservice:TypeprevService) { }

  ngOnInit(): void {
   
    
    this.preventiveconditionelleFormGroupe=this.fb.group({
    
      id_equip:["",Validators.required],
      id_Type:["",Validators.required],
      Code_Unite:["",Validators.required],
      Valeur_Min:["",Validators.required],
      Valeur_Max:["",Validators.required],
      Periodicite:["",Validators.required],
      Frequence:["",Validators.required],
      Frequence_Heure:["",Validators.required],
      Jour:["",Validators.required],
      Date_Action:["",Validators.required],
      Date_der_Releve:["",Validators.required],
      Date_Fin:["",Validators.required],
      Observation:["",Validators.required]
  
  })
  this.typepreveservice.getTypePrev().then(data =>{
    this.typeprevs = data;
    console.log(this.typeprevs)
  } );
  this.equipementservice.getAllEquipement().then(data=>{
    this.equipements=data
  })
  
  }
  parametrageprevconditionelle(){
    this.EquipemntEventEmiter.emit("je suis selectioner")

  }
  onSavePrevConditionnel() {
    this.submitted=true;
    //if(this.nequipementFormGroupe?.invalid) return;
    this.preventiveconditionelleservice.savePreventiveConditionelle(this.equipe,this.preventiveconditionelleFormGroupe?.value)
      .subscribe(data=>{
        alert("Success Saving product");
      });
  }

}
