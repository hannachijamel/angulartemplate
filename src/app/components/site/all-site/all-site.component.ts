import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-all-site',
  templateUrl: './all-site.component.html',
  styleUrls: ['./all-site.component.css']
})
export class AllSiteComponent implements OnInit {

//   sites1!: Site[];

//  sites2!: Site[];

//  selectedSite1!: Site;

//  selectedSite2!: Site;

 constructor(private siteservice: SiteService) { }

  ngOnInit() {
/* //       this.siteservice.getSite().then(data => this.sites1 = data);
     
//       this.siteservice.getSite().then(data => this.sites2 = data);
this.ongetAllSite()
 }
 
 ongetAllSite(){
  this.siteservice.getSite().subscribe(res=>{
    this.sites1=res;
    console.log(res);
    
  })
  this.siteservice.getSite().subscribe(res=>{
    this.sites2=res;
  })
} */

  }}