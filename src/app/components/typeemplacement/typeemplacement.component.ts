import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TypeEmplacementService } from './typeemplacement.service';
export interface TypeEmplacement{
  id?:any;
  Designation?:any;
  Code?:any;
}

@Component({
  selector: 'app-typeemplacement',
  templateUrl: './typeemplacement.component.html',
  styleUrls: ['./typeemplacement.component.css']
})
export class TypeemplacementComponent implements OnInit {

  typeemplacementDialog: boolean = false;
  typeDialog="";
  selectedtypeemplacement!:TypeEmplacement;

  typeemplacements!: TypeEmplacement[];

    typeemlpacement!: TypeEmplacement;

    selectedtypeemlpacements!: TypeEmplacement[];

    submitted!: boolean;
    typeemplacementFormGroupe!:FormGroup;

    constructor(private typeemplacementservice: TypeEmplacementService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }

    ngOnInit() {
        this.typeemplacementservice.getAllTypeEmplacement().then(data =>{
            this.typeemplacements = data;
            console.log(this.typeemplacements)
            


        } );
        this.typeemplacementFormGroupe=this.fb.group({
            Code:["",Validators.required],
            Designation:["",Validators.required],
        


        })
        

    }

    openNew() {
        this.typeDialog="add"
        this.typeemplacementFormGroupe.reset();
        this.typeemlpacement = {};
        this.submitted = false;
        this.typeemplacementDialog = true;
    }

    deleteSelectedTypeemplacement() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.typeemplacements = this.typeemplacements.filter(val => this.selectedtypeemlpacements.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'typeemlpacement Deleted', life: 3000});
            }
        });
    }

    editTypeemplacement(typeemlpacement:any) {
        this.typeDialog="edit"
        this.selectedtypeemplacement=typeemlpacement
        console.log(this.selectedtypeemplacement);
        this.typeemplacementFormGroupe.patchValue(this.selectedtypeemplacement)
        this.typeemlpacement = {...typeemlpacement};
        this.typeemplacementDialog = true;
    }

    onDelete(id:any) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected typeemplacement?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
    
      
         
          accept: () => {
            this.typeemplacementservice.deleteTypeEmplacement(id).subscribe(data=>{

                this.typeemplacementservice.getAllTypeEmplacement().then(data=>{
                    this.typeemplacements=data
                }
                
    
                )
            })
            
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'type emplacement Deleted', life: 3000});
        }
    });
      }

    hideDialog() {
        this.typeemplacementDialog = true;
        this.submitted = true;
    }
    
    savetypeemplacement(){
  
        console.log(this.typeDialog)
    
        this.submitted! = true;
        if(this.typeemplacementFormGroupe!.invalid) return;
           
    if(this.typeDialog=='add')  {   this.typeemplacementservice.saveTypeEmplacement(this.typeemplacementFormGroupe!.value).subscribe(data=>{
        if(data.status==='success' && data.data==1)
        this.typeemplacementservice.getAllTypeEmplacement().then(data=>{
            this.typeemplacements=data
           
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'type emplacement created', life: 3000});
             
        })
        this.typeemplacements = [...this.typeemplacements];
                       this.typeemplacementDialog = false;
                this.typeemlpacement = {};
            
        })
    }
        else if(this.typeDialog=='edit') {this.typeemplacementservice.updateTypeEmplacement(this.typeemplacementFormGroupe!.value,this.selectedtypeemplacement.id).subscribe(data=>{
            if(data.status==='success' && data.data==1)
            this.typeemplacementservice.getAllTypeEmplacement().then(data=>{
                this.typeemplacements=data
               
                  this.messageService.add({severity:'success', summary: 'Successful', detail: 'type emplacement updated', life: 3000});
                 
            })
           
            else alert("error")
            this.typeemplacements = [...this.typeemplacements];
                       this.typeemplacementDialog = false;
                this.typeemlpacement = {};
          
    })}
          
    
 
      }
}