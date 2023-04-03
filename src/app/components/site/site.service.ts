import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
;
import { environment } from "src/environments/environment";
import { Site } from "./site.component";







@Injectable({providedIn:"root"})
export class SiteService{
    readonly  host=environment.host+'sites/';
    constructor(private http: HttpClient) { }


     getSite() {
        return this.http.get<any>(this.host+'getAll')
        .toPromise()
        .then(res => <Site[]>res.data)
        .then(data => { return data; });
    }
   
    addSite(site:Site):Observable<any> {
 
            return this.http.post<Site>(this.host + 'AddSite', site)
     }

  
     deleteSite(site:Site):Observable<void>{
         
     
      
      return this.http.delete<void>(this.host+"delete/"+site.id);

  }
  getSitebyid(id:any):Observable<Site>{
    
    return this.http.get<Site>(this.host+"getbyid/"+id);

}
updatesite(site:Site,id:any):Observable<any>{
    
    return this.http.put<Site>(this.host+"editSite/"+id,site);

}

 }
