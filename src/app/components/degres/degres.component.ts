import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DegresService } from './degre.service';
export interface Degre{
  Id?:any;
  Code?:any;
  Designation?:any;
  OrderDegres?:any;
}
@Component({
  selector: 'app-degres',
  templateUrl: './degres.component.html',
   styleUrls: ['./degres.component.css'],
   providers: [MessageService]
})
export class DegresComponent implements OnInit {

  selectedDegre! : Degre;
  
  degreDialog: boolean = false;

   typeDialog="";

    degres!: Degre[];

    degre!: Degre;

    selectedDegres!: Degre[];

    submitted!: boolean;
    degreFormGroupe!:FormGroup;

    constructor(private degreservice: DegresService,
       private messageService: MessageService,
        private confirmationService: ConfirmationService,private fb:FormBuilder) { }

    ngOnInit() {
        this.degreservice.getDegre().then(data =>{
            this.degres = data;
            console.log(this.degres)
            


        } );
        this.degreFormGroupe=this.fb.group({
          Code:["",Validators.required],
          Designation:["",Validators.required],
          OrderDegres:["",Validators.required],
           

        })
    }
    openNew() {
        this.typeDialog="add"
        this.degreFormGroupe.reset();
        this.degre = {};
        this.submitted = false;
        this.degreDialog = true;
    }

    deleteSelectedDegre() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected degre?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.degres = this.degres.filter(val => this.selectedDegres.includes(val));
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Degres Deleted', life: 3000});
            }
        });
    }

    editDegre(degre:any) {
      this.typeDialog="edit"
      this.selectedDegre=degre
      console.log(this.selectedDegre);
      this.degreFormGroupe.patchValue(this.selectedDegre)
      this.degre = {...degre};
      this.degreDialog = true;
    }

    onDelete(id:any) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected degres?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
  
    
       
        accept: () => {
          this.degreservice.deleteDegre(id).subscribe(data=>{

              this.degreservice.getDegre().then(data=>{
                  this.degres=data
              }
              
  
              )
          })
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Degres Deleted', life: 3000});
      }
  });
    }

    hideDialog() {
        this.degreDialog = false;
        this.submitted = false;
    }
    
 
    saveDegre(){

  console.log(this.typeDialog)

  this.submitted! = true;
  //if(this.etatFormGroupe!.invalid) return;
     
if(this.typeDialog=='add')  {   this.degreservice.addDegre(this.degreFormGroupe!.value).subscribe(data=>{
  if(data.status==='success' && data.data==1)
  this.degreservice.getDegre().then(data=>{
      this.degres=data
     
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'degre created', life: 3000});
       
  })
  this.degres = [...this.degres];
                 this.degreDialog = false;
          this.degre = {};
      
  })
}
  else if(this.typeDialog=='edit') {this.degreservice.updateDegre(this.degreFormGroupe!.value,this.selectedDegre.Id).subscribe(data=>{
      if(data.status==='success' && data.data==1)
      this.degreservice.getDegre().then(data=>{
          this.degres=data
         
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'degre updated', life: 3000});
           
      })
     
      else alert("error")
      this.degres = [...this.degres];
                 this.degreDialog = false;
          this.degre = {};
    
})}


}
}
