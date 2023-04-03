import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { EmplacementService } from '../emplacement/emplacement.service';
import { NewequipementService } from './newequipement.service';
import {InputSwitchModule} from 'primeng/inputswitch';
import { EquipementService } from '../equipement/equipement.service';
export interface Newequipement{
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
  selector: 'app-newequipement',
  templateUrl: './newequipement.component.html',
  styleUrls: ['./newequipement.component.css']
})
export class NewequipementComponent implements OnInit {

  equip:any;
  selectedNEquipement! : Newequipement;
  
  



   nequipements: any;

   equipement!: Newequipement;

    selectedequipements!: Newequipement[];

    submitted!: boolean;
    nequipementFormGroupe!:FormGroup;
    cols!: any[];
    emplacements!:any;
    items!: MenuItem[];

  

    activeItem!: MenuItem;

    activeItem2!: MenuItem;
    checked1: boolean = false;

    checked2: boolean = true;
    typeDialog="";


    constructor(private equipementservice:EquipementService,private emplacementservice: EmplacementService,private newequipementservice: NewequipementService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder, private route: ActivatedRoute,
      private router: Router ) { }

    ngOnInit() {

      this.emplacementservice.getAllEmplacement().then(data =>{
        this.emplacements = data;
        console.log(this.emplacements)
      })
      this.nequipementFormGroupe=this.fb.group({
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
      const equipementId = this.route.snapshot.paramMap.get('id');
    console.log(equipementId)
    if(equipementId!='new'){
this.equip=equipementId

    }
// if(equipementId==='new'){

// }else{
//   this.emplacementservice.getAllEmplacement().then((data) =>{
//     this.emplacements = data;
//     console.log(this.emplacements)
//     this.newequipementservice.getAllEquipement().then((data) =>{
//         this.nequipements  = data;
//         console.log(this.nequipements)

//     })
//     } );
//     this.items = [
//       {label: 'Home', icon: 'pi pi-fw pi-home'},
//       {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
//       {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
//       {label: 'Documentation', icon: 'pi pi-fw pi-file'},
//       {label: 'Settings', icon: 'pi pi-fw pi-cog'}
//   ];
//   this.activeItem = this.items[0];
// }

}


   

    deleteSelectedEquipement() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected model operation?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
            //    this.nequipements = this.nequipements.filter(val=> this.selectedequipements.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Equipement Deleted', life: 3000});
            }
        });
    }

    editEquipement(Equipement:any) {
      this.newequipementservice.updateEquipement(this.nequipementFormGroupe!.value,this.selectedNEquipement.id).subscribe(data=>{
      
        this.newequipementservice.getAllEquipement().then(data=>{
            this.nequipements=data
        })
      })
    
    }

    onDelete(id:any) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected Equipement?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.newequipementservice.deleteEquipement(id).subscribe(data=>{

              this.newequipementservice.getAllEquipement().then(data=>{
                  this.nequipements=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Equipement Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.submitted = false;
    }
    onActionEvent($event:any){
      console.log($event)
    }
    onSaveEquipement() {
      
      this.submitted=true;
      //if(this.nequipementFormGroupe?.invalid) return;

      this.equipementservice.saveEquipement(this.nequipementFormGroupe?.value)
        .subscribe(data=>{
         alert("equipement created");
          });
        this.equipementservice.getAllEquipement().then(data=>{
          this.newequipementservice.getEquipMaxid().subscribe(data=>{
            this.equip=data
           
            console.log(this.equip)
          })

        })
      
      

    }
    

  }



