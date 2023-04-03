
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from './users.service';




export interface User{
    id?:any;
    username?:any;
    email?:any;
    password?:any;
    role?:any;
    actif?:any;

  }
  
  @Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
  })
  export class UsersComponent implements OnInit {
  
    selectedUser! : User;
  
    UserDialog: boolean = false;
  
     typeDialog="";
  
     users!: User[];
  
      user!: User;
  
      selectedUsers!: User[];
  
      submitted!: boolean;
      UserFormGroupe!:FormGroup;
  
      constructor(private userservice: UserService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }
  
      ngOnInit() {
          this.userservice.getSite().then(data =>{
              this.users = data;
              console.log(this.users)
              
  
  
          } );
          this.UserFormGroupe=this.fb.group({
            username:["",Validators.required],
            email:["",Validators.required],
            password:["",Validators.required],
            role:["",Validators.required],
            actif:["",Validators.required]
          })
      }
      openNew() {
          this.typeDialog="add"
          this.UserFormGroupe.reset();
          this.user = {};
          this.submitted = false;
          this.UserDialog = true;
      }
  
      deleteSelectedSite() {
          this.confirmationService.confirm({
              message: 'Are you sure you want to delete the selectedsites?',
              header: 'Confirm',
              icon: 'pi pi-exclamation-triangle',
              accept: () => {
                  this.users = this.users.filter(val => this.selectedUsers.includes(val));
                  
                  this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
              }
          });
      }
  
      editSite(site:any) {
        this.typeDialog="edit"
        this.selectedUser=site
        console.log(this.selectedUser);
        this.UserFormGroupe.patchValue(this.selectedUser)
        this.user = {...site};
        this.UserDialog = true;
      }
  
      onDelete(id:any) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected sites?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
    
      
         
          accept: () => {
            this.userservice.deleteSite(id).subscribe(data=>{

                this.userservice.getSite().then(data=>{
                    this.users=data
                }
                
    
                )
            })
            
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'sites Deleted', life: 3000});
        }
    });
      }
  
      hideDialog() {
          this.UserDialog = false;
          this.submitted = false;
      }
      
   
      saveSite(){
  
    console.log(this.typeDialog)

    this.submitted! = true;
    if(this.UserFormGroupe!.invalid) return;
       
if(this.typeDialog=='add')  {   this.userservice.addSite(this.UserFormGroupe!.value).subscribe(data=>{
    if(data.status==='success' && data.data==1)
    this.userservice.getSite().then(data=>{
        this.users=data
       
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'site created', life: 3000});
         
    })
    this.users = [...this.users];
                   this.UserDialog = false;
            this.user = {};
        
    })
}
    else if(this.typeDialog=='edit') {this.userservice.updatesite(this.UserFormGroupe!.value,this.selectedUser.id).subscribe(data=>{
        if(data.status==='success' && data.data==1)
        this.userservice.getSite().then(data=>{
            this.users=data
           
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'site updated', life: 3000});
             
        })
       
        else alert("error")
        this.users = [...this.users];
                   this.UserDialog = false;
            this.user = {};
      
})}
      

  }
  
  }