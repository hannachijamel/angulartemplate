import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
;
import { environment } from "src/environments/environment";
import { TypePrev } from "./typepreventive.component";








@Injectable({providedIn:"root"})
export class TypeprevService{
    readonly  host=environment.host+'TypePrev/';
    constructor(private http: HttpClient) { }


     getTypePrev() {
        return this.http.get<any>(this.host+'getAll')
        .toPromise()
        .then(res => <TypePrev[]>res.data)
        .then(data => { return data; });
    }
   
    addTypePrev(typePrev:TypePrev):Observable<any> {
 
            return this.http.post<TypePrev>(this.host + 'AddTypePrev', typePrev)
     }

  
     deleteTypePrev(typePrev:TypePrev):Observable<void>{
         
     
      
      return this.http.delete<void>(this.host+"delete/"+typePrev.id);

  }
  getSitebyid(id:any):Observable<TypePrev>{
    
    return this.http.get<TypePrev>(this.host+"getbyid/"+id);

}
updateTypePrev(typePrev:TypePrev,id:any):Observable<any>{
    
    return this.http.put<TypePrev>(this.host+"editTypeprev/"+id,typePrev);

}

 }


