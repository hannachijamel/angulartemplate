import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TypeprevService } from './typeprev.service';
export interface TypePrev{
  id?:any;
  Designation?:any;
  Nature?:any;
 
 
}
@Component({
  selector: 'app-typepreventive',
  templateUrl: './typepreventive.component.html',
  styleUrls: ['./typepreventive.component.css']
})
export class TypepreventiveComponent implements OnInit {

  selectedTypePrev! : TypePrev;
  
  typePrevDialog: boolean = false;
  
     typeDialog="";
  
     typePrevs!: TypePrev[];
  
     typePrev!: TypePrev;
  
      selectedTypePrevs!: TypePrev[];
  
      submitted!: boolean;
      typePrevFormGroupe!:FormGroup;
  
      constructor(private typePrevservice: TypeprevService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }
  
      ngOnInit() {
          this.typePrevservice.getTypePrev().then(data =>{
              this.typePrevs = data;
              console.log(this.typePrevs)
              
  
  
          } );
          this.typePrevFormGroupe=this.fb.group({
              Designation:["",Validators.required],
              Nature:["",Validators.required]
  
          })
      }
      openNew() {
          this.typeDialog="add"
          this.typePrevFormGroupe.reset();
          this.typePrev = {};
          this.submitted = false;
          this.typePrevDialog = true;
      }
  
      deleteSelectedTypeprev() {
          this.confirmationService.confirm({
              message: 'Are you sure you want to delete the selectedsites?',
              header: 'Confirm',
              icon: 'pi pi-exclamation-triangle',
              accept: () => {
                  this.typePrevs = this.typePrevs.filter(val => this.selectedTypePrevs.includes(val));
                  
                  this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
              }
          });
      }
  
      editTypeprev(typePrev:any) {
        this.typeDialog="edit"
        this.selectedTypePrev=typePrev
        console.log(this.selectedTypePrev);
        this.typePrevFormGroupe.patchValue(this.selectedTypePrev)
        this.typePrev = {...typePrev};
        this.typePrevDialog = true;
      }
  
      onDelete(id:any) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected typePrevs?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
    
      
         
          accept: () => {
            this.typePrevservice.deleteTypePrev(id).subscribe(data=>{

                this.typePrevservice.getTypePrev().then(data=>{
                    this.typePrevs=data
                }
                
    
                )
            })
            
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'typePrevs Deleted', life: 3000});
        }
    });
      }
  
      hideDialog() {
          this.typePrevDialog = false;
          this.submitted = false;
      }
      
   
      saveTypeprev(){
  
    console.log(this.typeDialog)

    this.submitted! = true;
    if(this.typePrevFormGroupe!.invalid) return;
       
if(this.typeDialog=='add')  {   this.typePrevservice.addTypePrev(this.typePrevFormGroupe!.value).subscribe(data=>{
    if(data.status==='success' && data.data==1)
    this.typePrevservice.getTypePrev().then(data=>{
        this.typePrevs=data
       
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'site created', life: 3000});
         
    })
    this.typePrevs = [...this.typePrevs];
                   this.typePrevDialog = false;
            this.typePrev = {};
        
    })
}
    else if(this.typeDialog=='edit') {this.typePrevservice.updateTypePrev(this.typePrevFormGroupe!.value,this.selectedTypePrev.id).subscribe(data=>{
        if(data.status==='success' && data.data==1)
        this.typePrevservice.getTypePrev().then(data=>{
            this.typePrevs=data
           
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'typePrevs updated', life: 3000});
             
        })
       
        else alert("error")
        this.typePrevs = [...this.typePrevs];
                   this.typePrevDialog = false;
            this.typePrev = {};
      
})}
}}    
