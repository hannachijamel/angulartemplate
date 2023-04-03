import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';


import {  SiteService } from './site.service';

export interface Site{
    id?:any;
    Designation?:any;
    Code?:any;
  }
  
  @Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.css']
  })
  export class SiteComponent implements OnInit {
  
    selectedSite! : Site;
  
    siteDialog: boolean = false;
  
     typeDialog="";
  
      sites!: Site[];
  
      site!: Site;
  
      selectedSites!: Site[];
  
      submitted!: boolean;
      siteFormGroupe!:FormGroup;
  
      constructor(private siteservice: SiteService, private messageService: MessageService, private confirmationService: ConfirmationService,private fb:FormBuilder) { }
  
      ngOnInit() {
          this.siteservice.getSite().then(data =>{
              this.sites = data;
              console.log(this.sites)
              
  
  
          } );
          this.siteFormGroupe=this.fb.group({
              Designation:["",Validators.required],
              Code:["",Validators.required]
  
          })
      }
      openNew() {
          this.typeDialog="add"
          this.siteFormGroupe.reset();
          this.site = {};
          this.submitted = false;
          this.siteDialog = true;
      }
  
      deleteSelectedSite() {
          this.confirmationService.confirm({
              message: 'Are you sure you want to delete the selectedsites?',
              header: 'Confirm',
              icon: 'pi pi-exclamation-triangle',
              accept: () => {
                  this.sites = this.sites.filter(val => this.selectedSites.includes(val));
                  
                  this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
              }
          });
      }
  
      editSite(site:any) {
        this.typeDialog="edit"
        this.selectedSite=site
        console.log(this.selectedSite);
        this.siteFormGroupe.patchValue(this.selectedSite)
        this.site = {...site};
        this.siteDialog = true;
      }
  
      onDelete(id:any) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected sites?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
    
      
         
          accept: () => {
            this.siteservice.deleteSite(id).subscribe(data=>{

                this.siteservice.getSite().then(data=>{
                    this.sites=data
                }
                
    
                )
            })
            
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'sites Deleted', life: 3000});
        }
    });
      }
  
      hideDialog() {
          this.siteDialog = false;
          this.submitted = false;
      }
      
   
      saveSite(){
  
    console.log(this.typeDialog)

    this.submitted! = true;
    if(this.siteFormGroupe!.invalid) return;
       
if(this.typeDialog=='add')  {   this.siteservice.addSite(this.siteFormGroupe!.value).subscribe(data=>{
    if(data.status==='success' && data.data==1)
    this.siteservice.getSite().then(data=>{
        this.sites=data
       
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'site created', life: 3000});
         
    })
    this.sites = [...this.sites];
                   this.siteDialog = false;
            this.site = {};
        
    })
}
    else if(this.typeDialog=='edit') {this.siteservice.updatesite(this.siteFormGroupe!.value,this.selectedSite.id).subscribe(data=>{
        if(data.status==='success' && data.data==1)
        this.siteservice.getSite().then(data=>{
            this.sites=data
           
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'site updated', life: 3000});
             
        })
       
        else alert("error")
        this.sites = [...this.sites];
                   this.siteDialog = false;
            this.site = {};
      
})}
      

//    saveEditSite(){
//       console.log(this.selectedSite)
//       this.submitted! = true;
//       if(this.siteFormGroupe!.invalid) return;
//        else this.siteservice.editSite(this.siteFormGroupe!.value).subscribe(data=>{
//           alert("secces")
//   })
//   }

  
  
  
//       saveSite() {
//           console.log(this.typeDialog)
  
//           this.submitted! = true;
//           if(this.siteFormGroupe!.invalid) return;
             
//       if(this.typeDialog=='add')  {   this.siteservice.addSite(this.siteFormGroupe!.value).subscribe(data=>{
//           if(data.status==='success' && data.data==1)
//               alert("success")
//               else alert("error")
//           })
//   }
//           else if(this.typeDialog=='edit') {this.siteservice.updatesite(this.siteFormGroupe!.value,this.selectedSite.id).subscribe(data=>{
//               if(data.status==='success' && data.data==1)
//               alert("success")
//               else alert("error")
  
//      })}
  
  
          // if (this.site.designation.trim()) {
          //     if (this.site.id) {
          //         this.sites[this.findIndexById(this.site.id)] = this.site;                
          //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
          //     }
          //     else {
          //         this.site.id = this.createId();
          //         this.site.code = 'product-placeholder.svg';
          //         this.sites.push(this.site);
          //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
          //     }
  
      //         this.sites = [...this.sites];
      //         this.siteDialog = false;
      //         this.site = {};
      //     }
      // }
  
      // findIndexById(id: string): number {
      //     let index = -1;
      //     for (let i = 0; i < this.sites.length; i++) {
      //         if (this.sites[i].id === id) {
      //             index = i;
      //             break;
      //         }
      //     }
  
      //     return index;
      // }
  
      // createId(): string {
      //     let id = '';
      //     var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      //     for ( var i = 0; i < 5; i++ ) {
      //         id += chars.charAt(Math.floor(Math.random() * chars.length));
      //     }
      //     return id;
      // }
  }
  
  }