import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { User } from "./users.component";








@Injectable({providedIn:"root"})
export class UserService{
    readonly  host=environment.host+'users/';
    constructor(private http: HttpClient) { }


     getSite() {
        return this.http.get<any>(this.host+'getAll')
        .toPromise()
        .then(res => <User[]>res.data)
        .then(data => { return data; });
    }
   
    addSite(User:User):Observable<any> {
 
            return this.http.post<User>(this.host + 'AddSite', User)
     }

  
     deleteSite(User:User):Observable<void>{
         
     
      
      return this.http.delete<void>(this.host+"delete/"+User.id);

  }
  getSitebyid(id:any):Observable<User>{
    
    return this.http.get<User>(this.host+"getbyid/"+id);

}
updatesite(User:User,id:any):Observable<any>{
    
    return this.http.put<User>(this.host+"editusers/"+id,User);

}

 }
